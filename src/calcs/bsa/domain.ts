export interface Prefs {
    language: "en" | "ru";
    heightMeasure: "in"| "cm";
    weightMeasure: "lb" | "kg";
}

export interface Input {
    prefs: Prefs;
    weight: number;
    height: number;
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
    score: number;
    title: string;
    description: string;
    input: Input;
}
