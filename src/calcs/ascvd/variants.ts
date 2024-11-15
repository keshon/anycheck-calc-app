import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        lowRisk: {
            title: "Low Risk",
            description: "Low risk of developing ASCVD in the next 10 years.",
        },
        borderlineRisk: {
            title: "Borderline Risk",
            description:
                "Borderline risk of developing ASCVD in the next 10 years.",
        },
        intermediateRisk: {
            title: "Intermediate Risk",
            description:
                "Intermediate risk of developing ASCVD in the next 10 years.",
        },
        highRisk: {
            title: "High Risk",
            description: "High risk of developing ASCVD in the next 10 years.",
        },
    },
    ru: {
        lowRisk: {
            title: "Низкий риск",
            description:
                "Низкий риск развития атеросклеротического сердечно-сосудистого заболевания в следующие 10 лет.",
        },
        borderlineRisk: {
            title: "Граничный риск",
            description:
                "Граничный риск развития атеросклеротического сердечно-сосудистого заболевания в следующие 10 лет.",
        },
        intermediateRisk: {
            title: "Промежуточный риск",
            description:
                "Промежуточный риск возникновения сердечно-сосудистых событий, таких как коронарная смерть, инсульт, инфаркт миокарда в следующие 10 лет.",
        },
        highRisk: {
            title: "Высокий риск",
            description:
                "Высокий риск развития атеросклеротического сердечно-сосудистого заболевания в следующие 10 лет.",
        },
    },
};
