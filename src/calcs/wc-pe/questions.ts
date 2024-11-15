import { Questions } from "./domain";

export const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "Clinical signs and symptoms of DVT",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 3 },
            ],
        },
        {
            name: "q2",
            text: "PE is #1 diagnosis OR equally likely",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Heart rate >100 bmp",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1.5 },
            ],
        },
        {
            name: "q4",
            text: "Immobilization at least 3 days OR surgery in the previous 4 weeks",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1.5 },
            ],
        },
        {
            name: "q5",
            text: "Previous, objectively diagnosed PE or DVT",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1.5 },
            ],
        },
        {
            name: "q6",
            text: "Hemoptysis",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "q7",
            text: "Malignancy w/ treatment within 6 months or palliative",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
    ],
    ru: [
        {
            name: "q1",
            text: "Клинические признаки ТГВ",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 3 },
            ],
        },
        {
            name: "q2",
            text: "Альтернативный диагноз менее вероятен чем ТЭЛА",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Частота сердечных сокращений ≥100 уд/мин",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1.5 },
            ],
        },
        {
            name: "q4",
            text: "Хирургическое вмешательство или иммобилизация в течение последних 4 недель",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1.5 },
            ],
        },
        {
            name: "q5",
            text: "Предыдущие случаи ТЭЛА или ТГВ",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1.5 },
            ],
        },
        {
            name: "q6",
            text: "Кровохарканье",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "q7",
            text: "Активно развивающаяся или пролеченная в последние 6 месяцев злокачественная опухоль или паллиативное ведение",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
    ],
};
