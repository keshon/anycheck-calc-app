import { StyleSheet, Text, View } from 'react-native';
import { Divider, useTheme } from 'react-native-paper';
import { NumericInput } from './numericInput';

const NumericContainer = ({ title, subtitle, value, placeholder = '', onChangeValue, type = 'int', suffix = '', from, to }: any) => {
    const styles = StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
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
                    }}
                >
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
                <View style={{ flex: 2 }}>
                    <NumericInput
                        value={value}
                        placeholder={placeholder}
                        onChangeValue={onChangeValue}
                        type={type}
                        suffix={suffix}
                        from={from}
                        to={to}
                    />
                </View>
            </View>
            <Divider />
        </View>
    );
};

export { NumericContainer };
