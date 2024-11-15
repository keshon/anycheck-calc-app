import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

function calculateBodySurfaceArea(weightKg: number, heightCm: number): number {
    const heightM = heightCm / 100; // Convert height to meters
    return Math.sqrt((weightKg * heightM) / 3600);
}

function calculateGlomerularFiltrationRate(input: Input, prefs: Prefs): Result {
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

    const { age, creatinine, gender, height, weight } = input;

    let alpha, Sex, kappa;
    if (gender === 1) {
        // Male
        Sex = 1;
        alpha = -0.411;
        kappa = 0.9;
    } else {
        // Female
        Sex = 1.018;
        alpha = -0.329;
        kappa = 0.7;
    }

    const creatinineUMolL = Number(creatinine) * 88.4;

    const eGFR =
        141 *
        Math.min(creatinineUMolL / kappa, 1) *
        Math.pow(creatinineUMolL / kappa, alpha) *
        Math.pow(0.993, Number(age)) *
        Sex *
        calculateBodySurfaceArea(weight as number, height as number);

    const score = eGFR / 1.73;

    let result = "";
    if (score >= 90) {
        result = "Normal";
    } else if (score >= 60) {
        result = "Initially impaired";
    } else if (score >= 30) {
        result = "Moderately impaired";
    } else if (score >= 15) {
        result = "Severely impaired";
    } else {
        result = "Terminally impaired";
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
        score: Number(eGFR.toFixed(2)),
        scoreUnit,
        title,
        description,
    };
    return output;
}

export { calculateGlomerularFiltrationRate };
