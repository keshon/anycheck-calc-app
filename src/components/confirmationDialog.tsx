import React, { useEffect, useState } from "react";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import { useTranslation } from "react-i18next";

type Props = {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    onDismiss: () => void;
    isVisible: boolean;
    confirmLabel: string;
    cancelLabel: string;
};

const ConfirmationDialog = ({
    title,
    message = "",
    onConfirm,
    onCancel,
    onDismiss,
    isVisible,
    confirmLabel,
    cancelLabel,
}: Props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title>{title}</Dialog.Title>
                {message && (
                    <Dialog.Content>
                        <Paragraph>{message}</Paragraph>
                    </Dialog.Content>
                )}
                <Dialog.Actions>
                    <Button
                        mode={"outlined"}
                        style={{ borderWidth: 2 }}
                        contentStyle={{ paddingHorizontal: 15 }}
                        onPress={onConfirm}
                    >
                        {confirmLabel}
                    </Button>
                    <Button
                        mode={"outlined"}
                        style={{ borderWidth: 2 }}
                        contentStyle={{ paddingHorizontal: 15 }}
                        onPress={onCancel}
                    >
                        {cancelLabel}
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default ConfirmationDialog;
