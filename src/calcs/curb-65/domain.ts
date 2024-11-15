export interface Prefs {
    language: "en" | "ru";
}

export interface Input {
    confusion: number | null;
    bun: number | null;
    respiratoryRate: number | null;
    systolicBP: number | null;
    age65: number | null;
}

// export interface Input {
//     q1: number | null;
//     q2: number | null;
//     q3: number | null;
//     q4: number | null;
//     q5: number | null;
// }

export interface Question {
    name: string;
    text: string;
    options: {
        label: string;
        value: number;
        score?: string;
    }[];
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
