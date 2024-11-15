import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calculateFindrisk(input: Input, prefs: Prefs): Result {
    // The FINDRISK algorithm was originally published in this paper:
    // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2768210/
    // We are using an adapted version of the algorithm that was published in this paper:
    // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3854070/

    const isEmpty = Object.entries(input).some(([key, value]) => {
        if (key === "waist_male" || key === "waist_female") {
            return false;
        }
        return value === null || value === undefined;
    });

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

    score += input.age !== null ? input.age : 0;
    score += input.bmi !== null ? input.bmi : 0;
    score += input.physicalActivity !== null ? input.physicalActivity : 0;
    score +=
        input.dailyFruitsVegetables !== null ? input.dailyFruitsVegetables : 0;
    score +=
        input.bloodPressureMedication !== null
            ? input.bloodPressureMedication
            : 0;
    score += input.familyDiabetes !== null ? input.familyDiabetes : 0;
    score += input.highBloodGlucose !== null ? input.highBloodGlucose : 0;

    if (input.gender == 1) {
        score += input.waist_female !== null ? input.waist_female : 0;
    } else if (input.gender == 2) {
        score += input.waist_male !== null ? input.waist_male : 0;
    }

    let resultTitle = "";
    let resultDescription = "";
    for (const variant in variants[prefs.language]) {
        const range = variant.split(" ")[0];
        const [minScore, maxScore] = range.split("-").map(Number);
        if (score >= minScore && score <= maxScore) {
            resultTitle = variants[prefs.language][variant].title;
            resultDescription = variants[prefs.language][variant].description;
            break;
        }
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

    const date = new Date().toISOString();
    const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

    const output: Result = {
        id,
        date,
        score: score,
        scoreUnit,
        title: resultTitle,
        description: resultDescription,
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

export { calculateFindrisk };
