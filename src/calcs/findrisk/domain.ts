export interface Prefs {
    language: "en" | "ru";
}

export interface Input {
    gender: number | null;
    age: number | null;
    bmi: number | null;
    waist_female: number | null;
    waist_male: number | null;
    physicalActivity: number | null;
    dailyFruitsVegetables: number | null;
    bloodPressureMedication: number | null;
    highBloodGlucose: number | null;
    familyDiabetes: number | null;
}

export interface Question {
    name: string;
    text: string;
    options: {
        label: string;
        value: number;
        score?: string;
    }[];
    forceVertical?: boolean;
}

export interface Questions {
    [language: string]: Question[];
}

export interface Variants {
    [language: string]: {
        [result: string]: {
            title: string;
            description: string;
        };
    };
}

export interface Result {
    id: string;
    date: string;
    score: number | null;
    scoreUnit: string;
    title: string;
    description: string;
}
