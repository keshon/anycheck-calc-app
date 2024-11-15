import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';

import { SegmentContainer } from '../../components/segmentContainer';
import { NumericContainer } from '../../components/numericContainer';
import i18n from '../../i18n/i18n';

import en from './i18n/en.json';
import ru from './i18n/ru.json';
import { Input, Result, Variants } from './domain';
import { calculateASCVDRisk } from './api';

i18n.addResourceBundle('en', 'Ascvd', en);
i18n.addResourceBundle('ru', 'Ascvd', ru);

const AscvdScreen: React.FC = ({ handleResult, handleResetClick, lang }: any) => {
    // Use translation for specific calculator
    const { t } = useTranslation('Ascvd');

    // Initialize empty input state
    const emptyInput = () => {
        return {
            age: null,
            gender: undefined,
            sbp: null,
            tchol: null,
            hdlc: null,
            race: undefined,
            diabetes: undefined,
            smoker: undefined,
            hypertension: undefined,
        };
    };

    const [input, setInput] = useState<Input>(emptyInput());

    // Handle input field changes
    const handleInputChange = (field: keyof Input, value: any) => {
        setInput((prevInput) => ({
            ...prevInput,
            [field]: value,
        }));
    };

    // Calculate and update the result when input changes
    const [result, setResult] = useState({});
    useEffect(() => {
        setResult(
            calculateASCVDRisk(
                {
                    age: input.age,
                    gender: input.gender,
                    race: input.race,
                    sbp: input.sbp,
                    tchol: input.tchol,
                    hdlc: input.hdlc,
                    diabetes: input.diabetes,
                    smoker: input.smoker,
                    hypertension: input.hypertension,
                },
                {
                    language: lang,
                }
            )
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
                <NumericContainer
                    title={t('age')}
                    value={input.age}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange('age', value);
                    }}
                    type={'absint'}
                    suffix={t('ageUnit')}
                />
                <SegmentContainer
                    title={t('gender')}
                    value={input.gender}
                    options={[
                        { value: 'male', label: t('male') },
                        { value: 'female', label: t('female') },
                    ]}
                    onChangeValue={(value: any) => {
                        handleInputChange('gender', value);
                    }}
                    resetBy={'number'}
                />
                <SegmentContainer
                    title={t('race')}
                    value={input.race}
                    options={[
                        { value: 'white', label: t('white') },
                        { value: 'black', label: t('black') },
                    ]}
                    onChangeValue={(value: any) => {
                        handleInputChange('race', value);
                    }}
                    resetBy={'number'}
                />
                <SegmentContainer
                    title={t('hypertension')}
                    value={input.hypertension}
                    options={[
                        { value: true, label: t('yes') },
                        { value: false, label: t('no') },
                    ]}
                    onChangeValue={(value: any) => {
                        handleInputChange('hypertension', value);
                    }}
                    resetBy={'number'}
                />
                <NumericContainer
                    title={t('sbp')}
                    placeholder={''}
                    value={input.sbp}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange('sbp', value);
                    }}
                    type={'float'}
                    suffix={t('sbpUnit')}
                />
                <NumericContainer
                    title={t('tchol')}
                    placeholder={''}
                    value={input.tchol}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange('tchol', value);
                    }}
                    type={'float'}
                    suffix={t('cholUnit')}
                />
                <NumericContainer
                    title={t('hdlc')}
                    placeholder={''}
                    value={input.hdlc}
                    onChangeValue={(value: any) => {
                        if (parseInt(value) <= 0) {
                            return;
                        }
                        handleInputChange('hdlc', value);
                    }}
                    type={'float'}
                    suffix={t('sbpUnit')}
                />
                <SegmentContainer
                    title={t('diabetes')}
                    value={input.diabetes}
                    options={[
                        { value: true, label: t('yes') },
                        { value: false, label: t('no') },
                    ]}
                    onChangeValue={(value: any) => {
                        handleInputChange('diabetes', value);
                    }}
                    resetBy={'number'}
                />
                <SegmentContainer
                    title={t('smoker')}
                    value={input.smoker}
                    options={[
                        { value: true, label: t('yes') },
                        { value: false, label: t('no') },
                    ]}
                    onChangeValue={(value: any) => {
                        handleInputChange('smoker', value);
                    }}
                    resetBy={'number'}
                />
            </View>
        </ScrollView>
    );
};

export default AscvdScreen;
