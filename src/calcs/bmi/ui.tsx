import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, ScrollView, Alert } from "react-native";

import { NumericContainer } from "../../components/numericContainer";
import i18n from "../../i18n/i18n";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";
import { calculateBMI } from "./api";

i18n.addResourceBundle("en", "BmiCalculator", en);
i18n.addResourceBundle("ru", "BmiCalculator", ru);

const BmiCalculator = ({ handleResult, handleResetClick, lang }: any) => {
    // Use translation for specific calculator
    const { t } = useTranslation("BmiCalculator");

    const [height, setHeight] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);

    const handleHeightChange = (value: number) => {
        setHeight(value);
    };

    const handleWeightChange = (value: number) => {
        setWeight(value);
    };

    // Result
    const [result, setResult] = useState({});
    useEffect(() => {
        setResult(
            calculateBMI({
                height,
                weight,
                prefs: {
                    language: lang,
                    heightMeasure: "cm",
                    weightMeasure: "kg",
                },
            })
        );
    }, [height, weight]);

    useEffect(() => {
        handleResult(result);
    }, [result]);

    // Reset
    useEffect(() => {
        if (handleResetClick) {
            setHeight(null);
            setWeight(null);
        }
    }, [handleResetClick]);

    return (
        <ScrollView>
            <View>
                <NumericContainer
                    title={t("height")}
                    placeholder={""}
                    value={height}
                    onChangeValue={handleHeightChange}
                    type={"absint"}
                    suffix={t("cm")}
                    from={0}
                    to={250}
                />
                <NumericContainer
                    title={t("weight")}
                    placeholder={""}
                    value={weight}
                    onChangeValue={handleWeightChange}
                    type={"absint"}
                    suffix={t("kg")}
                    from={0}
                    to={300}
                />
            </View>
        </ScrollView>
    );
};

export default BmiCalculator;
