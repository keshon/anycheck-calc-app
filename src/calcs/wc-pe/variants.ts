import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        low: {
            title: "Low risk",
            description:
                "Pulmonary embolism rule-out criteria (PERC) can be considered as well as D-dimer",
        },
        medium: {
            title: "Moderate risk",
            description: "Consider D-dimer or CT pulmonary angiography",
        },
        high: {
            title: "High risk",
            description: "D-dimer not recommended",
        },
    },
    ru: {
        low: {
            title: "Низкая вероятность",
            description:
                "Проведите анализ крови на Д-димер: -если D-димер отрицательный, рассмотрите возможность прекращения исследования, -если D-димер положительный, показано проведение КТ-ангиопульмонографии",
        },
        medium: {
            title: "Средняя вероятность",
            description:
                "Проведите анализ крови на Д-димер: -если D-димер отрицательный, рассмотрите возможность прекращения исследования, -если D-димер положительный, показано проведение КТ-ангиопульмонографии",
        },
        high: {
            title: "Высокая вероятность",
            description: "Показано проведение КТ-ангиопульмонографии",
        },
    },
};
