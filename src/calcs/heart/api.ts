import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calculateHeartScore(input: Input, prefs: Prefs): Result {
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

    let score =
        Number(input.q1) +
        Number(input.q2) +
        Number(input.q3) +
        Number(input.q4) +
        Number(input.q5);

    let result;
    if (score < 4) {
        result = "low";
    } else if (score < 7) {
        result = "moderate";
    } else {
        result = "high";
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

    const variant = variants[prefs.language][result];
    const title = variant.title;
    const description = variant.description;

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

export { calculateHeartScore };