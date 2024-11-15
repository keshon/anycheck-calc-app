export interface Prefs {
    language: "en" | "ru";
    heightMeasure: "in" | "cm";
    weightMeasure: "lb" | "kg";
}

export interface Input {
    prefs: Prefs;
    weight: string | number | null;
    height: string | number | null;
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
