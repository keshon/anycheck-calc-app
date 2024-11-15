import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import i18n from '../../i18n/i18n';
import ru from './ru';
import en from './en';
import { useTranslation } from 'react-i18next';

const LegalScreen: React.FC = () => {
    // Localization
    const { t } = useTranslation();

    const theme = useTheme();
    const lang = i18n.resolvedLanguage;
    let legal = '';
    switch (lang) {
        // Check the current language and set the legal text accordingly
        case 'ru':
            legal = ru;
            break;
        case 'en':
        default:
            legal = en;
            break;
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Content>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>{t('legal:longtitle')}</Text>
                        <Text>{legal}</Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Use flex: 1 to take up the entire screen
    },
    card: {
        margin: 15, // Add some margin to the card to separate it from the edges of the screen
    },
});

export default LegalScreen;
