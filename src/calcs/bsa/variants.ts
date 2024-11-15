import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        underweight: {
            title: "Underweight",
            description:
                "Your BSA is below normal, which indicates you may be underweight.",
        },
        normal: {
            title: "Normal",
            description:
                "Your BSA is within the normal range, which indicates a healthy body surface area.",
        },
        overweight: {
            title: "Overweight",
            description:
                "Your BSA is above normal, which indicates you may be overweight.",
        },
        obese: {
            title: "Obese",
            description:
                "Your BSA is significantly above normal, which indicates you may be obese.",
        },
    },
    ru: {
        underweight: {
            title: "Недовес",
            description:
                "Ваша площадь поверхности тела (ППТ) ниже нормы, что может указывать на недостаточный вес.",
        },
        normal: {
            title: "Норма",
            description:
                "Ваша ППТ находится в норме, что указывает на здоровую площадь поверхности тела.",
        },
        overweight: {
            title: "Избыточный вес",
            description:
                "Ваша ППТ выше нормы, что может указывать на избыточный вес.",
        },
        obese: {
            title: "Ожирение",
            description:
                "Ваша ППТ значительно превышает норму, что может указывать на ожирение.",
        },
    },
};
