import { Input, Result } from "./domain";
import { variants } from "./variants";

function calculateBSA(input: Input): Result {
    let weight = input.weight;
    let height = input.height;

    input.prefs.heightMeasure === "in" ? (height = height * 2.54) : height;
    input.prefs.weightMeasure === "lb" ? (weight = weight / 2.20462) : weight;

    const bsa = Math.sqrt((height * weight) / 3600);

    let title: string;
    let description: string;

    let lang = variants[input.prefs.language];
    if (!lang) {
        // Set a default language if the selected language is not found
        lang = variants["en"];
    }

    if (bsa < 1.6) {
        description = lang.underweight.description;
        title = lang.underweight.title;
    } else if (bsa < 2.0) {
        description = lang.normal.description;
        title = lang.normal.title;
    } else if (bsa < 2.5) {
        description = lang.overweight.description;
        title = lang.overweight.title;
    } else {
        description = lang.obese.description;
        title = lang.obese.title;
    }

    const date = new Date().toISOString();
    const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

    const output: Result = {
        id,
        date,
        score: bsa,
        title,
        description,
        input: input,
    };
    return output;
}

// Example usage
// const input: Input = {
//     prefs: {
//         language: "english",
//         heightMeasure: "in",
//         weightMeasure: "lb",
//     },
//     weight: 212,
//     height: 75,
// };

// const result = calculateBSA(input);
// console.log(result);

export default calculateBSA;
