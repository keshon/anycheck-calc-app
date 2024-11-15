import React, { useState } from 'react';

import { View, StyleSheet, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native';

import { Text, Title, Paragraph, Card, Divider, Button, Portal, Modal, TextInput, Snackbar, useTheme, ActivityIndicator, Dialog } from 'react-native-paper';

import { useTranslation } from 'react-i18next';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import DeviceInfo from 'react-native-device-info';

const BOT_TOKEN = 'xxxxxxx:xxxxxxxxxxxxxxxxx';
const CHAT_ID = 'xxxxxxxxx';

/**
 * Sends a formatted message to a Telegram chat using the Telegram Bot API.
 * @param message - The message to send to the chat
 * @returns A boolean indicating whether the message was successfully sent
 */
async function sendTelegramMessage(message: string): Promise<boolean> {
    try {
        // Get device information using DeviceInfo library
        const deviceModel = DeviceInfo.getModel();
        const deviceBrand = DeviceInfo.getBrand();
        const deviceId = await DeviceInfo.getUniqueId();
        const ipAddress = await DeviceInfo.getIpAddress();
        const fontScale = await DeviceInfo.getFontScale();
        const systemVersion = DeviceInfo.getSystemVersion();
        const isEmulator = await DeviceInfo.isEmulator();
        const isTablet = DeviceInfo.isTablet();

        // Remove special characters from the message to prevent HTML injection
        message = message.replace(/[|&;$%@"<>()+,]/g, '');

        // Format the message to include device and OS information
        const formattedMessage = `
        <b>New Feedback Received:</b>
        <i>Device Information</i>
        <code>ID:          ${deviceId}</code>
        <code>Model:       ${deviceModel}</code>
        <code>Brand:       ${deviceBrand}</code>
        <code>Is Emulator: ${isEmulator}</code>
        <code>Is Tablet:   ${isTablet}</code>
  
        <i>OS Information</i>
        <code>Version:     ${systemVersion}</code>
        <code>Font Scale:  ${fontScale}</code>
        <code>IP Address:  ${ipAddress}</code>
  
        <i>User Message</i>
        ${message}
      `;

        // Send the message using the Telegram Bot API
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: formattedMessage,
                parse_mode: 'HTML',
            }),
        });

        // Log the response and return true if the message was sent successfully
        const data = await response.json();
        console.log('Telegram message sent:', data);
        return true;
    } catch (error: any) {
        // Log the error and return false if an error occurs
        console.error('Error sending Telegram message:', error.message);
        return false;
    }
}

/**
 *Renders a screen that allows users to send feedback to the developers.
 *@returns JSX.Element
 */
function AboutScreen(): JSX.Element {
    // Localization
    const { t } = useTranslation();

    // Theme
    const theme = useTheme();

    // Modal window
    const [visible, setVisible] = useState(false);

    // Open modal window
    const showModal = () => setVisible(true);

    // Close modal window
    const hideModal = () => setVisible(false);

    // Input message
    const MAX_CHARACTERS = 1000;
    const [message, setMessage] = useState('');

    // Handle input change
    const handleInputChange = (text: string) => {
        if (text.length > 3) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
        setMessage(text);
    };

    // Submit button
    const [isLoading, setIsLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // Handle submit button press
    const handleSubmit = async () => {
        if (!message) {
            return;
        }

        setIsLoading(true);
        setButtonDisabled(true);

        // Send the message to the server
        let success = await sendTelegramMessage(message);

        if (success) {
            setSnackbarMessage(String(t('about:feedback:success')));
            hideModal();
            setMessage('');
        } else {
            setSnackbarMessage(String(t('about:feedback:fail')));
        }

        setIsLoading(false);
        setIsSnackbarVisible(true);
        setButtonDisabled(false);
    };

    // Snack message
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

    // Handle snack message dismissal
    const handleSnackbarDismiss = () => {
        setIsSnackbarVisible(false);
        setSnackbarMessage('');
    };

    const [learMoreDialogVisible, setLearMoreDialogVisible] = useState(false);

    // Calculate image size based on window width and aspect ratio
    const { width } = useWindowDimensions();
    const imageAspectRatio = 1.59; // assuming a 4:3 aspect ratio for the image
    const imageWidth = width - 30;
    const imageHeight = imageWidth / imageAspectRatio;

    const buildDate = '04-07-2023 18-05';

    // Load logo image based on theme
    const logo = theme.dark ? require('../../../assets/logo_bg_dark.jpg') : require('../../../assets/logo_bg_light.jpg');

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Card
                    theme={theme}
                    style={styles.card}
                >
                    <Image
                        source={logo}
                        resizeMode={'cover'}
                        style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            height: imageHeight,
                            width: '100%',
                        }}
                    />
                    <Card.Content>
                        <Title
                            style={[
                                {
                                    color: theme.colors.primary,
                                    textAlign: 'center',
                                    marginTop: 15,
                                },
                            ]}
                        >
                            {t('appLongname')}
                        </Title>
                        <Divider style={styles.divider} />

                        <Paragraph style={styles.paragraph}>{t('about:paragraph_1')}</Paragraph>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={styles.iconContainer}>
                                <MaterialIcon
                                    name="info-outline"
                                    size={64}
                                    color={theme.colors.primary}
                                />
                            </View>
                            <Paragraph
                                style={{
                                    marginLeft: 10,
                                    marginTop: 'auto',
                                    marginBottom: 'auto',
                                    textTransform: 'uppercase',
                                    fontWeight: '600',
                                    color: theme.colors.secondary,
                                    flex: 1,
                                }}
                            >
                                {t('about:paragraph_2')}
                            </Paragraph>
                        </View>
                    </Card.Content>
                </Card>

                <Card
                    theme={theme}
                    style={[styles.card, { marginBottom: 30 }]}
                >
                    <Card.Content>
                        <Paragraph style={styles.paragraph}>{t('about:paragraph_3')}</Paragraph>
                        <Button
                            mode="contained"
                            onPress={showModal}
                            style={styles.button}
                        >
                            {t('about:feedbackButton')}
                        </Button>

                        <Portal>
                            <Modal
                                visible={visible}
                                onDismiss={hideModal}
                            >
                                <Card style={styles.feedbackCard}>
                                    <Card.Content>
                                        <Title style={[{ color: theme.colors.primary }]}>{t('about:feedback:title')}</Title>
                                        <Divider style={styles.divider} />
                                        <Paragraph style={styles.paragraph}>{t('about:feedback:content')}</Paragraph>
                                        <Text>{`${message.length}/${MAX_CHARACTERS}`}</Text>
                                        <TextInput
                                            mode="outlined"
                                            multiline
                                            maxLength={MAX_CHARACTERS}
                                            numberOfLines={7}
                                            style={styles.feedbackInput}
                                            value={message}
                                            onChangeText={handleInputChange}
                                        />
                                        <TouchableOpacity
                                            onPress={() => setLearMoreDialogVisible(true)}
                                            style={{ marginBottom: 20 }}
                                        >
                                            <Text>
                                                {t('about:feedback:agreement')}{' '}
                                                <Text
                                                    style={{
                                                        textDecorationLine: 'underline',
                                                    }}
                                                >
                                                    {t('about:feedback:learnMore')}
                                                </Text>{' '}
                                            </Text>
                                        </TouchableOpacity>
                                        <Button
                                            icon={() => (isLoading ? <ActivityIndicator /> : null)}
                                            mode="contained"
                                            onPress={handleSubmit}
                                            disabled={buttonDisabled}
                                        >
                                            {isLoading ? t('about:feedback:wait') : t('about:feedback:submitButton')}
                                        </Button>
                                    </Card.Content>
                                </Card>
                            </Modal>
                            <Snackbar
                                visible={isSnackbarVisible}
                                onDismiss={handleSnackbarDismiss}
                                duration={5000}
                                role="alert"
                                action={{
                                    label: t('about:feedback:dismiss'),
                                    onPress: handleSnackbarDismiss,
                                }}
                            >
                                {snackbarMessage}
                            </Snackbar>
                            <Dialog
                                visible={learMoreDialogVisible}
                                onDismiss={() => setLearMoreDialogVisible(false)}
                            >
                                <Dialog.Title>{t('about:techinfo:title')}</Dialog.Title>
                                <Dialog.Content>
                                    <Text>{t('about:techinfo:content')}</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={() => setLearMoreDialogVisible(false)}>{t('about:techinfo:close')}</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </Card.Content>
                </Card>
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: 20,
                        display: 'none',
                    }}
                >
                    <Text style={{ color: theme.colors.secondary }}>Build date: {buildDate}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
    },
    feedbackCard: {
        margin: 10,
        padding: 5,
    },
    divider: {
        marginVertical: 10,
    },
    paragraph: {
        marginBottom: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    feedbackInput: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
    },

    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    searchBar: {
        marginBottom: 4,
    },
    rightContainer: {
        flexDirection: 'row',
    },
    iconButton: {
        marginHorizontal: 0,
    },
});

export default AboutScreen;
