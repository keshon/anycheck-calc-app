export interface Prefs {
    language: "en" | "ru";
}

export interface Input {
    gender: number | null;
    age: number | null;
    weight: number | null;
    height: number | null;
    creatinine: number | null;
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
