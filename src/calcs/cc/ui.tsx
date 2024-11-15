import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, ScrollView } from "react-native";

import { NumericContainer } from "../../components/numericContainer";
import { SegmentContainer } from "../../components/segmentContainer";
import i18n from "../../i18n/i18n";

import en from "./i18n/en.json";
import ru from "./i18n/ru.json";
import { Input, Result } from "./domain";
import { calculateCreatinineClearanceScore } from "./api";

i18n.addResourceBundle("en", "CreatinineClearance", en);
i18n.addResourceBundle("ru", "CreatinineClearance", ru);

const CreatinineClearance: React.FC = ({
    handleResult,
    handleResetClick,
    lang,
}: any) => {
    const { t } = useTranslation("CreatinineClearance");

    // Initialize empty input state
    const emptyInput = () => {
        return {
            gender: null,
            age: null,
            height: null,
            weight: null,
            creatinine: null,
        };
    };

    const [input, setInput] = useState<Input>(emptyInput());

    // Handle input field changes
    const handleInputChange = (field: string, value: any) => {
        setInput((prevInput) => ({
            ...prevInput,
            [field]: value,
        }));
    };

    // Calculate and update the result when input changes
    const [result, setResult] = useState({});
    useEffect(() => {
        setResult(
            calculateCreatinineClearanceScore(input, {
                language: lang,
            })
        );
    }, [input]);

    // Pass the result to the parent component
    useEffect(() => {
        handleResult(result);
        console.log(result);
    }, [result]);

    // Reset input when handleResetClick changes
    useEffect(() => {
        if (handleResetClick) {
            setInput(emptyInput());
        }
    }, [handleResetClick]);

    return (
        <ScrollView>
            <View>
                <SegmentContainer
                    title={t("gender")}
                    value={input.gender}
                    options={[
                        { value: 1, label: t("male") },
                        { value: 2, label: t("female") },
                    ]}
                    onChangeValue={(value: any) => {
                        handleInputChange("gender", value);
                    }}
                    resetBy="null"
                />
                <NumericContainer
                    title={t("age")}
                    placeholder={""}
                    value={input.age}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange("age", value);
                    }}
                    type={"absint"}
                    suffix={t("ageUnit")}
                />
                <NumericContainer
                    title={t("weight")}
                    placeholder={""}
                    value={input.weight}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange("weight", value);
                    }}
                    type={"absint"}
                    suffix={t("weightUnit")}
                />
                <NumericContainer
                    title={t("height")}
                    placeholder={""}
                    value={input.height}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange("height", value);
                    }}
                    type={"absint"}
                    suffix={t("heightUnit")}
                />
                <NumericContainer
                    title={t("creatinine")}
                    placeholder={""}
                    value={input.creatinine}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange("creatinine", value);
                    }}
                    type={"float"}
                    suffix={t("creatinineUnit")}
                />
            </View>
        </ScrollView>
    );
};

export { CreatinineClearance };
