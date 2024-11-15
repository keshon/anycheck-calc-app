import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, useTheme, Divider, List, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

import { changeLanguage } from '../../i18n/i18n';
import { styles } from './styles';
import { Dropdown } from '../../components/dropdown';
import ConfirmationDialog from '../../components/confirmationDialog';

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
    const theme = useTheme();
    const s = styles(theme);
    const { t } = useTranslation();

    const [language, setLanguage] = useState('en');
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [favoritesCleared, setFavoritesCleared] = useState(false);
    const [recentCleared, setRecentCleared] = useState(false);
    const [previewTitle, setPreviewTitle] = useState('Body Mass Index');
    const [previewSubtitle, setPreviewSubtitle] = useState('Endocrinology');
    const [formatValue, setFormatValue] = useState('');

    const [items, setItems] = useState([
        { label: t('settings:language:system'), value: 'system' },
        { label: t('settings:language:english'), value: 'en' },
        { label: t('settings:language:russian'), value: 'ru' },
    ]);

    const [formatItems, setFormatItems] = useState([
        {
            label: t('settings:formatItems:longAndCategory'),
            value: 'longAndCategory',
        },
        {
            label: t('settings:formatItems:shortAndCategory'),
            value: 'shortAndCategory',
        },
        {
            label: t('settings:formatItems:longShortAndCategory'),
            value: 'longShortAndCategory',
        },
        {
            label: t('settings:formatItems:shortLongAndCategory'),
            value: 'shortLongAndCategory',
        },
        {
            label: t('settings:formatItems:shortAndLong'),
            value: 'shortAndLong',
        },
    ]);

    const handleClearFavorites = async () => {
        await AsyncStorage.setItem('favoriteIds', JSON.stringify([]));
        setFavoritesCleared(true);
    };

    const handleClearRecent = async () => {
        await AsyncStorage.setItem('recentIds', JSON.stringify([]));
        setRecentCleared(true);
    };

    const changeFormatItem = async (val: string) => {
        console.log('from changeFormatItem:');
        console.log(val);
        switch (val) {
            case 'longAndCategory':
                setPreviewTitle('Body Mass Index');
                setPreviewSubtitle('Endocrinology');
                break;
            case 'shortAndCategory':
                setPreviewTitle('BMI');
                setPreviewSubtitle('Endocrinology');
                break;
            case 'longShortAndCategory':
                setPreviewTitle('Body Mass Index (BMI)');
                setPreviewSubtitle('Endocrinology');
                break;
            case 'shortLongAndCategory':
                setPreviewTitle('BMI - Body Mass Index');
                setPreviewSubtitle('Endocrinology');
                break;
            case 'shortAndLong':
                setPreviewTitle('BMI');
                setPreviewSubtitle('Body Mass Index');
                break;
            default:
                setPreviewTitle('Body Mass Index');
                setPreviewSubtitle('Endocrinology');
        }

        await AsyncStorage.setItem('format', val);
    };

    useEffect(() => {
        const getFormat = async () => {
            const result = await AsyncStorage.getItem('format');
            console.log('format from db: ' + result);
            if (result) {
                setFormatValue(result);
                changeFormatItem(result);
            }
        };
        getFormat();

        const getLanguage = async () => {
            const result = await AsyncStorage.getItem('language');
            console.log('language from db: ' + result);
            if (result) {
                setLanguage(String(result));
            }
        };
        getLanguage();
    }, []);

    return (
        <ScrollView>
            <View style={s.container}>
                <View style={s.formatTitle}>
                    <Text style={s.formatTitleText}>{t('settings:formatTitle')}</Text>
                </View>
                <View>
                    <Text style={s.formatExample}>{t('settings:formatExample')}</Text>
                    <View style={s.previewContainer}>
                        <List.Item
                            style={[{ paddingLeft: 5, paddingRight: 7 }]}
                            theme={theme}
                            title={previewTitle}
                            description={previewSubtitle}
                            descriptionStyle={{
                                color: theme.colors.onSecondaryContainer,
                                opacity: 0.5,
                            }}
                            right={() => (
                                <View style={s.starIcon}>
                                    <Icon
                                        name={'star'}
                                        size={24}
                                        color={theme.dark ? theme.colors.primary : theme.colors.primary}
                                    />
                                </View>
                            )}
                        />
                    </View>
                </View>
                <View style={s.formatContainer}>
                    <Dropdown
                        value={formatValue}
                        items={formatItems}
                        onChangeValue={(value) => {
                            changeFormatItem(String(value));
                        }}
                    />
                </View>
                <Divider />
                <View style={s.languageContainer}>
                    <Text style={s.languageTitle}>{t('settings:selectLanguage')}</Text>
                    <Dropdown
                        value={language}
                        items={items}
                        onChangeValue={(value) => {
                            changeLanguage(String(value));
                        }}
                    />
                </View>
                <Divider />
                <View style={s.favoritesContainer}>
                    <Text style={s.favoritesTitle}>{t('settings:favorites')}</Text>
                    <Button
                        mode="contained-tonal"
                        onPress={() => {
                            setIsDialogVisible(true);
                            console.log(isDialogVisible);
                        }}
                    >
                        {favoritesCleared ? t('settings:favoritesCleared') : t('settings:clearFavorites')}
                    </Button>
                    <ConfirmationDialog
                        title={t('settings:favoritesConfirm:title')}
                        message={''}
                        onConfirm={handleClearFavorites}
                        onCancel={() => setIsDialogVisible(false)}
                        onDismiss={() => setIsDialogVisible(false)}
                        isVisible={isDialogVisible}
                        confirmLabel={t('settings:favoritesConfirm:confirm')}
                        cancelLabel={t('settings:favoritesConfirm:cancel')}
                    />
                </View>
                <Divider />
                <View style={s.recentContainer}>
                    <Text style={s.recentTitle}>{t('settings:recent')}</Text>
                    <Button
                        mode="contained-tonal"
                        onPress={handleClearRecent}
                    >
                        {recentCleared ? t('settings:recentCleared') : t('settings:clearRecent')}
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;
