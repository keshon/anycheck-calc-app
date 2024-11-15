import { Questions } from "./domain";

export const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "Age above 65",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "q2",
            text: "Previous DVT or PE",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Surgery (under general anesthesia) or lower limb fracture in past month",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 2 },
            ],
        },
        {
            name: "q4",
            text: "Active malignant condition",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 2 },
            ],
        },
        {
            name: "q5",
            text: "Unilateral lower limb pain",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 3 },
            ],
        },
        {
            name: "q6",
            text: "Hemoptysis",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 2 },
            ],
        },
        {
            name: "q7",
            text: "Heart rate",
            options: [
                { label: "<75", value: 0 },
                { label: "75-94", value: 3 },
                { label: "≥94", value: 5 },
            ],
        },
        {
            name: "q8",
            text: "Pain on lower limb palpation and unilateral edema",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 4 },
            ],
        },
    ],
    ru: [
        {
            name: "q1",
            text: "Возраст >65 лет",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "q2",
            text: "Предыдущие случаи ТЭЛА или ТГВ",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Хирургическое вмешательство или переломы течение последнего месяца",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 2 },
            ],
        },
        {
            name: "q4",
            text: "Злокачественное новообразование (солидная опухоль или гематологическое злокачественное заболевание, активное или вылеченное в настоящее время <1 года)",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 2 },
            ],
        },
        {
            name: "q5",
            text: "Боль в одной нижней конечности",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 3 },
            ],
        },
        {
            name: "q6",
            text: "Кровохарканье",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 2 },
            ],
        },
        {
            name: "q7",
            text: "Частота сердечных сокращений (уд/мин)",
            options: [
                { label: "<75", value: 0 },
                { label: "75-94", value: 3 },
                { label: "≥94", value: 5 },
            ],
        },
        {
            name: "q8",
            text: "Боль при пальпации глубоких вен нижней конечности и отеки одной нижней конечности",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 4 },
            ],
        },
    ],
};
