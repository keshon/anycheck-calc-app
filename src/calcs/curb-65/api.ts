import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calculateCURB65Score(input: Input, prefs: Prefs): Result {
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

    let score = 0;

    let data = {
        confusion: input.confusion,
        bun: input.bun,
        respiratoryRate: input.respiratoryRate ? 30 : 0,
        systolicBP: input.systolicBP ? 0 : 90,
        age65: input.age65,
    };

    if (data.confusion === 1) score++;
    if (data.bun === 1) score++;
    if (data.respiratoryRate >= 30) score++;
    if (data.systolicBP < 90) score++;
    if (data.age65 === 1) score++;

    let variantKey = "";
    let severity = "";
    if (score === 0 || score === 1) {
        variantKey = "low";
        severity = variants[prefs.language]["low"].title;
    } else if (score === 2) {
        variantKey = "moderate";
        severity = variants[prefs.language]["moderate"].title;
    } else if (score === 3) {
        variantKey = "severe";
        severity = variants[prefs.language]["severe"].title;
    } else if (score === 4 || score === 5) {
        variantKey = "highest";
        severity = variants[prefs.language]["highest"].title;
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

    let variant = variants[prefs.language][variantKey];
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

export { calculateCURB65Score };
