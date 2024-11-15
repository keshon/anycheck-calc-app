import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, ActivityIndicator } from 'react-native';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import { useTheme } from 'react-native-paper';
import i18n from '../i18n/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Item {
    label: string;
    value: string;
}

interface Props {
    value: ValueType;
    items: Item[];
    onChangeValue: (value: ValueType, index: number) => void;
    containerStyle?: StyleProp<ViewStyle>;
}

const Dropdown: React.FC<Props> = ({ value, items, onChangeValue, containerStyle }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<ValueType>('');

    const handleOpen = () => setOpen(!open);

    const handleChangeValue = (value: ValueType, index: number) => {
        setSelectedValue(value);
        onChangeValue(value, index);
        setOpen(false);
    };

    const styles = StyleSheet.create({
        inputContainer: {
            zIndex: 20, // Set the z-index of the dropdown container to be above other elements on the page
        },
        style: {
            backgroundColor: theme.colors.elevation.level5,
            borderColor: theme.colors.elevation.level3,
            borderWidth: 0,
            borderRadius: 7,
        },
        labelStyle: {
            fontSize: 16,
            color: theme.colors.secondary,
        },
        dropDownContainerStyle: {
            backgroundColor: theme.colors.elevation.level1,
            borderColor: theme.colors.elevation.level5,
            borderWidth: 1,
            borderRadius: 7,
        },
        textStyle: {
            padding: 0,
            color: theme.colors.secondary,
        },
        selectedItemLabelStyle: {
            padding: 0,
            margin: 0,
        },
        searchContainerStyle: {
            padding: 0,
        },
        listChildLabelStyle: {
            padding: 0,
        },
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    useEffect(() => {
        if (selectedValue) {
            setLoading(false);
        }
    }, [selectedValue]);

    return (
        <View style={[styles.inputContainer, containerStyle]}>
            {loading ? (
                <View
                    style={[
                        styles.style,
                        {
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            padding: 15,
                        },
                    ]}
                >
                    <ActivityIndicator
                        size="small"
                        color={theme.colors.primary}
                    />
                </View>
            ) : (
                <DropDownPicker
                    open={open}
                    value={selectedValue}
                    items={items}
                    setOpen={handleOpen}
                    setValue={setSelectedValue}
                    onChangeValue={handleChangeValue}
                    containerStyle={{ height: 45 }}
                    style={styles.style}
                    labelStyle={styles.labelStyle}
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    listItemLabelStyle={{ color: theme.colors.onBackground }}
                    textStyle={styles.textStyle}
                    selectedItemLabelStyle={styles.selectedItemLabelStyle}
                    searchContainerStyle={styles.searchContainerStyle}
                    listChildLabelStyle={styles.listChildLabelStyle}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    ArrowUpIconComponent={({ style }) => (
                        <Icon
                            name="chevron-up"
                            color={theme.colors.secondary}
                            size={32}
                        />
                    )}
                    ArrowDownIconComponent={({ style }) => (
                        <Icon
                            name="chevron-down"
                            color={theme.colors.secondary}
                            size={32}
                        />
                    )}
                    TickIconComponent={({ style }) => (
                        <Icon
                            name="check"
                            color={theme.colors.secondary}
                            size={30}
                        />
                    )}
                />
            )}
        </View>
    );
};

export { Dropdown };
