import { Input, Prefs, Result } from "./domain";
import { variants } from "./variants";

function calculateASCVDRisk(input: Input, prefs: Prefs): Result {
    const isEmpty = Object.values(input).some(
        (value) => value === null || value === undefined
    );

    if (isEmpty) {
        return {
            id: "",
            date: "",
            score: 0,
            title: "",
            description: "",
        };
    }

    const age = Number(input.age);
    const gender = input.gender;
    const sbp = input.sbp;
    const tchol = input.tchol;
    const hdlc = input.hdlc;
    const race = input.race;
    const diabetes = input.diabetes;
    const smoker = input.smoker;
    const hypertension = input.hypertension;

    let riskScore = 0;

    if (gender === "male") {
        riskScore += 0.957;
    } else if (gender === "female") {
        riskScore += 1.354;
    }

    if (race === "black") {
        riskScore += 0.188;
    }

    if (age >= 20 && age <= 39) {
        riskScore += 0.165;
    } else if (age >= 40 && age <= 49) {
        riskScore += 0.405;
    } else if (age >= 50 && age <= 59) {
        riskScore += 0.652;
    } else if (age >= 60 && age <= 69) {
        riskScore += 0.872;
    } else if (age >= 70 && age <= 79) {
        riskScore += 0.95;
    }

    if (tchol !== null) {
        riskScore += Math.log(tchol);
    }

    if (hdlc !== null) {
        riskScore -= Math.log(hdlc);
    }

    if (sbp !== null) {
        riskScore += Math.log(sbp);
    }

    if (diabetes) {
        riskScore += 0.573;
    }

    if (smoker) {
        riskScore += 0.528;
    }

    if (hypertension) {
        riskScore += 0.691;
    }

    let resultVariant: string;

    if (riskScore < -7.5) {
        resultVariant = "lowRisk";
    } else if (riskScore >= -7.5 && riskScore < 7.5) {
        resultVariant = "borderlineRisk";
    } else if (riskScore >= 7.5 && riskScore < 20) {
        resultVariant = "intermediateRisk";
    } else {
        resultVariant = "highRisk";
    }

    const selectedVariant = variants[prefs.language][resultVariant];

    const date = new Date().toISOString();
    const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

    const output: Result = {
        id,
        date,
        score: riskScore,
        title: selectedVariant.title,
        description: selectedVariant.description,
    };

    return output;
}

export { calculateASCVDRisk };
