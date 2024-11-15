import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

export interface Option {
    label: string;
    value: string | number | boolean | null | undefined;
    point?: string;
}

interface Props {
    value: string | null;
    options: Option[];
    onChangeValue?: (value: any) => void;
    forceVertical?: boolean;
    resetBy: 'null' | 'undefined' | 'number';
}

const SegmentGroup: FC<Props> = ({ value, options, onChangeValue, forceVertical = false, resetBy = 'undefined' }) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean | null | undefined>(value);

    useEffect(() => {
        switch (resetBy) {
            case 'null':
                if (value === null) {
                    setSelectedValue(null);
                }
                break;

            case 'undefined': {
                if (value === undefined) {
                    setSelectedValue(undefined);
                }
                break;
            }
            case 'number': {
                if (Number(value) == 0) {
                    setSelectedValue(0);
                }
                break;
            }
        }
    }, [value]);

    const handlePress = (option: Option) => {
        setSelectedValue(option.value);
        onChangeValue && onChangeValue(option.value);
    };

    const isVertical = forceVertical || options.length > 2;

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            borderRadius: 7,
            overflow: 'hidden',
            backgroundColor: useTheme().colors.elevation.level3,
        },
        vertical: {
            flexDirection: 'column',
        },
        button: {
            flex: 1,
            paddingVertical: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        verticalButton: {
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        selected: {
            backgroundColor: useTheme().colors.primary,
        },
        label: {
            color: useTheme().colors.onSecondaryContainer,
        },
        selectedLabel: {
            color: useTheme().colors.onPrimary,
        },
    });

    return (
        <View style={[styles.container, isVertical && styles.vertical]}>
            {options.map((option: Option) => (
                <TouchableOpacity
                    key={option.value}
                    style={[styles.button, selectedValue === option.value && styles.selected, isVertical && styles.verticalButton]}
                    onPress={() => handlePress(option)}
                >
                    <Text style={[styles.label, selectedValue === option.value && styles.selectedLabel]}>{option.label}</Text>
                    {option.point && <Text style={[{ paddingLeft: 8 }, selectedValue === option.value && styles.selectedLabel]}>{option.point}</Text>}
                </TouchableOpacity>
            ))}
        </View>
    );
};
export { SegmentGroup };
