import Ascvd from "./ascvd/ui";
import Audit from "./audit/ui";
import Bmi from "./bmi/ui";
import Bsa from "./bsa/ui";
import Cow from "./cow/ui";
import Gad7 from "./gad7/ui";
import Gds from "./gds/ui";
import GsPe from "./gs-pe/ui";
import Hba1c from "./hba1c/ui";
import WcPe from "./wc-pe/ui";
import Phq9 from "./phq-9/ui";
import Findrisk from "./findrisk/ui";
import { HEARTScore } from "./heart/ui";
import { CreatinineClearance } from "./cc/ui";
import { CURB65 } from "./curb-65/ui";
import { CardiacRisk } from "./rcri/ui";

import i18n from "../i18n/i18n";
import { GlomerularFiltrationRate } from "./gfr/ui";

export type LocalizedContent = {
    name: string;
    shortname: string;
    category: string;
    introtext: string;
    description: string;
};

export type Content = {
    [key: string]: LocalizedContent;
};

export type CatalogItem = {
    id: number; // unique ID
    status: "" | "readonly" | "hidden";
    screen: React.FC; // React Screen
    favorite: boolean; // Is marked as favorite (default is false)
    content: Content;
};

export function getCatalogItems(
    categoryName: string | null = null
): CatalogItem[] {
    const language = i18n.resolvedLanguage;
    let newCatalog = catalog.filter((item) => item.status.trim() !== "hidden");

    if (categoryName !== null && categoryName !== "All") {
        newCatalog = newCatalog.filter(
            (item) => item.content[language].category === categoryName
        );
    }

    newCatalog.sort((a, b) => {
        if (
            a.content[language as keyof Content].shortname <
            b.content[language as keyof Content].shortname
        ) {
            return -1;
        }
        if (
            a.content[language as keyof Content].shortname >
            b.content[language as keyof Content].shortname
        ) {
            return 1;
        }
        return 0;
    });
    // console.log(newCatalog);
    return newCatalog;
}

export function getCatalogItemByID(id: number): CatalogItem | null {
    let item = getCatalogItems().filter((item) => {
        return item.id == id;
    });

    if (!item.length) {
        return null;
    }
    return item[0];
}

export interface Category {
    label: string;
    value: string | null;
}

export function getCatalogCategories(): Category[] {
    const categories: string[] = [];

    const language = i18n.resolvedLanguage;

    // iterate through each item in the array
    const catalog = getCatalogItems();

    catalog.forEach((item) => {
        // get the category label for the selected language
        const label = item.content[language].category;

        // add the label to the categories array if it doesn't already exist
        if (!categories.includes(label)) {
            categories.push(label);
        }
    });

    // create an array of objects with label and value properties
    const itemsCategory: Category[] = categories.map((label: string) => ({
        label,
        value: label,
    }));

    // add the "All" category as the first element
    itemsCategory.unshift({ label: "All", value: "All" });

    return itemsCategory;
}

const catalog: CatalogItem[] = [
    {
        id: 1,
        status: "",
        screen: WcPe,
        favorite: false,
        content: {
            en: {
                name: "Wells' Criteria for Pulmonary Embolism",
                shortname: "Wells for PE",
                category: "Cardiology",
                introtext: "Objectifies risk of pulmonary embolism",
                description:
                    "Wells Criteria is a clinical prediction rule that uses a scoring system to predict the likelihood of pulmonary embolism (PE).",
            },
            ru: {
                name: "Шкала Уэллса для оценки вероятности ТЭЛА",
                shortname: "Шкала Уэллса",
                category: "Кардиология",
                introtext: "Определение вероятности развития у пациента ТЭЛА",
                description:
                    "Критерии Уэллса - это клиническое правило прогнозирования, которое использует систему баллов для предсказания вероятности развития глубокой венозной тромбоза (ВТЭО) и легочной эмболии (ЛЭТ). Критерии учитывают несколько факторов, таких как клинические признаки и симптомы, факторы риска и результаты лабораторных тестов для определения вероятности ВТЭО или ЛЭТ. Чем выше балл, тем выше вероятность наличия ВТЭО или ЛЭТ.",
            },
        },
    },
    {
        id: 2,
        status: "",
        screen: Hba1c,
        favorite: false,
        content: {
            en: {
                name: "HbA1c Calculator",
                shortname: "HbA1c",
                category: "Endocrinology",
                introtext:
                    "Estimates the average blood glucose level over the past 2-3 months.",
                description:
                    "The HbA1c test is used to measure the average blood glucose level over the past 2-3 months in people with diabetes. The test measures the amount of glycated hemoglobin (HbA1c) in the blood. The HbA1c calculator estimates the average blood glucose level based on the HbA1c result.",
            },
            ru: {
                name: "Калькулятор HbA1c",
                shortname: "HbA1c",
                category: "Эндокринология",
                introtext:
                    "Оценивает средний уровень глюкозы в крови за последние 2-3 месяца.",
                description:
                    "Тест на HbA1c используется для измерения среднего уровня глюкозы в крови за последние 2-3 месяца у людей с диабетом. Тест измеряет количество гликированного гемоглобина (HbA1c) в крови. Калькулятор HbA1c оценивает средний уровень глюкозы в крови на основе результата HbA1c.",
            },
        },
    },
    {
        id: 3,
        status: "",
        screen: GsPe,
        favorite: false,
        content: {
            en: {
                name: "Revised Geneva Score for Pulmonary Embolism",
                shortname: "Geneva Score for PE (revised)",
                category: "Cardiology",
                introtext:
                    "Predicts the probability of pulmonary embolism (PE).",
                description:
                    "The Geneva Score is a clinical prediction rule that uses a scoring system to predict the probability of pulmonary embolism (PE).\n\nThe criteria take into account several factors such as clinical signs and symptoms, risk factors, and laboratory test results to determine the probability of PE. The higher the score, the more likely the presence of PE.",
            },
            ru: {
                name: "Оценка Женева для ЛВТ",
                shortname: "Оценка Женева",
                category: "Кардиология",
                introtext:
                    "Предсказывает вероятность тромбоэмболии легочной артерии (ЛВТ).",
                description:
                    "Шкалы для оценки клинической вероятности ТЭЛА используются у стабильных пациентов (без шока, гипотензии) с подозрением на ТЭЛА.\n\nОни позволяют определить очередность диагностических процедур для подтверждения или исключения диагноза тромбоэмболии легочной артерии.",
            },
        },
    },
    {
        id: 4,
        status: "",
        screen: Gds,
        favorite: false,
        content: {
            en: {
                name: "Geriatric Depression Scale (GDS)",
                shortname: "GDS",
                category: "Psychiatry",
                introtext: "Assesses depression in elderly people.",
                description:
                    "The Geriatric Depression Scale (GDS) is a screening tool used to assess depression in elderly people. The GDS consists of a series of questions that ask about the subject's mood, feelings, and activities. The score can be used to determine the severity of depression and the need for treatment.",
            },
            ru: {
                name: "Гериатрическая шкала депрессии",
                shortname: "ГШД (GDS)",
                category: "Психиатрия",
                introtext: "Оценивает депрессию у пожилых людей.",
                description:
                    "Шкала самооценки для выявления депрессии у пожилых людей, используемая как часть комплексной гериатрической оценки.",
            },
        },
    },
    {
        id: 5,
        status: "",
        screen: Gad7,
        favorite: false,
        content: {
            en: {
                name: "Generalized Anxiety Disorder 7",
                shortname: "GAD-7",
                category: "Psychiatry",
                introtext:
                    "Assesses the severity of generalized anxiety disorder (GAD).",
                description:
                    "The Generalized Anxiety Disorder 7-Item Scale (GAD-7) is a self-report questionnaire used to assess the severity of generalized anxiety disorder (GAD).",
            },
            ru: {
                name: "Опросник генерализованного тревожного расстройства",
                shortname: "ГТР-7 (GAD-7)",
                category: "Психиатрия",
                introtext:
                    "Оценивает степень тяжести общего тревожного расстройства (ГТР).",
                description:
                    "Применяется для оценки уровня тревожности и скрининга генерализированного тревожного расстройства (ГТР)",
            },
        },
    },
    {
        id: 6,
        status: "",
        screen: Cow,
        favorite: false,
        content: {
            en: {
                name: "COWS Score for Opiate Withdrawal",
                shortname: "COWS",
                category: "Psychiatry",
                introtext: "Assesses severity of opioid withdrawal symptoms.",
                description:
                    "The Clinical Opiate Withdrawal Scale (COWS) is an 11-item scale designed to be administered by a clinician to assess opioid withdrawal symptoms. The scale includes items such as pulse rate, pupil size, and sweating, and is used to monitor the progression of withdrawal and the effectiveness of treatment.",
            },
            ru: {
                name: "Шкала оценки опийного абстинентного синдрома (ОАС)",
                shortname: "COWS",
                category: "Психиатрия",
                introtext: "Оценивает тяжесть симптомов отмены опиоидов.",
                description:
                    "Используется для отслеживания прогресса синдрома отмены и эффективности лечения.",
            },
        },
    },
    {
        id: 7,
        status: "",
        screen: Bsa,
        favorite: false,
        content: {
            en: {
                name: "Body Surface Area Calculator",
                shortname: "BSA",
                category: "Dermatology",
                introtext:
                    "Calculates body surface area based on height and weight.",
                description:
                    "The Body Surface Area (BSA) Calculator is a tool used to estimate the total surface area of a person's body based on their height and weight. The calculation is important in determining medication dosages, radiation therapy, and other medical treatments.",
            },
            ru: {
                name: "Калькулятор площади поверхности тела",
                shortname: "ППТ",
                category: "Дерматология",
                introtext:
                    "Вычисляет площадь поверхности тела на основе роста и веса.",
                description:
                    "Калькулятор площади поверхности тела (BSA) - это инструмент, используемый для оценки общей площади поверхности тела человека на основе его роста и веса. Расчет важен при определении дозировки лекарств, радиотерапии и других медицинских методов лечения.",
            },
        },
    },
    {
        id: 8,
        status: "",
        screen: Bmi,
        favorite: false,
        content: {
            en: {
                name: "Body Mass Index",
                shortname: "BMI",
                category: "Endocrinology",
                introtext:
                    "Calculates body mass index (BMI) based on height and weight.",
                description:
                    "The Body Mass Index (BMI) Calculator is a tool used to estimate a person's body fat based on their height and weight. The calculation is commonly used to assess whether a person is underweight, normal weight, overweight, or obese, and is an important factor in assessing overall health risk.",
            },
            ru: {
                name: "Калькулятор индекса массы тела",
                shortname: "ИМТ",
                category: "Эндокринология",
                introtext:
                    "Вычисляет индекс массы тела (ИМТ) на основе роста и веса.",
                description:
                    "Калькулятор индекса массы тела (ИМТ) - это инструмент, используемый для оценки процента жировой ткани в теле человека на основе его роста и веса. Расчет обычно используется для определения, находится ли человек в состоянии недостаточного веса, нормального веса, избыточного веса или ожирения, и является важным фактором при определении общего риска для здоровья.",
            },
        },
    },
    {
        id: 9,
        status: "",
        screen: Audit,
        favorite: false,
        content: {
            en: {
                name: "Alcohol Use Disorders Identification Test (AUDIT)",
                shortname: "AUDIT",
                category: "Psychiatry",
                introtext: "Screens for alcohol abuse and dependence.",
                description:
                    "The Alcohol Use Disorder Identification Test (AUDIT) is a ten-item questionnaire approved by the World Health Organization to screen patients for hazardous (risky) and harmful alcohol use.\n\nIt was developed on the basis of a WHO multi-country collaborative study, with the items selected for AUDIT being the best of the approximately 150 items included in the original study.",
            },
            ru: {
                name: "AUDIT — оценка потребления алкоголя",
                shortname: "AUDIT",
                category: "Психиатрия",
                introtext:
                    "Проверяет на злоупотребление и зависимость от алкоголя.",
                description:
                    "Тест на выявление расстройств, связанных с употреблением алкоголя (AUDIT ) - это вопросник из десяти пунктов, одобренный Всемирной организацией здравоохранения для проверки пациентов на опасное (рискованное) и вредное употребление алкоголя.\n\nОн был разработан на основе многостранового совместного исследования ВОЗ, при этом элементы, выбранные для AUDIT, являются лучшими из примерно 150 пунктов, включенных в исходное исследование.",
            },
        },
    },
    {
        id: 10,
        status: "",
        screen: Ascvd,
        favorite: false,
        content: {
            en: {
                name: "ASCVD Risk Calculator",
                shortname: "ASCVD",
                category: "Cardiology",
                introtext:
                    "Estimates 10-year risk of atherosclerotic cardiovascular disease.",
                description:
                    "The Atherosclerotic Cardiovascular Disease (ASCVD) Risk Calculator is used to estimate a person's 10-year risk of developing cardiovascular disease, including heart attack and stroke. The calculation is based on factors such as age, sex, blood pressure, cholesterol levels, and smoking status, and is used to guide treatment decisions and lifestyle modifications to reduce overall risk.",
            },
            ru: {
                name: "Шкала ASCVD",
                shortname: "ASCVD",
                category: "Кардиология",
                introtext:
                    "Оценивает 10-летний риск развития атеросклеротических кардиоваскулярных заболеваний.",
                description:
                    "Оценщик риска атеросклеротических кардиоваскулярных заболеваний (ASCVD) - это инструмент, используемый для оценки 10-летнего риска развития сердечно-сосудистых заболеваний, включая инфаркт и инсульт. Расчет основан на таких факторах, как возраст, пол, артериальное давление, уровень холестерина и курение, и используется для принятия решений о лечении и модификации образа жизни с целью снижения общего риска.",
            },
        },
    },
    {
        id: 11,
        status: "",
        screen: Phq9,
        favorite: false,
        content: {
            en: {
                name: "Patient Health Questionnaire-9",
                shortname: "PHQ-9",
                category: "Psychiatry",
                introtext:
                    "Assesses the severity of depression symptoms in patients.",
                description:
                    "The Patient Health Questionnaire-9 (PHQ-9) is a widely used tool for assessing the severity of depression symptoms in patients. It consists of nine questions that ask about the frequency and severity of symptoms such as feelings of sadness, loss of interest in activities, and changes in appetite and sleep patterns. The results are used to guide treatment decisions and monitor changes in symptoms over time.",
            },
            ru: {
                name: "Опросник для самодиагностики депрессии пациента PHQ-9",
                shortname: "PHQ-9",
                category: "Психиатрия",
                introtext:
                    "Оценивает степень тяжести симптомов депрессии у пациентов.",
                description:
                    "Вопросник о здоровье пациента-9 (PHQ-9) - широко используемый инструмент для оценки степени тяжести симптомов депрессии у пациентов. Он состоит из девяти вопросов, которые спрашивают о частоте и тяжести симптомов, таких как чувства грусти, потеря интереса к деятельности и изменения в аппетите и сна. Результаты используются для принятия решений о лечении и отслеживания изменений симптомов со временем.",
            },
        },
    },
    {
        id: 23,
        status: "",
        screen: Findrisk,
        favorite: false,
        content: {
            en: {
                name: "Finnish Diabetes Risk Score",
                shortname: "FINDRISC",
                category: "Endocrinology",
                introtext:
                    "Identifies patients at high risk for type 2 diabetes.",
                description:
                    "The Finnish Diabetes Risk Score (FINDRISC) is a tool used to assess an individual's risk of developing type 2 diabetes. It consists of eight questions that ask about age, BMI, waist circumference, physical activity, diet, and family history of diabetes. The results are used to guide lifestyle changes and preventive measures to reduce the risk of developing diabetes.",
            },
            ru: {
                name: "Определение риска развития диабета FINDRISC",
                shortname: "FINDRISC",
                category: "Эндокринология",
                introtext: "Оценивает риск развития диабета 2 типа у человека.",
                description:
                    "Шкала оценки риска развития диабета, разработанная Финской Ассоциацией Диабета, которая позволяет оценить 10-летний риск сахарного диабета (СД) 2 типа, включая бессимптомный сахарный диабет и нарушение толерантности к глюкозе (НТГ), с 85 % точностью.\n\nДанная шкала используется у людей старше 25 лет.",
            },
        },
    },
    {
        id: 25,
        status: "",
        screen: HEARTScore,
        favorite: false,
        content: {
            en: {
                name: "HEART Score for Major Cardiac Events",
                shortname: "HEART Score",
                category: "Cardiology",
                introtext:
                    "Assesses the risk of major cardiac events in patients presenting with chest pain.",
                description:
                    "The HEART Score is a tool used to assess the risk of major cardiac events in patients presenting with chest pain. It takes into account factors such as age, gender, medical history, and the results of an electrocardiogram (ECG) and cardiac biomarkers. The results are used to guide diagnostic and treatment decisions to reduce the risk of major cardiac events.",
            },
            ru: {
                name: "Шкала HEART - оценка риска развития сердечных осложнений",
                shortname: "Шкала HEART",
                category: "Кардиология",
                introtext:
                    "Оценивает риск развития сердечных осложнений у пациентов, предъявляющих жалобы на боль в груди.",
                description:
                    "Шкала HEART (Heart Score) - это инструмент, используемый для оценки риска развития сердечных осложнений у пациентов, предъявляющих жалобы на боль в груди. Учитываются факторы, такие как возраст, пол, медицинская история и результаты электрокардиограммы (ЭКГ) и сердечных биомаркеров. Результаты используются для руководства диагностическими и терапевтическими решениями, направленными на снижение риска серьезных сердечных осложнений.",
            },
        },
    },
    {
        id: 26,
        status: "",
        screen: CreatinineClearance,
        favorite: false,
        content: {
            en: {
                name: "Creatinine Clearance (Cockcroft-Gault Equation)",
                shortname: "Creatinine Clearance",
                category: "Nephrology",
                introtext:
                    "Calculates an individual's estimated creatinine clearance.",
                description:
                    "The Cockcroft-Gault equation is used to estimate an individual's creatinine clearance based on their serum creatinine level, age, weight, and gender. The result can be used to adjust medication dosages and assess kidney function.",
            },
            ru: {
                name: "Клиренс креатинина (уравнение Коккрофта-Гольта)",
                shortname: "Клиренс креатинина",
                category: "Нефрология",
                introtext: "Рассчитывает клиренс креатинина у человека.",
                description:
                    "Уравнение Коккрофта-Гольта используется для оценки клиренса креатинина у человека на основе уровня креатинина в крови, возраста, веса и пола. Результат можно использовать для корректировки дозировок лекарств и оценки функции почек.",
            },
        },
    },
    {
        id: 29,
        status: "",
        screen: GlomerularFiltrationRate,
        favorite: false,
        content: {
            en: {
                name: "Glomerular Filtration Rate (GFR)",
                shortname: "GFR",
                category: "Nephrology",
                introtext:
                    "Calculates an individual's estimated glomerular filtration rate.",
                description:
                    "The Glomerular Filtration Rate (GFR) is a measure of how well the kidneys are functioning.\n\nIt estimates the rate at which blood is filtered through the glomeruli, the tiny blood vessels in the kidneys.\n\nGFR is a crucial indicator of kidney health and can be used to diagnose and monitor various kidney conditions.",
            },
            ru: {
                name: "Скорость клубочковой фильтрации (СКФ)",
                shortname: "СКФ",
                category: "Нефрология",
                introtext:
                    "Рассчитывает оценочную скорость клубочковой фильтрации у человека.",
                description:
                    "Скорость клубочковой фильтрации (СКФ) является мерой функционирования почек.\n\nОна оценивает скорость фильтрации крови через гломерулы, маленькие кровеносные сосуды в почках.\n\nСКФ - это важный показатель состояния почек и может использоваться для диагностики и мониторинга различных почечных состояний.",
            },
        },
    },
    {
        id: 27,
        status: "",
        screen: CURB65,
        favorite: false,
        content: {
            en: {
                name: "CURB-65 Score for Pneumonia Severity",
                shortname: "CURB-65",
                category: "Infections",
                introtext:
                    "Assesses the severity of pneumonia in an individual.",
                description:
                    "Evaluates the mortality risk of pneumonia to help determine the appropriate treatment approach – inpatient or outpatient care.\n\nThe CURB-65 calculator can also be used in emergency departments to stratify a patient's risk for making clinical decisions on the management strategy.",
            },
            ru: {
                name: "Оценка тяжести пневмонии по шкале CURB-65",
                shortname: "CURB-65",
                category: "Инфекции",
                introtext: "Оценивает тяжесть пневмонии у человека.",
                description:
                    "Оценивает смертность от внебольничной пневмонии, чтобы помочь выбрать правильную тактику лечения пациента – стационарное или амбулаторное лечение.\n\nКалькулятор CURB-65 также можно использовать в отделениях неотложной помощи для стратификации риска пациента для принятия клинических решений по стратегии ведения.",
            },
        },
    },
    {
        id: 28,
        status: "",
        screen: CardiacRisk,
        favorite: false,
        content: {
            en: {
                name: "Revised Cardiac Risk Index for Pre-Operative Risk",
                shortname: "RCRI",
                category: "Cardiology",
                introtext:
                    "Calculates an individual's risk of cardiac complications after surgery.",
                description:
                    "The Revised Cardiac Risk Index (RCRI) is a tool used to calculate an individual's risk of cardiac complications after surgery. It takes into account factors such as age, history of heart disease, history of stroke, diabetes, and renal insufficiency. The results are used to guide preventive measures and treatment options to reduce the risk of cardiac complications after surgery.",
            },
            ru: {
                name: "RCRI - индекс риска развития сердечных осложнений при проведении операций",
                shortname: "Сердечный риск",
                category: "Кардиология",
                introtext:
                    "Рассчитывает риск сердечных осложнений у человека после операции.",
                description:
                    "Инструмент Revised Cardiac Risk Index (RCRI) используется для расчета риска сердечных осложнений у человека после операции. Учитываются факторы, такие как возраст, наличие сердечных заболеваний, история инсульта, диабет и почечная недостаточность. Результаты используются для рекомендации профилактических мер и методов лечения, направленных на снижение риска сердечных осложнений после операции.",
            },
        },
    },
];

export default catalog;
