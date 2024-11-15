import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

export const styles = (theme: MD3Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        formatTitle: {
            color: theme.colors.secondary,
            fontWeight: "600",
            padding: 20,
        },
        formatExample: {
            marginTop: 0,
            marginLeft: 40,
            backgroundColor: theme.colors.elevation.level5,
            alignSelf: "flex-start",
            padding: 5,
            color: theme.colors.secondary,
            fontSize: 12,
            fontWeight: "700",
            borderRadius: theme.roundness,
        },
        previewContainer: {
            marginHorizontal: 40,
            marginTop: 4,
            borderWidth: 2,
            borderColor: theme.colors.elevation.level5,
            borderRadius: theme.roundness,
            backgroundColor: theme.colors.elevation.level1,
        },
        formatContainer: {
            zIndex: 3,
            padding: 20,
            paddingBottom: 25,
        },
        languageContainer: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            zIndex: 2,
            padding: 20,
        },
        favoritesContainer: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            zIndex: 1,
            padding: 20,
        },
        recentContainer: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            zIndex: 1,
            padding: 20,
        },
        formatTitleText: {
            color: theme.colors.secondary,
            fontWeight: "600",
        },
        starIcon: {
            marginLeft: "auto",
            marginTop: "auto",
        },
        languageTitle: {
            paddingBottom: 12,
            color: theme.colors.secondary,
            fontWeight: "600",
        },
        favoritesTitle: {
            paddingBottom: 12,
            color: theme.colors.secondary,
            fontWeight: "600",
        },
        recentTitle: {
            paddingBottom: 12,
            color: theme.colors.secondary,
            fontWeight: "600",
        },
    });
