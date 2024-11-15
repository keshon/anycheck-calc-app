import { Questions } from "./domain";

export const questions: Questions = {
    en: [
        {
            name: "gender",
            text: "Gender",
            options: [
                { label: "Female", value: 1 },
                { label: "Male", value: 2 },
            ],
        },
        {
            name: "age",
            text: "Age, years",
            options: [
                { label: "≤44", value: 0 },
                { label: "45-54", value: 2 },
                { label: "55-64", value: 3 },
                { label: ">64", value: 4 },
            ],
        },
        {
            name: "bmi",
            text: "BMI, kg/m²",
            options: [
                { label: "<25", value: 0 },
                { label: "25-30", value: 1 },
                { label: ">30", value: 3 },
            ],
        },
        {
            name: "waist_male",
            text: "Waist circumference",
            options: [
                { label: "<94 cm (37 in)", value: 0 },
                { label: "94 to <102 cm (37 to <40 in)", value: 3 },
                { label: "≥102 cm (≥40 in)", value: 4 },
            ],
        },
        {
            name: "waist_female",
            text: "Waist circumference",
            options: [
                { label: "< 80 cm (31 in)", value: 0 },
                { label: "80 to <88 cm (31 to <35 in)", value: 3 },
                { label: "≥88 cm (≥35 in)", value: 4 },
            ],
        },
        {
            name: "physicalActivity",
            text: "Physical activity",
            options: [
                { label: "≥4 hr/week", value: 0 },
                { label: "<4 hr/week", value: 2 },
            ],
        },
        {
            name: "dailyFruitsVegetables",
            text: "Daily consumption of vegetables, fruits, or berries",
            options: [
                { label: "No", value: 1 },
                { label: "Yes", value: 0 },
            ],
        },
        {
            name: "bloodPressureMedication",
            text: "Use of blood pressure medication",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 2 },
            ],
        },
        {
            name: "highBloodGlucose",
            text: "History of high blood glucose levels",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 5 },
            ],
        },
        {
            name: "familyDiabetes",
            text: "Family history of diabetes",
            options: [
                { label: "No", value: 0 },
                { label: "Yes, 2nd degree relative", value: 3 },
                { label: "Yes, 1st degree relative", value: 5 },
            ],
        },
    ],
    ru: [
        {
            name: "gender",
            text: "Пол",
            options: [
                { label: "Женский", value: 1 },
                { label: "Мужской", value: 2 },
            ],
        },
        {
            name: "age",
            text: "Возраст, лет",
            options: [
                { label: "≤44", value: 0 },
                { label: "45-54", value: 2 },
                { label: "55-64", value: 3 },
                { label: ">64", value: 4 },
            ],
        },
        {
            name: "bmi",
            text: "Индекс массы тела кг/м²",
            options: [
                { label: "<25 кг/м²", value: 0 },
                { label: "25-29.9 кг/м²", value: 1 },
                { label: "≥30 кг/м²", value: 3 },
            ],
        },
        {
            name: "waist_male",
            text: "Окружность талии",
            options: [
                { label: "<94 см", value: 0 },
                { label: "94-102 см", value: 3 },
                { label: ">102 см", value: 4 },
            ],
        },
        {
            name: "waist_female",
            text: "Окружность талии",
            options: [
                { label: "<80 см", value: 0 },
                { label: "80-88 см", value: 3 },
                { label: ">88 см", value: 4 },
            ],
        },
        {
            name: "physicalActivity",
            text: "Физическая активность",
            options: [
                { label: "от 4 часов в неделю", value: 0 },
                { label: "до 4 часов в неделю", value: 2 },
            ],
        },
        {
            name: "dailyFruitsVegetables",
            text: "Ежедневное употребление фруктов, ягод или овощей",
            options: [
                { label: "Нет", value: 1 },
                { label: "Да", value: 0 },
            ],
        },
        {
            name: "bloodPressureMedication",
            text: "Прием препаратов для снижения АД",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 2 },
            ],
        },
        {
            name: "highBloodGlucose",
            text: "Скрининговое повышение глюкозы",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 5 },
            ],
        },
        {
            name: "familyDiabetes",
            text: "Сахарные диабет у родственников",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да, 2 степень диабета", value: 3 },
                { label: "Да, 1 степень диабета", value: 5 },
            ],
        },
    ],
};
