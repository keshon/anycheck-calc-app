import React, { useState } from 'react';

import { View, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';

import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Define the shape of each item in the dropdown list
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

const DropdownMini: React.FC<Props> = ({ value, items, onChangeValue, containerStyle }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<ValueType>(value);

    const handleOpen = () => setOpen(!open);

    const handleChangeValue = (value: ValueType, index: number) => {
        setSelectedValue(value);
        onChangeValue(value, index);
        setOpen(false);
    };

    const screenWidth = Dimensions.get('window').width;
    const longestItem = items.reduce((prev, current) => (prev.label.length > current.label.length ? prev : current));
    const dropdownWidth = longestItem.label.length * 10 + 60;

    const styles = StyleSheet.create({
        inputContainer: {
            zIndex: 20, // Set the z-index of the dropdown container to be above other elements on the page
        },
        style: {
            borderColor: theme.colors.elevation.level5,
            backgroundColor: theme.colors.secondary,
            borderWidth: 0,
            borderRadius: 7,
            minHeight: 20,
        },
        labelStyle: {
            fontSize: 16,
            color: theme.colors.background,
        },
        dropDownContainerStyle: {
            backgroundColor: theme.colors.elevation.level1,
            borderColor: theme.colors.elevation.level5,
            borderWidth: 0,
            borderRadius: 7,
            position: 'absolute',
            // top: 0,
            height: 500,
        },
        textStyle: {
            padding: 0,
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

    return (
        <View style={[styles.inputContainer, containerStyle]}>
            <DropDownPicker
                open={open}
                value={selectedValue}
                items={items}
                setOpen={handleOpen}
                setValue={setSelectedValue}
                onChangeValue={handleChangeValue}
                containerStyle={
                    {
                        // width:
                        //     dropdownWidth > screenWidth
                        //         ? screenWidth - 50
                        //         : dropdownWidth,
                    }
                }
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
                        color={theme.colors.onSecondary}
                        size={21}
                    />
                )}
                ArrowDownIconComponent={({ style }) => (
                    <Icon
                        name="chevron-down"
                        color={theme.colors.onSecondary}
                        size={21}
                    />
                )}
                TickIconComponent={({ style }) => (
                    <Icon
                        name="check"
                        color={theme.colors.secondary}
                        size={21}
                    />
                )}
            />
        </View>
    );
};

export { DropdownMini };
