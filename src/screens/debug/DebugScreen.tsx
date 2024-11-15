import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import * as RNLocalize from 'react-native-localize';
import i18n, { fallbackLanguage } from '../../i18n/i18n';
import { useIsFocused } from '@react-navigation/native';

const DebugScreen: React.FC = () => {
    const theme = useTheme();

    const [favorites, setFavorites] = useState('');
    const [recent, setRecent] = useState('');
    const [language, setLanguage] = useState('');
    const [format, setFormat] = useState('');

    const [systemLanguage, setSystemLanguage] = useState(RNLocalize.getLocales()[0]?.languageCode);
    const [fallbackLang, setFallbackLanguage] = useState(fallbackLanguage);

    const [resolvedLang, setResolvedLang] = useState(i18n.resolvedLanguage);
    const [allkeys, setAllkeys] = useState('');

    useEffect(() => {
        const getAllKeys = async () => {
            try {
                let resp = await AsyncStorage.getAllKeys();
                console.log('All keys:', resp);
                setAllkeys(JSON.stringify(resp));
            } catch (error) {
                console.log('Error retrieving keys:', error);
            }
        };
        getAllKeys();

        const getFavorites = async () => {
            try {
                let resp = await AsyncStorage.getItem('favoriteIds');
                console.log('Favorite IDs:', resp);
                setFavorites(String(resp));
            } catch (error) {
                console.log('Error retrieving favoriteIds:', error);
            }
        };
        getFavorites();

        const getRecent = async () => {
            try {
                let resp = await AsyncStorage.getItem('recentIds');
                console.log('Recent IDs:', resp);
                setRecent(String(resp));
            } catch (error) {
                console.log('Error retrieving recentIds:', error);
            }
        };
        getRecent();

        const getFormat = async () => {
            try {
                let resp = await AsyncStorage.getItem('format');
                console.log('Format:', resp);
                setFormat(String(resp));
            } catch (error) {
                console.log('Error retrieving format:', error);
            }
        };
        getFormat();

        const getLanguage = async () => {
            try {
                let resp = await AsyncStorage.getItem('language');
                console.log('Language:', resp);
                setLanguage(String(resp));
            } catch (error) {
                console.log('Error retrieving language:', error);
            }
        };
        getLanguage();

        setResolvedLang(i18n.resolvedLanguage);

        setFallbackLanguage(fallbackLanguage);

        setSystemLanguage(RNLocalize.getLocales()[0]?.languageCode);
    }, [useIsFocused()]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'All keys:'}></Card.Title>
                    <Card.Content>
                        <Text>{allkeys}</Text>
                    </Card.Content>
                </Card>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'Favorite IDs:'}></Card.Title>
                    <Card.Content>
                        <Text>{favorites}</Text>
                    </Card.Content>
                </Card>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'Recent IDs:'}></Card.Title>
                    <Card.Content>
                        <Text>{recent}</Text>
                    </Card.Content>
                </Card>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'Format:'}></Card.Title>
                    <Card.Content>
                        <Text>{format}</Text>
                    </Card.Content>
                </Card>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'Language:'}></Card.Title>
                    <Card.Content>
                        <Text>{language}</Text>
                    </Card.Content>
                </Card>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'Resolved Language:'}></Card.Title>
                    <Card.Content>
                        <Text>{resolvedLang}</Text>
                    </Card.Content>
                </Card>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'Fallback Language:'}></Card.Title>
                    <Card.Content>
                        <Text>{fallbackLang}</Text>
                    </Card.Content>
                </Card>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Card.Title title={'System Language:'}></Card.Title>
                    <Card.Content>
                        <Text>{systemLanguage}</Text>
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
        marginHorizontal: 10, // Add some margin to the card to separate it from the edges of the screen
        marginVertical: 10,
    },
});

export { DebugScreen };
