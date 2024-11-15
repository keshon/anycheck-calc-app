import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";

import { SegmentContainer } from "../../components/segmentContainer";
import { Input, Question } from "./domain";
import { questions } from "./questions";
import { calculateGDSScore } from "./api";

const CalcScreen: React.FC = ({
    handleResult,
    handleResetClick,
    lang,
}: any) => {
    // Initialize empty input state
    const emptyInput = () => {
        return {
            q1: null,
            q2: null,
            q3: null,
            q4: null,
            q5: null,
            q6: null,
            q7: null,
            q8: null,
            q9: null,
            q10: null,
            q11: null,
            q12: null,
            q13: null,
            q14: null,
            q15: null,
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

    // List of questions
    const localQuestions: Question[] = questions[lang];

    // Calculate and update the result when input changes
    const [result, setResult] = useState({});
    useEffect(() => {
        setResult(
            calculateGDSScore(input, {
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
                <View>
                    {localQuestions.map((question) => (
                        <SegmentContainer
                            title={question.text}
                            value={input[question.name]}
                            options={question.options}
                            onChangeValue={(value: any) => {
                                handleInputChange(question.name, value);
                            }}
                            resetBy="null"
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default CalcScreen;
