import { Variants } from "./domain";
export const variants: Variants = {
    en: {
        low: {
            title: "Low Score (0-3 points)",
            description: "Risk of MACE of 0.9-1.7%.",
        },
        moderate: {
            title: "Moderate Score (4-6 points)",
            description:
                "Risk of MACE of 12-16.6%.\n\nIf troponin is positive, many experts recommend further workup and admission even with a low HEART Score.",
        },
        high: {
            title: "High Score (7-10 points)",
            description: "Risk of MACE of 50-65%.",
        },
    },
    ru: {
        low: {
            title: "Риск 0,9–1,7%",
            description:
                "Риск неблагоприятного кардиального события 0,9–1,7%\n\nВ исследовании оценки HEART эти пациенты были выписаны (0,99% в ретроспективном исследовании, 1,7% в проспективном исследовании)",
        },
        moderate: {
            title: "Риск 12–16,6%",
            description:
                "Риск неблагоприятного кардиального события 12–16,6%\n\nВ исследовании оценки HEART эти пациенты были госпитализированы (11,6% ретроспективно, 16,6% проспективно)",
        },
        high: {
            title: "Риск 50-65%",
            description:
                "Риск неблагоприятного кардиального события  50-65%\n\nВ исследовании оценки HEART эти пациенты были кандидатами на ранние инвазивные меры (65,2% ретроспективно, 50,1% проспективно)",
        },
    },
};
