import { Questions } from "./domain";

export const questions: Questions = {
    en: [
        {
            name: "confusion",
            text: "Altered Mental Status",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "bun",
            text: "Blood Urea Nitrogen (BUN) >7 mmol/L (>19 mg/dL)",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "respiratoryRate",
            text: "Respiratory Rate ≥30/min",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "systolicBP",
            text: "Systolic BP <90 mmHg or Diastolic BP ≤60 mmHg",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "age65",
            text: "Age 65 or Older",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
    ],
    ru: [
        {
            name: "confusion",
            text: "Нарушение сознания",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "bun",
            text: "Уровень азота мочевины в крови > 7 ммоль/л",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "respiratoryRate",
            text: "Частота дыхания ≥ 30/мин",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "systolicBP",
            text: "Снижение систалического АД < 90 мм рт.ст.",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "age65",
            text: "Возраст 65 лет и старше",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
    ],
};
