import { Input, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calc(input: Input): Result {
    if (
        Number(input.weight) === 0 ||
        Number(input.height) === 0 ||
        input.weight === "" ||
        input.height === "" ||
        input.height === null ||
        input.weight === null
    ) {
        return {
            id: "",
            date: "",
            score: null,
            scoreUnit: "",
            title: "",
            description: "",
        };
    }

    let weight = Number(input.weight);
    let height = Number(input.height);

    input.prefs.heightMeasure === "in" ? (height = height * 2.54) : height;
    input.prefs.weightMeasure === "lb" ? (weight = weight / 2.20462) : weight;

    const score = weight / Math.pow(height / 100, 2);

    let lang = variants[input.prefs.language];
    if (!lang) {
        lang = variants["en"];
    }

    let title: string;
    let description: string;
    if (score < 18.5) {
        description = lang.underweight.description;
        title = lang.underweight.title;
    } else if (score < 25) {
        description = lang.normal.description;
        title = lang.normal.title;
    } else if (score < 30) {
        description = lang.overweight.description;
        title = lang.overweight.title;
    } else {
        description = lang.obese.description;
        title = lang.obese.title;
    }

    let scoreUnit = "";
    switch (input.prefs.language) {
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

    // Return Out object
    const output: Result = {
        id,
        date,
        score: Number(score.toFixed(2)),
        scoreUnit,
        title,
        description,
    };
    return output;
}

export { calc as calculateBMI };
