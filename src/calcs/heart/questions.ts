import { Questions } from "./domain";

export const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "History?",
            comment: "",
            options: [
                { label: "Slightly suspicious", value: 0 },
                { label: "Moderately suspicious", value: 1 },
                { label: "Highly suspicious", value: 2 },
            ],
        },
        {
            name: "q2",
            text: "EKG",
            comment:
                "1 point: No ST deviation but LBBB, LVH, repolarization changes (e.g. digoxin); 2 points: ST deviation not due to LBBB, LVH, or digoxin",
            options: [
                { label: "Normal", value: 0 },
                { label: "Non-specific repolarization disturbance", value: 1 },
                { label: "Significant ST deviation", value: 2 },
            ],
        },
        {
            name: "q3",
            text: "Age",
            comment: "",
            options: [
                { label: "<45", value: 0 },
                { label: "45-64", value: 1 },
                { label: "≥65", value: 2 },
            ],
        },
        {
            name: "q4",
            text: "Risk factors",
            comment:
                "Risk factors: HTN, hypercholesterolemia, DM, obesity (BMI >30 kg/m²), smoking (current, or smoking cessation ≤3 mo), positive family history (parent or sibling with CVD before age 65); atherosclerotic disease: prior MI, PCI/CABG, CVA/TIA, or peripheral arterial disease",
            options: [
                { label: "No known risk factors", value: 0 },
                { label: "1-2 risk factors", value: 1 },
                {
                    label: "≥3 risk factors or history of atherosclerotic disease",
                    value: 2,
                },
            ],
        },
        {
            name: "q5",
            text: "Initial troponin",
            comment: "",
            options: [
                { label: "≤normal limit", value: 0 },
                { label: "1–3× normal limit", value: 1 },
                { label: ">3× normal limit", value: 2 },
            ],
        },
    ],
    ru: [
        {
            name: "q1",
            text: "Анамнез",
            comment:
                "Например, загрудинная боль, давящие боли, иррадиация в челюсти/левое плечо/руки, продолжительностью 5–15 мин, инициированная физическими нагрузками/холодом/эмоциями, сопровождающаяся потоотделением, тошнотой/рвотой, реакция на нитраты в течение нескольких минут, пациент ощущает симптомы. Признаки боли в груди низкого риска включают: хорошо локализованную, острую, без нагрузки, без потоотделения, без тошноты или рвоты и воспроизводимые при пальпации",
            options: [
                { label: "Небольшое подозрение", value: 0 },
                { label: "Умеренное подозрение", value: 1 },
                { label: "Высокое подозрение", value: 2 },
            ],
        },
        {
            name: "q2",
            text: "ЭКГ",
            comment:
                "1 балл: нет отклонения сегмента ST, но есть БЛНПГ, ГЛЖ, изменения реполяризации (например, дигоксин); 2 балла: отклонение ST не связано с БЛНПГ, ГЛЖ или дигоксином",
            options: [
                { label: "Норма", value: 0 },
                {
                    label: "Неспецифическое нарушение реполяризации",
                    value: 1,
                },
                { label: "Значительное отклонение сегмента ST", value: 2 },
            ],
        },
        {
            name: "q3",
            text: "Возраст",
            comment: "",
            options: [
                { label: "<45", value: 0 },
                { label: "45-64", value: 1 },
                { label: "≥65", value: 2 },
            ],
        },
        {
            name: "q4",
            text: "Факторы риска",
            comment:
                "гипертония, гиперхолестеринемия, СД, ожирение (ИМТ >30 кг/м²), курение (в настоящее время или отказ от курения ≤3 мес.), положительный семейный анамнез (родитель, или брат или сестра с ССЗ до 65 лет); атеросклеротическое заболевание: перенесенный ИМ, ЧКВ/АКШ, цереброваскулярное нарушение/ТИА или заболевание периферических артерий",
            options: [
                { label: "Нет установленных факторов риска", value: 0 },
                { label: "1-2 фактора риска", value: 1 },
                {
                    label: "≥3 факторов риска или наличие атеросклеротического заболевания в анамнезе",
                    value: 2,
                },
            ],
        },
        {
            name: "q5",
            text: "Исходный тропонин",
            comment: "",
            options: [
                { label: "≤нормальных значений", value: 0 },
                { label: "1–3× предела нормальных значений", value: 1 },
                { label: ">3× пределов нормальных значений", value: 2 },
            ],
        },
    ],
};
