import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calculateCreatinineClearanceScore(input: Input, prefs: Prefs): Result {
    const isEmpty = Object.values(input).some(
        (value) => value === null || value === undefined
    );

    console.log("Input is not sufficient to do calculations, received input:");
    console.log(input);
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

    const { gender, age, weight, height, creatinine } = input;

    let score = 0;
    if (gender === 1) {
        // For males
        score =
            ((140 - Number(age)) * Number(weight)) /
            (0.818 * Number(creatinine));
    } else if (gender === 2) {
        // For females
        score =
            ((140 - Number(age)) * Number(weight) * 0.85) /
            (0.818 * Number(creatinine));
    }

    let result = "";
    if (score >= 90) {
        result = "Normal";
    } else if (score >= 60) {
        result = "Mildly impaired";
    } else if (score >= 30) {
        result = "Moderately impaired";
    } else {
        result = "Severely impaired";
    }

    const variant = variants[prefs.language][result];
    const title = variant.title;
    const description = variant.description;

    let scoreUnit = "";
    switch (prefs.language) {
        case "en":
            scoreUnit = en.scoreUnit;
            break;
        case "ru":
            scoreUnit = ru.scoreUnit;
            break;
        default:
            scoreUnit = en.scoreUnit;
    }

    const date = new Date().toISOString();
    const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

    const output: Result = {
        id,
        date,
        score: Number(score.toFixed(0)),
        scoreUnit,
        title,
        description,
    };
    return output;
}

export { calculateCreatinineClearanceScore };
