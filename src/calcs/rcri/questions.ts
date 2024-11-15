import { Questions } from "./domain";

export const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "Elevated-risk surgery",
            comment: "Intraperitoneal; intrathoracic; suprainguinal vascular",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "q2",
            text: "History of ischemic heart disease",
            comment:
                "History of myocardial infarction (MI); history of positive exercise test; current chest pain considered due to myocardial ischemia; use of nitrate therapy or ECG with pathological Q waves",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "q3",
            text: "History of congestive heart failure",
            comment:
                "Pulmonary edema, bilateral rales or S3 gallop; paroxysmal nocturnal dyspnea; chest x-ray (CXR) showing pulmonary vascular redistribution",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "q4",
            text: "History of cerebrovascular disease",
            comment: "Prior transient ischemic attack (TIA) or stroke",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "q5",
            text: "Pre-operative treatment with insulin",
            comment: "",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
        {
            name: "q6",
            text: "Pre-operative creatinine >2 mg/dL / 176.8 µmol/L",
            comment: "",
            options: [
                { label: "No", value: 0 },
                { label: "Yes", value: 1 },
            ],
        },
    ],
    ru: [
        {
            name: "q1",
            text: "Хирургия повышенного риска",
            comment: "Внутрибрюшная, внутригрудная, супраингвинальная операция",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "q2",
            text: "Анамнез ишемической болезни сердца",
            comment:
                "Положительный нагрузочный тест в анамнезе; наличие боли в груди в настоящее время, которая расценивается как следствие ишемии миокарда; применение нитратов или ЭКГ с патологическими зубцами Q",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "q3",
            text: "Застойная сердечная недостаточность в анамнезе",
            comment:
                "Отек легких, двусторонние хрипы или ритм галопа S3; пароксизмальная ночная одышка; рентгенограмма грудной клетки (РГК), демонстрирующая перераспределение легочного рисунка",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "q4",
            text: "Анамнез цереброваскулярных заболеваний",
            comment:
                "Перенесенная транзиторная ишемическая атака (ТИА) или инсульт в анамнезе",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "q5",
            text: "Предоперационное лечение инсулином",
            comment: "",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
        {
            name: "q6",
            text: "Предоперационный уровень креатинина > 2 мг/дл (> 176,8 мкмоль/л)",
            comment: "",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да", value: 1 },
            ],
        },
    ],
};
