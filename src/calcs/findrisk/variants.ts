import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        "0-4": {
            title: "Very low risk",
            description: "0.1% of 10-year risk of developing T2DM",
        },
        "5-9": {
            title: "Low risk",
            description: "0.4% of 10-year risk of developing T2DM",
        },
        "10-14": {
            title: "Moderate risk",
            description: "2.2% of 10-year risk of developing T2DM",
        },
        "15-20": {
            title: "High risk",
            description: "14.1% of 10-year risk of developing T2DM",
        },
        "21-999": {
            title: "Very high risk",
            description: "50% of 10-year risk of developing T2DM",
        },
    },
    ru: {
        "0-4": {
            title: "Очень низкий риск",
            description: "0,1% 10-летнего риска развития СД 2 типа",
        },
        "5-9": {
            title: "Низкий риск",
            description: "0,4% 10-летнего риска развития СД 2 типа",
        },
        "10-14": {
            title: "Умеренный риск",
            description: "2,2% 10-летнего риска развития СД 2 типа",
        },
        "15-20": {
            title: "Высокий риск",
            description: "14,1% 10-летнего риска развития СД 2 типа",
        },
        "21-999": {
            title: "Очень высокий риск",
            description: "50% 10-летнего риска развития СД 2 типа",
        },
    },
};
