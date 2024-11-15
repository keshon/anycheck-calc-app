import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import en from "./en.json";
import ru from "./ru.json";

const resources: Record<string, Resource> = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
};

export const fallbackLanguage = "en";

const initializeI18n = async (): Promise<void> => {
    let selectedLanguage = fallbackLanguage;
    const systemLanguage = RNLocalize.getLocales()[0]?.languageCode;

    if (systemLanguage in resources) {
        selectedLanguage = systemLanguage;
    }

    i18n.use(initReactI18next).init({
        resources, // Use the resources defined above
        lng: selectedLanguage, // Use the selected language, or fallback to the default
        fallbackLng: fallbackLanguage, // Fallback to the default language if a translation key is not found in the selected language
        compatibilityJSON: "v3",
        keySeparator: ":",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });
};

initializeI18n();

const changeLanguage = async (language: string): Promise<void> => {
    let selectedLanguage = fallbackLanguage;

    if (language === "system") {
        const systemLanguage = RNLocalize.getLocales()[0]?.languageCode;
        if (systemLanguage in resources) {
            selectedLanguage = systemLanguage;
        }
    } else {
        selectedLanguage = language;
    }

    await AsyncStorage.setItem("language", selectedLanguage).then(() => {
        i18n.changeLanguage(selectedLanguage);
    });
};

export default i18n;
export { changeLanguage };
