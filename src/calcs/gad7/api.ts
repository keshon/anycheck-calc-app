import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calculateGAD7Score(input: Input, prefs: Prefs): Result {
    const isEmpty = Object.values(input).some(
        (value) => value === null || value === undefined
    );

    if (isEmpty) {
        return {
            id: "",
            date: "",
            score: null,
            scoreUnit: "",
            title: "",
            description: "",
        };
    }

    const score =
        Number(input.q1) +
        Number(input.q2) +
        Number(input.q3) +
        Number(input.q4) +
        Number(input.q5) +
        Number(input.q6) +
        Number(input.q7);

    let result: string;
    if (score <= 4) {
        result = "No anxiety";
    } else if (score <= 9) {
        result = "Mild anxiety";
    } else if (score <= 14) {
        result = "Moderate anxiety";
    } else {
        result = "Severe anxiety";
    }

    let scoreUnit = "";
    let selectedTranslation = {};
    switch (prefs.language) {
        case "en":
            selectedTranslation = en;
            break;
        case "ru":
            selectedTranslation = ru;
            break;
        default:
            selectedTranslation = en;
    }
    scoreUnit = getScoreText(score, selectedTranslation);

    let variant = variants[prefs.language][result];
    let title = variant.title;
    let description = variant.description;

    const date = new Date().toISOString();
    const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

    const output: Result = {
        id,
        date,
        score,
        scoreUnit,
        title,
        description,
    };
    return output;
}

function getScoreText(score: number, lang: any) {
    if (score === 1) {
        return `${lang.scoreUnit}`;
    } else if (score >= 2 && score <= 4) {
        return `${lang.scoreGenitiveSingular}`;
    } else {
        return `${lang.scoreGenitivePlural}`;
    }
}

export { calculateGAD7Score };
