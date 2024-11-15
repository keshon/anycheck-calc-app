import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useState, useEffect, useContext, SetStateAction, useRef } from 'react';
import { View, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { useTheme, List, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CatalogItem, getCatalogItems, getCatalogCategories } from '../../calcs/calcs';

import { DropdownMini } from '../../components/dropdownMini';
import { SearchContext } from '../../../App';
import i18n from '../../i18n/i18n';

interface CatalogScreenProps {
    props: {
        title: string;
        showOnly: 'favorites' | 'recent' | 'all';
    };
}

/**
 * Catalog screen component.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - The title of the catalog screen.
 * @param {string} props.showOnly - Specifies which items to show in the catalog (e.g., "favorites", "recent", "all").
 * @returns {JSX.Element} - The JSX element representing the catalog screen.
 */
function CatalogScreen({ props: { title, showOnly } }: CatalogScreenProps): JSX.Element {
    // Selected langauge
    const [language, setLanguage] = useState(i18n.resolvedLanguage);

    // Retrieve the current theme from the context
    const theme = useTheme();

    // Get the navigation object from the React Navigation hooks
    const navigation = useNavigation();

    // Initialize the state for catalog items
    const [favoritesItems, setFavoritesItems] = useState<CatalogItem[]>([]);
    const [noFavs, setNoFavs] = useState(false);
    const [recentItems, setRecentItems] = useState<CatalogItem[]>([]);
    const [allItems, setAllItems] = useState<CatalogItem[]>([]);

    // Initialize the state for stored IDs
    const [storedIds, setStoredIds] = useState<number[]>([]);

    // Create a new state for the selected format
    const [format, setFormat] = useState<string>('');

    // https://stackoverflow.com/questions/52805879/re-render-component-when-navigating-the-stack-with-react-navigation
    // Determine if the screen is currently focused
    const isFocused = useIsFocused();

    /**
     * useEffect hook to handle catalog screen updates when the screen is focused.
     */
    useEffect(() => {
        // Only perform the following logic if the screen is focused
        // Set current language
        setLanguage(i18n.resolvedLanguage);

        const getFormat = async () => {
            // Retrieve the format from AsyncStorage
            await AsyncStorage.getItem('format').then((result) => {
                if (result) {
                    // Update the format state with the retrieved value
                    setFormat(result);
                }
            });
        };
        getFormat();

        // Handle different showOnly options
        if (showOnly === 'favorites') {
            const getFavorite = async () => {
                // Retrieve favorite item ids from AsyncStorage
                const result = await AsyncStorage.getItem('favoriteIds');
                const resultArr = JSON.parse(String(result));

                if (resultArr || resultArr.length) {
                    // Retrieve the catalog items
                    const catalogItems = getCatalogItems();
                    // const catalogItems = allItems;

                    // Create a new array based on catalogItems
                    const newItems = catalogItems.map((item) => ({ ...item }));

                    // Mark catalog items as favorites based on parsedIds
                    for (let i = 0; i < resultArr.length; i++) {
                        const foundIndex = newItems.findIndex((x) => x.id === resultArr[i]);
                        if (foundIndex !== -1) {
                            newItems[foundIndex].favorite = true;
                        }
                    }

                    // Filter catalog items to include only favorites
                    const filteredItems = newItems.filter((elem) => elem.favorite === true);

                    // Format catalog items using the preferred format
                    const formattedItems = filteredItems.map((item) => ({
                        ...item,
                        title: getFormattedTitle(item, format, language),
                        description: getFormattedDescription(item, format, language),
                    }));

                    if (!formattedItems.length) {
                        setNoFavs(true);
                    } else {
                        setNoFavs(false);
                    }

                    // Update the state with the new catalog items
                    setFavoritesItems(formattedItems);
                }
            };

            getFavorite();
        } else if (showOnly === 'recent') {
            const getRecent = async () => {
                // Retrieve recent item ids from AsyncStorage
                const result = await AsyncStorage.getItem('recentIds');
                const resultArr = JSON.parse(String(result));

                if (resultArr.length) {
                    // Retrieve the catalog items
                    const catalogItems = getCatalogItems();

                    // Filter catalogItems to include only items with ids in parsedIds
                    const newItems = catalogItems
                        .filter((item) => resultArr.includes(item.id))
                        .sort((a, b) => resultArr.indexOf(b.id) - resultArr.indexOf(a.id))
                        .map((item) => ({ ...item }));

                    // Format catalog items using the preferred format
                    const formattedItems = newItems.map((item) => ({
                        ...item,
                        title: getFormattedTitle(item, format, language),
                        description: getFormattedDescription(item, format, language),
                    }));

                    // Update the state with the new catalog items
                    setRecentItems(formattedItems);
                }
            };

            getRecent();
        } else if (showOnly === 'all') {
            // Retrieve the catalog items
            const catalogItems = getCatalogItems();

            // Format catalog items using the preferred format
            const formattedItems = catalogItems.map((item) => ({
                ...item,
                title: getFormattedTitle(item, format, language),
                description: getFormattedDescription(item, format, language),
            }));

            // Update the state with the new catalog items
            setAllItems(formattedItems);
        }

        // Log a message to indicate that the screen is focused
        // console.log("Screen is focused");
    }, [isFocused, showOnly, format]);

    /**
     * Handles the click event when a calculator item is pressed.
     * Navigates to the calculator screen with the provided item ID.
     *
     * @param {CatalogItem} item - The catalog item being clicked.
     */
    const handleCalculatorPress = (item: CatalogItem) => {
        // console.log(`Go to OpenedScreen and pass selected calc ID: ${item.id}`);

        // Navigate to the calculator screen passing necessary data
        navigation.navigate('OpenedScreen', {
            id: item.id,
            name: item.content[language].name,
            shortname: item.content[language].shortname,
            screen: item.screen,
        });
    };

    /**
     * Handles the click event when the favorite button is pressed.
     * Updates the stored favorite IDs and AsyncStorage accordingly.
     *
     * @param {number} itemId - The ID of the item being favorited/unfavorited.
     */
    const handleFavoritePress = async (itemId: number) => {
        // Create a new array to avoid mutating the state directly
        const newIds = [...storedIds];

        // Find the index of the item in the array
        const index = newIds.indexOf(itemId);

        // Toggle the favorite status based on whether the item ID is present
        if (index > -1) {
            // Item found in the array, remove it
            newIds.splice(index, 1);
        } else {
            // Item not found, add it
            newIds.push(itemId);
        }

        // Update the stored favorite IDs
        setStoredIds(newIds);

        // Update the AsyncStorage with the updated favorite IDs
        await AsyncStorage.setItem('favoriteIds', JSON.stringify(newIds));
    };

    const renderItem = ({ item }: { item: CatalogItem }) => (
        <View>
            <List.Item
                style={[
                    {
                        paddingLeft: 0,
                        paddingRight: 7,
                        // backgroundColor: "red",
                    },
                    { opacity: item.status === 'readonly' ? 0.33 : 1 },
                ]}
                theme={theme}
                title={getFormattedTitle(item, format, language)}
                description={getFormattedDescription(item, format, language)}
                descriptionStyle={{
                    color: theme.colors.onSecondaryContainer,
                    opacity: 0.5,
                }}
                onPress={item.status !== 'readonly' ? () => handleCalculatorPress(item) : undefined}
            />
            <Divider />
        </View>
    );

    // Search query from the SearchContext
    const searchQuery = useContext(SearchContext);

    // Filter the formatted catalog items based on the search query
    const filterCatalogItems = (item: CatalogItem) => {
        const localizedContent = item.content[language];
        const fieldsToSearch = [localizedContent.name, localizedContent.shortname, localizedContent.category, localizedContent.introtext, localizedContent.description];

        return fieldsToSearch.some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()));
    };

    let filteredCatalog: CatalogItem[];

    if (showOnly === 'favorites') {
        filteredCatalog = favoritesItems.filter(filterCatalogItems);
    } else if (showOnly === 'recent') {
        filteredCatalog = recentItems.filter(filterCatalogItems);
    } else {
        filteredCatalog = allItems.filter(filterCatalogItems);
    }

    // Create a state for the catalog item categories
    const [itemsCategory, setItemsCategory] = useState(getCatalogCategories());

    // Create a state for the selected category value
    const [valueCategory, setValueCategory] = useState(itemsCategory[0].value);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: theme.colors.elevation.level5,
                    zIndex: 1,
                }}
            >
                {showOnly !== 'all' ? (
                    <Text
                        style={{
                            paddingLeft: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            fontSize: 15,
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            color: theme.colors.secondary,
                        }}
                    >
                        {title}
                    </Text>
                ) : (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    paddingLeft: 20,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    fontSize: 15,
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    color: theme.colors.secondary,
                                }}
                            >
                                {title}
                            </Text>
                        </View>
                        <View
                            style={{
                                paddingRight: 13,
                                zIndex: 1,
                                flex: 1,
                            }}
                        >
                            <DropdownMini
                                value={String(valueCategory)}
                                items={itemsCategory}
                                onChangeValue={(category: any) => {
                                    setAllItems(getCatalogItems(category));
                                }}
                            />
                        </View>
                    </View>
                )}
            </View>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <FlatList
                        scrollEnabled={false}
                        nestedScrollEnabled={false}
                        data={filteredCatalog}
                        renderItem={renderItem}
                        style={{ flex: 1 }}
                        keyExtractor={(item: any) => item.id.toString()}
                        contentContainerStyle={[
                            {
                                // borderWidth: 1,
                                // borderColor: "red",
                                // marginLeft: -15,
                            },
                            allItems.length === 0 && { flex: 1 },
                        ]}
                        ListEmptyComponent={() => (
                            <View
                                style={{
                                    flexGrow: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 40,
                                    marginBottom: 'auto',
                                }}
                            >
                                <Icon
                                    name={showOnly == 'favorites' ? 'star-border' : 'history'}
                                    size={156}
                                    color={theme.colors.backdrop}
                                    style={{
                                        opacity: theme.dark ? 1 : 0.222,
                                        margin: 'auto',
                                    }}
                                />
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

/**
 * Get the formatted title based on the specified format.
 * @param {CatalogItem} item - The catalog item.
 * @param {string} format - The format to use for formatting the title.
 * @returns {string} The formatted title.
 */
function getFormattedTitle(item: CatalogItem, format: string, language: string): string {
    const { name, shortname } = item.content[language];

    switch (format) {
        case 'longAndCategory':
            return name;
        case 'shortAndCategory':
            return shortname;
        case 'longShortAndCategory':
            return `${name} (${shortname})`;
        case 'shortLongAndCategory':
            return `${shortname} - ${name}`;
        case 'shortAndLong':
            return shortname;
        default:
            return name;
    }
}

/**
 * Get the formatted description based on the specified format.
 * @param {CatalogItem} item - The catalog item.
 * @param {string} format - The format to use for formatting the description.
 * @returns {string} The formatted description.
 */
function getFormattedDescription(item: CatalogItem, format: string, language: string): string {
    const { category, name } = item.content[language];

    switch (format) {
        case 'longAndCategory':
        case 'shortAndCategory':
        case 'longShortAndCategory':
        case 'shortLongAndCategory':
            return category;
        case 'shortAndLong':
            return name;
        default:
            return category;
    }
}

export { CatalogScreen };
