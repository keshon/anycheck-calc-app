import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, ScrollView } from "react-native";

import { SegmentContainer } from "../../components/segmentContainer";
import { Input, Question } from "./domain";
import { calculateFindrisk } from "./api";
import { questions } from "./questions";

const CalcScreen: React.FC = ({
    handleResult,
    handleResetClick,
    lang,
}: any) => {
    // Initialize empty input state
    const emptyInput = () => {
        return {
            gender: null,
            age: null,
            bmi: null,
            waist_female: null,
            waist_male: null,
            physicalActivity: null,
            dailyFruitsVegetables: null,
            bloodPressureMedication: null,
            highBloodGlucose: null,
            familyDiabetes: null,
        };
    };

    const [input, setInput] = useState<Input>(emptyInput());
    const [selectedGender, setSelectedGender] = useState(null);

    // Handle input field changes
    const handleInputChange = (field: string, value: any) => {
        setInput((prevInput) => ({
            ...prevInput,
            [field]: value,
        }));
        if (field === "gender") {
            setSelectedGender(value);
        }
    };

    // List of questions
    const localQuestions: Question[] = questions[lang];

    // Calculate and update the result when input changes
    const [result, setResult] = useState({});
    useEffect(() => {
        setResult(
            calculateFindrisk(input, {
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
            setSelectedGender(null);
            setInput(emptyInput());
        }
    }, [handleResetClick]);

    return (
        <ScrollView>
            <View>
                <View>
                    {localQuestions.map((question) => {
                        // Check if the question should be displayed based on the selected gender
                        if (
                            (question.name === "waist_male" &&
                                selectedGender === 2) || // "Male"
                            (question.name === "waist_female" &&
                                selectedGender === 1) // "Female"
                        ) {
                            return (
                                <SegmentContainer
                                    title={question.text}
                                    value={input[question.name]}
                                    options={question.options}
                                    onChangeValue={(value: any) => {
                                        handleInputChange(question.name, value);
                                    }}
                                    resetBy="null"
                                    forceVertical={question.forceVertical}
                                />
                            );
                        } else if (
                            question.name !== "waist_male" &&
                            question.name !== "waist_female"
                        ) {
                            // Render all other questions except waist-related ones
                            return (
                                <SegmentContainer
                                    title={question.text}
                                    value={input[question.name]}
                                    options={question.options}
                                    onChangeValue={(value: any) => {
                                        handleInputChange(question.name, value);
                                    }}
                                    resetBy="null"
                                    forceVertical={question.forceVertical}
                                />
                            );
                        }
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

export default CalcScreen;
