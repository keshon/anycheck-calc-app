import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { FC, useEffect, useRef, useState } from 'react';
import { CombinedDefaultTheme, CombinedDarkTheme } from './src/themes';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider as PaperProvider, BottomNavigation, useTheme, Searchbar } from 'react-native-paper';
import { View, Appearance, ActivityIndicator, Image } from 'react-native';
import { changeLanguage } from './src/i18n/i18n';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

const colorScheme = Appearance.getColorScheme();

import { CatalogScreen as InnerCatalogScreen } from './src/screens/catalog/CatalogScreen';

/**
 *A screen component that renders the user's favorite calculators.
 *
 * @param {Object} navigation - The navigation object used to navigate to other screens.
 * @returns {JSX.Element} The rendered screen.
 */
function FavoritesScreen({ navigation }: any): JSX.Element {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <InnerCatalogScreen props={{ showOnly: 'favorites', title: t('favorites:title') }} />
        </View>
    );
}

/**
 * A screen component that renders the user's recent use of calculators.
 *
 * @param {Object} navigation - The navigation object used to navigate to other screens.
 * @returns {JSX.Element} The rendered screen.
 */
function RecentScreen({ navigation }: any): JSX.Element {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <InnerCatalogScreen props={{ showOnly: 'recent', title: t('recent:title') }} />
        </View>
    );
}

/**
 * A screen component that renders all available calculations.
 * @returns {JSX.Element} The rendered screen.
 */
function HomeScreen(): JSX.Element {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <InnerCatalogScreen props={{ showOnly: 'all', title: t('all:title') }} />
        </View>
    );
}

import InnerLegalScreen from './src/screens/legal/LegalScreen';

/**
 * A screen component that renders legal information.
 * @returns {JSX.Element} The rendered screen.
 */
function LegalScreen(): JSX.Element {
    const theme = useTheme();

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <InnerLegalScreen />
        </View>
    );
}

import InnerAboutScreen from './src/screens/about/AboutScreen';

/**
A screen component that renders information about the app.
* @param {Object} navigation - The navigation object used to navigate to other screens.
* @returns {JSX.Element} The rendered screen.
*/
function AboutScreen(): JSX.Element {
    // Get the current theme
    const theme = useTheme();

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <InnerAboutScreen />
        </View>
    );
}

import InnerSettingsScreen from './src/screens/settings/SettingsScreen';

/**
 * Renders a settings screen component.
 * @returns {JSX.Element} The rendered settings screen component.
 */
function SettingsScreen(): JSX.Element {
    // Get the current theme
    const theme = useTheme();

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <InnerSettingsScreen />
        </View>
    );
}

const Tab = createBottomTabNavigator();

/**
 * Renders a tab navigation component for the home screen.
 * @returns {JSX.Element} The rendered tab navigation component.
 */
function HomeTabs(): JSX.Element {
    // Use the translation hook to get the translation function
    const { t } = useTranslation();

    const navigation = useNavigation(); // Get the navigation object using useNavigation

    const initialRouteRef = useRef('');

    useEffect(() => {
        const fetchInitialRoute = async () => {
            try {
                const value = await AsyncStorage.getItem('favoriteIds');
                const valueObj = JSON.parse(String(value));
                console.log(valueObj.length);
                if (valueObj.length > 0) {
                    initialRouteRef.current = t('favorites:title');
                } else {
                    initialRouteRef.current = t('all:title');
                }
                // Now that we have set the initialRouteRef, navigate to it
                navigation.navigate(initialRouteRef.current);
            } catch (error) {
                console.error('Error reading value from AsyncStorage:', error);
            }
        };

        fetchInitialRoute();
    }, []);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            // Render the bottom tab bar
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    // Handle tab press
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            // Navigate to the selected screen
                            navigation.navigate(route.name);
                        }
                    }}
                    // Render the icon for each tab
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({
                                focused,
                                color,
                                size: 24,
                            });
                        }
                        return null;
                    }}
                    // Get the label for each tab
                    getLabelText={({ route }: any) => {
                        const { options } = descriptors[route.key];
                        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.title;
                        return label;
                    }}
                />
            )}
        >
            {/* Define each screen */}
            <Tab.Screen
                name={t('favorites:title')}
                component={FavoritesScreen}
                options={{
                    tabBarLabel: String(t('favorites:title')),
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="star"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={t('recent:title')}
                component={RecentScreen}
                options={{
                    tabBarLabel: String(t('recent:title')),
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="history"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={t('all:title')}
                component={HomeScreen}
                options={{
                    tabBarLabel: String(t('all:title')),
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="format-list-bulleted"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

import { Appbar } from 'react-native-paper';
import { Drawer as PaperDrawer } from 'react-native-paper';
import { DebugScreen } from './src/screens/debug/DebugScreen';

export const SearchContext = createContext('');
const Drawer = createDrawerNavigator();

/**
 * The MainDrawer component is responsible for rendering the custom drawer for the application. It is used in conjunction with the React Navigation Drawer component and the React Native Paper library. It displays a logo, search bar, and menu items for navigating through the app.
 * @param {object} navigation - An object containing navigation functions for the component.
 * @returns {JSX.Element} The rendered custom drawer.
 */
function MainDrawer({ navigation }: any): JSX.Element {
    // Get the current theme using the useTheme hook from React Native Paper
    const theme = useTheme();

    // Get the translation function using the useTranslation hook from i18next
    const { t } = useTranslation();

    // Initialize the search query state with an empty string
    const [searchQuery, setSearchQuery] = useState('');

    // Initialize the background color state with the theme's elevation level 5 color
    const [backgroundColor, setBackgroundColor] = useState(theme.colors.elevation.level5);

    // Initialize the active state with the "main" value
    const [active, setActive] = React.useState('main');

    // Set the width of the drawer
    const width = 300;

    // Calculate the height of the drawer image based on the aspect ratio and width
    const imageAspectRatio = 1.58; // assuming a 4:3 aspect ratio for the image
    const imageWidth = width;
    const imageHeight = imageWidth / imageAspectRatio;

    // Load the logo image based on the current theme
    const logo = theme.dark ? require('./assets/logo_bg_dark.jpg') : require('./assets/logo_bg_light.jpg');

    // Use a custom drawer content component to override the default drawer content
    const CustomDrawerContent = (props: any) => {
        //console.log(props.descriptors.name);
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: theme.colors.elevation.level1,
                    // paddingTop: 10,
                }}
            >
                <PaperDrawer.Section showDivider={false}>
                    <Image
                        source={logo}
                        resizeMode={'cover'}
                        style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            height: imageHeight,
                            width: '100%',
                            marginBottom: 20,
                        }}
                    />
                    <PaperDrawer.Item
                        style={{ marginBottom: 5, paddingLeft: 10 }}
                        active={active === 'main'}
                        label={t('main:title')}
                        onPress={() => {
                            setActive('main');
                            navigation.navigate(t('main:title'));
                        }}
                    />
                    <PaperDrawer.Item
                        style={{ marginBottom: 5, paddingLeft: 10 }}
                        active={active === 'settings'}
                        label={t('settings:title')}
                        onPress={() => {
                            setActive('settings');
                            navigation.navigate(t('settings:title'));
                        }}
                    />
                    <PaperDrawer.Item
                        style={{ marginBottom: 5, paddingLeft: 10 }}
                        active={active === 'legal'}
                        label={t('legal:title')}
                        onPress={() => {
                            setActive('legal');
                            navigation.navigate(t('legal:title'));
                        }}
                    />
                    <PaperDrawer.Item
                        style={{ marginBottom: 5, paddingLeft: 10 }}
                        active={active === 'about'}
                        label={t('about:title')}
                        onPress={() => {
                            setActive('about');
                            navigation.navigate(t('about:title'));
                        }}
                    />
                    {/* <PaperDrawer.Item
                        style={{ marginBottom: 5, paddingLeft: 10 }}
                        active={active === "DEBUG"}
                        label={"DEBUG"}
                        onPress={() => {
                            navigation.navigate("DEBUG");
                        }}
                    /> */}
                </PaperDrawer.Section>
            </View>
        );
    };

    return (
        <SearchContext.Provider value={searchQuery}>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        width: 300,
                    },
                }}
            >
                <Drawer.Screen
                    name={t('main:title')}
                    component={HomeTabs}
                    options={{
                        header: () => (
                            <Appbar.Header
                                statusBarHeight={0} // HOWTO: https://stackoverflow.com/questions/74421646/how-to-remove-extra-space-above-react-navigation-header
                                mode="small"
                                style={{
                                    marginTop: 7,
                                    marginBottom: 7,
                                    marginLeft: 3,
                                    marginRight: 10,
                                }}
                                elevated={true}
                            >
                                <Appbar.Action
                                    icon="menu"
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                                />
                                <Searchbar
                                    placeholder={String(t('search:title'))}
                                    onChangeText={(text) => setSearchQuery(text)}
                                    value={searchQuery}
                                    onFocus={() => {
                                        setBackgroundColor(theme.colors.background);
                                        navigation.navigate(t('main:title'));
                                    }}
                                    onBlur={() => {
                                        setBackgroundColor(theme.colors.elevation.level5);
                                    }}
                                    style={{
                                        flex: 1,
                                        marginLeft: 10,
                                        backgroundColor: backgroundColor,
                                    }}
                                    mode="bar"
                                    inputMode="text"
                                />
                            </Appbar.Header>
                        ),
                    }}
                />

                <Drawer.Screen
                    name={t('settings:title')}
                    component={SettingsScreen}
                    options={{
                        header: () => (
                            <Appbar.Header
                                mode="small"
                                style={{
                                    marginTop: 7,
                                    marginBottom: 7,
                                    marginLeft: 3,
                                    marginRight: 10,
                                }}
                                elevated={true}
                            >
                                <Appbar.Action
                                    icon="menu"
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                                />
                                <Appbar.Content title={t('settings:title')} />
                            </Appbar.Header>
                        ),
                    }}
                />
                <Drawer.Screen
                    name={t('legal:title')}
                    component={LegalScreen}
                    options={{
                        header: () => (
                            <Appbar.Header
                                mode="small"
                                style={{
                                    marginTop: 7,
                                    marginBottom: 7,
                                    marginLeft: 3,
                                    marginRight: 10,
                                }}
                                elevated={true}
                            >
                                <Appbar.Action
                                    icon="menu"
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                                />
                                <Appbar.Content title={t('legal:title')} />
                            </Appbar.Header>
                        ),
                    }}
                />
                <Drawer.Screen
                    name={t('about:title')}
                    component={AboutScreen}
                    options={{
                        header: () => (
                            <Appbar.Header
                                mode="small"
                                style={{
                                    marginTop: 7,
                                    marginBottom: 7,
                                    marginLeft: 3,
                                    marginRight: 10,
                                }}
                                elevated={true}
                            >
                                <Appbar.Action
                                    icon="menu"
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                                />
                                <Appbar.Content title={t('about:title')} />
                            </Appbar.Header>
                        ),
                    }}
                />
                <Drawer.Screen
                    name={'DEBUG'}
                    component={DebugScreen}
                    options={{
                        header: () => (
                            <Appbar.Header
                                mode="small"
                                style={{
                                    marginTop: 7,
                                    marginBottom: 7,
                                    marginLeft: 3,
                                    marginRight: 10,
                                }}
                                elevated={true}
                            >
                                <Appbar.Action
                                    icon="menu"
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                                />
                                <Appbar.Content title={'DEBUG'} />
                            </Appbar.Header>
                        ),
                    }}
                />
            </Drawer.Navigator>
        </SearchContext.Provider>
    );
}

import { OpenedScreen } from './src/screens/opened/OpenedScreen';
const Stack = createNativeStackNavigator();

// Define the types for the navigation props
interface StackHeaderProps {
    navigation: any; // Adjust the type according to your navigation library
    title?: string;
}

/**
 * The root component of the application.
 * @returns {JSX.Element} The rendered application.
 */
function App(): JSX.Element {
    // State for active theme
    const [activeTheme, setActiveTheme] = useState(colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme);

    useEffect(() => {
        // Set theme based on device appearance setting
        setActiveTheme(colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme);

        // Set language preference
        const setLanguage = async () => {
            await AsyncStorage.getItem('language').then((result) => {
                // console.log("lang from asyncstorage");
                // console.log(result);
                if (result) {
                    changeLanguage(result);
                } else {
                    // based on system language
                    changeLanguage('system');
                }
            });
        };
        setLanguage();

        // Set formatting preset
        const setFormat = async () => {
            await AsyncStorage.getItem('format').then((result) => {
                if (!result) {
                    AsyncStorage.setItem('format', 'longAndCategory');
                }
            });
        };
        setFormat();

        // Init Favorites
        const initFavorites = async () => {
            AsyncStorage.getItem('favoriteIds').then((result) => {
                // console.log("On app init favorites:");
                // console.log(result);
                if (!result) {
                    // Ceate empty list
                    AsyncStorage.setItem('favoriteIds', JSON.stringify([]));
                }
            });
        };
        initFavorites();

        // Init Recent
        const initRecent = async () => {
            AsyncStorage.getItem('recentIds').then((result) => {
                // console.log("On app init recent:");
                // console.log(result);
                if (!result) {
                    // Ceate empty list
                    AsyncStorage.setItem('recentIds', JSON.stringify([]));
                }
            });
        };
        initRecent();
    }, []);

    // Component for Stack Navigator header
    const StackHeader: FC<StackHeaderProps> = ({ navigation, title = "Calc's name" }) => {
        return (
            <Appbar.Header
                mode="small"
                style={{
                    marginTop: 7,
                    marginBottom: 7,
                    marginLeft: 3,
                    marginRight: 10,
                }}
                elevated={true}
            >
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={title} />
            </Appbar.Header>
        );
    };

    return (
        <PaperProvider theme={activeTheme}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        header: (props) => <StackHeader {...props} />,
                    }}
                >
                    <Stack.Screen
                        name="MainDrawer"
                        component={MainDrawer}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="OpenedScreen"
                        component={OpenedScreen}
                        options={() => ({
                            title: '',
                            headerTitle: '',
                            headerShown: false,
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;
