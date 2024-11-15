interface Input {
    hba1c: number;
}

interface Variant {
    title: string;
    description: string;
}

interface Result {
    value: number;
    interpretation: Variant;
    date: Date;
    id: string;
}

interface Variants {
    [key: string]: Variant;
}

function calculate(input: Input): Result {
    const eag = (28.7 * input.hba1c - 46.7).toFixed(0);
    const interpretation = getInterpretation(input.hba1c);

    return {
        value: parseFloat(eag),
        interpretation,
        date: new Date(),
        id: Math.random().toString(36).substr(2, 9),
    };
}

function getInterpretation(hba1c: number): Variant {
    const variants: Variants = {
        normal: {
            title: "Normal",
            description: "Less than 5.7%",
        },
        prediabetes: {
            title: "Prediabetes",
            description: "5.7% to 6.4%",
        },
        diabetes: {
            title: "Diabetes",
            description: "6.5% or higher",
        },
    };

    if (hba1c < 5.7) {
        return variants.normal;
    } else if (hba1c >= 5.7 && hba1c < 6.5) {
        return variants.prediabetes;
    } else {
        return variants.diabetes;
    }
}

// Example usage:
const input: Input = {
    hba1c: 7.2,
};

const result: Result = calculate(input);

console.log(`Estimated Average Glucose (EAG): ${result.value}`);
console.log(
    `Interpretation: ${result.interpretation.title} - ${result.interpretation.description}`
);
console.log(`Date: ${result.date}`);
console.log(`ID: ${result.id}`);
