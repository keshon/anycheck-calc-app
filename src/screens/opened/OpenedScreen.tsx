import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyleSheet, SafeAreaView, View, KeyboardAvoidingView, Text, TouchableOpacity, Share, Alert } from 'react-native';

import { Modalize } from 'react-native-modalize';
import { useTheme, Appbar, Button, Card, Portal, Title, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import i18n from '../../i18n/i18n';

import { getCatalogItemByID } from '../../calcs/calcs';
import { addUniqueIem, removeItemAll } from '../../utils';
import React from 'react';

function OpenedScreen({ route }: any) {
    const theme = useTheme();
    const { t } = useTranslation();
    const navigation = useNavigation();

    const selectedLang = i18n.resolvedLanguage;

    const { id } = route.params;
    const { shortname } = route.params;
    let Screen = route.params.screen;

    // Recent
    useEffect(() => {
        const updateRecent = async () => {
            await AsyncStorage.getItem('recentIds').then((result) => {
                const resultArr = JSON.parse(String(result));
                if (!resultArr.length) {
                    // Add to empty recent
                    resultArr.push(id);
                    AsyncStorage.setItem('recentIds', JSON.stringify(resultArr));
                } else {
                    // Add to existing recent
                    const ArrWithUniqueID = addUniqueIem(resultArr, id);
                    AsyncStorage.setItem('recentIds', JSON.stringify(ArrWithUniqueID));
                }
            });
        };
        updateRecent();
    }, []);

    // Favorite status state
    const [isFavorite, setIsFavorite] = useState<Boolean>(false);

    // Retrieve Favorites list from storage
    useEffect(() => {
        const isInFavoriteList = async () => {
            AsyncStorage.getItem('favoriteIds').then((result) => {
                const resultArr = JSON.parse(String(result));
                if (resultArr.length) {
                    const foundID = resultArr.filter((item: number) => {
                        return item == id;
                    });
                    foundID.length ? setIsFavorite(true) : setIsFavorite(false);
                }
            });
        };
        isInFavoriteList();
    }, []);

    // Add / Remove to Favorites
    const handleFavorite = async () => {
        const updateInFavoriteList = async () => {
            await AsyncStorage.getItem('favoriteIds').then((result) => {
                // console.log("get before favoriteIds");
                const resultArr = JSON.parse(String(result));
                // console.log(resultArr);

                let found = resultArr.find((item: number) => {
                    return item == id;
                });

                if (!found || found === undefined) {
                    // Add to favorites
                    resultArr.push(id);
                    AsyncStorage.setItem('favoriteIds', JSON.stringify(resultArr)).then(() => {
                        setIsFavorite(true);
                    });
                } else {
                    // Remove from favorites
                    const ArrtWithoutID = removeItemAll(resultArr, id);
                    AsyncStorage.setItem('favoriteIds', JSON.stringify(ArrtWithoutID)).then(() => {
                        setIsFavorite(false);
                    });
                }
            });
        };
        updateInFavoriteList();
    };

    // Bottom sheet
    const modalizeRef = useRef<Modalize>(null);
    modalizeRef.current?.open();
    const [modalizeHeight, setModalizeHeight] = useState<number>(40);

    const [snapPointIndex, setSnapPointIndex] = useState(2);
    const [expandedHeight, setExpandedHeight] = useState<number>(200);
    function handleExpandPress() {
        snapPointIndex === 1 ? setModalizeHeight(110) : setModalizeHeight(expandedHeight);
        const newSnapPointIndex = snapPointIndex === 1 ? 2 : 1;
        setSnapPointIndex(newSnapPointIndex);
    }

    interface Result {
        score: number | null;
        scoreUnit: string;
        title: string;
        description: string;
    }
    const [result, setResult] = useState<Result>({
        score: null,
        scoreUnit: '',
        title: '',
        description: '',
    });

    const handleResult = (result: Result) => {
        setResult(result);
    };

    const onLayout = (event: any) => {
        const { height } = event.nativeEvent.layout;
        setModalizeHeight(height); // Update the modalize height based on the layout height
    };

    useEffect(() => {
        if (result.score != null) {
            // Use the computed height from onLayout
            setModalizeHeight(modalizeHeight);
        } else {
            // Use a different height for the modal when result.score is null
            setModalizeHeight(40);
        }
    }, [result.score, modalizeHeight]);

    useEffect(() => {
        modalizeRef.current?.open();
    }, [useIsFocused()]);

    const handleShare = async () => {
        try {
            const res = await Share.share({
                message: JSON.stringify(result),
            });
            if (res.action === Share.sharedAction) {
                if (res.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (res.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    // Reset click
    const [reset, setReset] = useState(false);
    const handleResetClick = () => {
        setReset(true);
    };
    useEffect(() => {
        setReset(false);
    }, [handleResetClick]);

    // Modal window
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [title, setTitle] = useState(getCatalogItemByID(id)?.content[selectedLang].name);
    const [description, setDescription] = useState(getCatalogItemByID(id)?.content[selectedLang].description);

    // Style
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 200,
        },
        resultContainer: { paddingLeft: 20, paddingRight: 20 },
        resultTitle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: theme.colors.secondary,
            textAlign: result.score ? 'left' : 'center',
        },
        resultScore: {
            fontSize: 36,
            fontWeight: 'bold',
        },
        resultUnit: {
            fontSize: 36,
            fontWeight: 'bold',
            lineHeight: 36,
        },
        expandButton: {
            padding: 0,
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
            borderWidth: 3,
            borderRadius: 100,
            height: 36,
            width: 36,
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        resultDescription: {
            fontSize: 14,
            color: theme.colors.secondary,
            marginTop: 10,
        },

        infoCard: {
            margin: 16,
            elevation: 4,
            padding: 16,
        },
        infoText: {
            marginTop: 8,
        },
        infoButton: {
            marginTop: 32,
        },
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
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
                    <Appbar.Content title={shortname} />
                    <Appbar.Action
                        icon={isFavorite ? 'star' : 'star-outline'}
                        onPress={handleFavorite}
                    />
                    <Appbar.Action
                        icon="information-outline"
                        onPress={showModal}
                    />
                </Appbar.Header>
                <View
                    style={{
                        backgroundColor: theme.colors.background,
                        flex: 1,
                        marginBottom: 20,
                    }}
                >
                    <Screen
                        handleResult={handleResult}
                        handleResetClick={reset}
                        lang={i18n.resolvedLanguage}
                    />
                </View>
                <Portal>
                    <Modal
                        visible={visible}
                        onDismiss={hideModal}
                    >
                        <Card style={styles.infoCard}>
                            <Card.Content>
                                <Title style={[{ color: theme.colors.primary }]}>{title}</Title>
                                <Text style={styles.infoText}>{description}</Text>
                                <Button
                                    style={styles.infoButton}
                                    mode="contained"
                                    onPress={() => {
                                        hideModal();
                                    }}
                                >
                                    {t('opencalc:close')}
                                </Button>
                            </Card.Content>
                        </Card>
                    </Modal>
                </Portal>
            </View>

            <GestureHandlerRootView>
                <KeyboardAvoidingView behavior={'height'}>
                    {/* There is a bug with synthetic event: https://github.com/jeremybarbet/react-native-modalize/issues/451*/}
                    <Modalize
                        withHandle={false}
                        ref={modalizeRef}
                        keyboardAvoidingBehavior={'height'}
                        modalStyle={[
                            styles.resultContainer,
                            {
                                backgroundColor: theme.colors.elevation.level5,
                            },
                        ]}
                        alwaysOpen={modalizeHeight}
                    >
                        {result.score != null ? (
                            <View onLayout={onLayout}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    <View style={{}}>
                                        <Text style={[styles.resultTitle, { paddingTop: 20 }]}>{result?.title}</Text>
                                        <View
                                            style={[
                                                {
                                                    flexDirection: 'row',
                                                    alignContent: 'flex-start',
                                                    justifyContent: 'flex-start',
                                                },
                                            ]}
                                        >
                                            <Text style={styles.resultScore}>{result?.score}&nbsp;</Text>
                                            <Text
                                                style={{
                                                    marginTop: 'auto',
                                                    fontSize: 25,
                                                    fontWeight: '700',
                                                    opacity: 0.7,
                                                    lineHeight: 40,
                                                }}
                                            >
                                                {result?.scoreUnit}
                                            </Text>
                                        </View>
                                        <Text style={styles.resultDescription}>{result?.description}</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        marginBottom: 0,
                                        paddingTop: 5,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                    }}
                                >
                                    <Button
                                        mode="contained-tonal"
                                        onPress={handleResetClick}
                                        style={[
                                            {
                                                marginTop: 20,
                                                marginRight: 10,
                                                marginBottom: 20,
                                                width: '100%',
                                            },
                                        ]}
                                    >
                                        {t('opencalc:clear')}
                                    </Button>
                                </View>
                            </View>
                        ) : (
                            <>
                                <Text style={[styles.resultTitle, { paddingTop: 10 }]}>{t('opencalc:enterValues')}</Text>
                            </>
                        )}
                    </Modalize>
                </KeyboardAvoidingView>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}

export { OpenedScreen };
