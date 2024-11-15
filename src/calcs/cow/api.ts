import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

function calculateCowScore(input: Input, prefs: Prefs): Result {
    const isEmpty = Object.values(input).some(
        (value) => value === null || value === undefined
    );

    if (isEmpty) {
        return {
            id: "",
            date: "",
            score: null,
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
        Number(input.q10) +
        Number(input.q11);

    let result;
    if (score > 4 && score < 13) {
        result = "Mild";
    } else if (score < 25) {
        result = "Moderate";
    } else if (score < 37) {
        result = "Moderately Severe";
    } else {
        result = "Severe Withdrawal";
    }

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
        title,
        description,
    };
    return output;
}

export { calculateCowScore };
