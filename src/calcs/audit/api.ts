import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calc(input: Input, prefs: Prefs): Result {
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
        Number(input.q5) +
        Number(input.q6) +
        Number(input.q7) +
        Number(input.q8) +
        Number(input.q9) +
        Number(input.q10);

    let result;
    if (score <= 7) {
        result = "0-7";
    } else if (score <= 15) {
        result = "8-15";
    } else if (score <= 19) {
        result = "16-19";
    } else {
        result = "20+";
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

export { calc as calculateAuditScore };
