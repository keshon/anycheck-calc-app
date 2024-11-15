import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { HelperText, useTheme } from 'react-native-paper';

const NumericInput = ({ value, placeholder = '', onChangeValue, error = '', type, suffix = '', from, to }: any) => {
    const theme = useTheme();
    const [inputValue, setInputValue] = useState(value ? value.toString() : '');
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        if (value || value === 0) {
            setInputValue(value.toString());
        } else if (value === null) {
            setInputValue(null);
        }
    }, [value]);

    const handleInputChange = (text: string) => {
        const regexMap: any = {
            string: /^.*$/,
            int: /^[0-9][0-9]*$/, // only allow digits
            absint: /^[0-9][0-9]*$/, // only allow digits
            float: /^[+-]?([0-9]+[.]?[0-9]*|[.][0-9]+)$/, // allow digits and a decimal point
            absfloat: /^([0-9]+[.]?[0-9]*|[.][0-9]+)$/, // allow digits and a decimal point
        };

        const regex = regexMap[type];
        let processedText = text.replace(regex, (match) => match);
        let parsedValue;

        switch (type) {
            case 'int':
                parsedValue = parseInt(processedText, 10);
                break;
            case 'absint':
                parsedValue = Math.abs(parseInt(processedText, 10));
                break;
            case 'float':
                if (processedText.indexOf('.') !== processedText.length - 1 && regex.test(processedText)) {
                    parsedValue = parseFloat(processedText);
                } else {
                    parsedValue = processedText;
                }
                break;
            case 'absfloat':
                if (processedText.indexOf('.') !== processedText.length - 1 && regex.test(processedText)) {
                    parsedValue = Math.abs(parseFloat(processedText));
                } else {
                    parsedValue = processedText;
                }
                break;
            default:
                parsedValue = text;
                break;
        }

        if (isNaN(parsedValue)) {
            parsedValue = type === 'string' ? text : '';
        }

        if (from !== undefined && to !== undefined) {
            if (typeof parsedValue === 'number') {
                if (from !== undefined && parsedValue < from) {
                    parsedValue = from;
                } else if (to !== undefined && parsedValue > to) {
                    parsedValue = to;
                }
            }
        }

        setInputValue(parsedValue.toString());
        onChangeValue(parsedValue);
    };
    const keyboardType = (() => {
        switch (type) {
            case 'int':
            case 'absint':
                return 'numeric';
            case 'float':
            case 'absfloat':
                return 'numeric';
            default:
                return 'default';
        }
    })();

    const styles = StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: 7,
            overflow: 'hidden',
            backgroundColor: useTheme().colors.elevation.level3,
            borderWidth: 1,
            borderColor: useTheme().colors.backdrop,
            ...(isFocused && {
                borderColor: theme.colors.primary,
            }),
        },
        input: {
            flex: 1,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginLeft: 0,
            marginRight: 0,
        },
        suffix: {
            flex: 0,
            color: theme.colors.secondary,
            backgroundColor: theme.colors.surfaceDisabled,
            paddingHorizontal: 10,
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            height: '100%',
            verticalAlign: 'middle',
        },
    });

    return (
        <View style={[{ backgroundColor: theme.colors.surface }, styles.inputContainer]}>
            <TextInput
                style={styles.input}
                value={inputValue}
                placeholder={placeholder}
                onChangeText={handleInputChange}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {suffix && <Text style={styles.suffix}>{suffix}</Text>}
            {/* {error && <HelperText type="error">{error}</HelperText>} */}
        </View>
    );
};

export { NumericInput };
