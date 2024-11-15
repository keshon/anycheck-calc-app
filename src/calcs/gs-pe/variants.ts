import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        "Low Probability": {
            title: "Low Probability",
            description: "The patient is considered low risk (Score 0-3), <10% incidence of PE.",
        },
        "Intermediate probability": {
            title: "Intermediate probability",
            description: "The patient is considered intermediate risk (Score 4-10).\n\nIf d-dimer testing is negative, consider stopping workup.\nIf d-dimer testing is positive, consider CT and US.\nIf CT is inconclusive, consider V/Q scan or angiography.",
        },
        "High probability": {
            title: "High probability",
            description: "If the patient is considered high risk (score 11+, >60% incidence of PE), consider CT and US.\n\nIf imaging is negative consider angiography.",
        },
    },
    ru: {
        "Low Probability": {
            title: "Низкая вероятность",
            description:
                "Проведите анализ крови на Д-димер:\n\n-если D-димер отрицательный, рассмотрите возможность прекращения исследования,\n-если D-димер положительный, показано проведение КТ-ангиопульмонографии",
        },
        "Intermediate probability": {
            title: "Промежуточная вероятность",
            description:
                "Проведите анализ крови на Д-димер:\n-если D-димер отрицательный, рассмотрите возможность прекращения исследования,\n-если D-димер положительный, показано проведение КТ-ангиопульмонографии",
        },
        "High probability": {
            title: "Высокая вероятность",
            description: "Показано проведение КТ-ангиопульмонографии",
        },
    },
};
