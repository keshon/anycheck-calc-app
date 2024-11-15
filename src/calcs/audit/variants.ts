import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        "0-7": {
            title: "Low risk",
            description:
                "A score of 7 or lower for men (6 for women) indicates that you have a low risk of alcohol-related problems. The likelihood of harming your health at this level of consumption is minimal, and the WHO recommends not increasing it.",
        },
        "8-15": {
            title: "Hazardous and harmful alcohol use",
            description:
                "A score of 8 or higher for men (7 for women) indicates that you consume alcohol in a hazardous and/or harmful manner. At this level of alcohol consumption, there is an increased risk of health problems. It is recommended to reduce alcohol consumption.",
        },
        "16-19": {
            title: "High risk",
            description:
                "This level of alcohol consumption is harmful to both mental and physical health. It is necessary to reduce alcohol consumption.",
        },
        "20+": {
            title: "Possible dependence",
            description:
                "If you score a total of 20 points or more or if you have more than 0 points in responses to questions 4-6, you may have alcohol dependence or a risk of developing alcohol dependence. Such a level of alcohol consumption is harmful to both mental and physical health. It is necessary to reduce or abstain from alcohol consumption.",
        },
    },
    ru: {
        "0-7": {
            title: "Низкий уровень риска",
            description:
                "Число баллов 7 или меньше у мужчин (6 баллов у женщин) показывает, что у вас пониженный риск возникновения проблем, обусловленных алкоголем.\n\nВероятность нанесения вреда здоровью при таком уровне употребления невелика.\n\nИ ВОЗ рекомендует его не увеличивать.",
        },
        "8-15": {
            title: "Угрожающее здоровью потребление",
            description:
                "Число баллов 8 или больше у мужчин (7 баллов у женщин) показывает, что вы потребляете алкоголь опасным и/или вредным образом. При таком уровне употребления алкоголя повышен риск возникновения нарушений здоровья. Рекомендуется сократить его употребление.",
        },
        "16-19": {
            title: "Злоупотребление",
            description:
                "Такой уровень потребления алкоголя наносит вред психическому и физическому здоровью. Необходимо сократить употребление алкоголя.",
        },
        "20+": {
            title: "Возможная зависимость",
            description:
                "Если вы набрали в общей сложности 20 баллов и больше или если у вас больше 0 баллов в ответах на вопросы 4-6, у вас может быть алкогольная зависимость или риск развития алкогольной зависимости. Такой уровень потребления наносит вред психическому и физическому здоровью. Употребление алкоголя необходимо сократить или отказаться от него.",
        },
    },
};
