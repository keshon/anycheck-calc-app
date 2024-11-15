import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        low: {
            title: "Low risk group",
            description: "2.7% 30-day mortality",
        },
        moderate: {
            title: "Moderate risk group",
            description: "6.8% 30-day mortality",
        },
        severe: {
            title: "Severe risk group",
            description: "14.0% 30-day mortality",
        },
        highest: {
            title: "Highest risk group",
            description: "27.8% 30-day mortality",
        },
    },
    ru: {
        low: {
            title: "Низкий риск",
            description: "Низкий риск смертности",
        },
        moderate: {
            title: "Умеренный риск",
            description: "Умеренный риск смертности",
        },
        severe: {
            title: "Высокий риск",
            description: "Высокий риск смертности",
        },
        highest: {
            title: "Очень высокий риск",
            description: "Очень высокий риск смертности",
        },
    },
};
