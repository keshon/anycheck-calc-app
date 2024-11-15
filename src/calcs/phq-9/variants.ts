import { Variants } from "./domain";

export const variants: Variants = {
    en: {
        "0-4": {
            title: "None or minimal depression",
            description: "",
        },
        "5-9": {
            title: "Mild depression",
            description: "Repeat PHQ-9 at follow-up",
        },
        "10-14": {
            title: "Moderate depression",
            description:
                "Make treatment plan, consider counseling, follow-up, and/or prescription drugs",
        },
        "15-19": {
            title: "Moderately severe depression",
            description: "Prescribe prescription drugs and counseling",
        },
        "20-27": {
            title: "Severe depression",
            description:
                "Prescribe prescription drugs. If there are poor responses to treatment, immediately refer the patient to a mental health specialist for counseling.",
        },
    },
    ru: {
        "0-4": {
            title: "Отсутствует-минимальный",
            description: "",
        },
        "5-9": {
            title: "Умеренная депрессия",
            description: "Повтор PHQ-9 при последующем наблюдении",
        },
        "10-14": {
            title: "Умеренная депрессия",
            description:
                "Составьте план лечения, подумайте о консультировании, последующем наблюдении и/или назначении лекарств",
        },
        "15-19": {
            title: "Умеренно тяжелая депрессия",
            description: "Назначать лекарства по рецепту и консультирование",
        },
        "20-27": {
            title: "Тяжелая депрессия",
            description:
                "Назначайте лекарства, отпускаемые по рецепту. При плохой реакции на лечение немедленно направьте пациента к специалисту по психическому здоровью для консультации.",
        },
    },
};
