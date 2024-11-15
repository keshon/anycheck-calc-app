import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, useTheme } from 'react-native-paper';
import { SegmentGroup, Option } from './segmentGroup';

interface Props {
    title: string;
    subtitle?: string;
    value: any | null;
    options: Option[];
    onChangeValue?: (value: any) => void;
    forceVertical?: boolean;
    resetBy: 'null' | 'undefined' | 'number';
}

const SegmentContainer: FC<Props> = ({ title, subtitle, value, options, onChangeValue, forceVertical = false, resetBy = 'undefined' }) => {
    const isVertical = forceVertical || options.length > 2;
    const styles = StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
            marginBottom: 12,
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItems: 'center',
            padding: 13,
            paddingLeft: 17,
        },
        title: { color: useTheme().colors.secondary },
        subtitle: {
            color: useTheme().colors.secondary,
            opacity: 0.6,
            paddingTop: 2,
        },
    });

    return (
        <View>
            <View style={styles.inputContainer}>
                <View
                    style={{
                        flex: 2,
                        marginBottom: isVertical ? 'auto' : 0,
                    }}
                >
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
                <View style={{ flex: 2 }}>
                    <SegmentGroup
                        value={value}
                        options={options}
                        onChangeValue={onChangeValue}
                        forceVertical={forceVertical}
                        resetBy={resetBy}
                    />
                </View>
            </View>
            <Divider />
        </View>
    );
};

export { SegmentContainer };
