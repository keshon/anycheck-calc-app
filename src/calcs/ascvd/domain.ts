export interface Prefs {
    language: "en" | "ru";
}

export interface Input {
    age: number | null;
    gender: "male" | "female" | undefined;
    sbp: number | null;
    tchol: number | null;
    hdlc: number | null;
    race: "white" | "black" | "other" | undefined;
    diabetes: boolean | undefined;
    smoker: boolean | undefined;
    hypertension: boolean | undefined;
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
}
