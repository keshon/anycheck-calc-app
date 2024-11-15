import { Questions } from "./domain";

const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "How often do you have a drink containing alcohol?",
            options: [
                { label: "Never", value: 0 },
                { label: "Monthly or less", value: 1 },
                { label: "2-4 times a month", value: 2 },
                { label: "2-3 times a week", value: 3 },
                { label: "4 or more times a week", value: 4 },
            ],
        },
        {
            name: "q2",
            text: "How many standard drinks containing alcohol do you have on a typical day when you are drinking?",
            options: [
                { label: "1 or 2", value: 0 },
                { label: "3 or 4", value: 1 },
                { label: "5 or 6", value: 2 },
                { label: "7, 8, or 9", value: 3 },
                { label: "10 or more", value: 4 },
            ],
        },
        {
            name: "q3",
            text: "How often do you have six or more alcoholic drinks on one occasion?",
            options: [
                { label: "Never", value: 0 },
                { label: "Less than monthly", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Weekly", value: 3 },
                { label: "Daily or almost daily", value: 4 },
            ],
        },
        {
            name: "q4",
            text: "How often during the last year have you found that you were not able to stop drinking once you had started?",
            options: [
                { label: "Never", value: 0 },
                { label: "Less than monthly", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Weekly", value: 3 },
                { label: "Daily or almost daily", value: 4 },
            ],
        },
        {
            name: "q5",
            text: "How often during the last year have you failed to do what was normally expected of you because of drinking?",
            options: [
                { label: "Never", value: 0 },
                { label: "Less than monthly", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Weekly", value: 3 },
                { label: "Daily or almost daily", value: 4 },
            ],
        },
        {
            name: "q6",
            text: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
            options: [
                { label: "Never", value: 0 },
                { label: "Less than monthly", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Weekly", value: 3 },
                { label: "Daily or almost daily", value: 4 },
            ],
        },
        {
            name: "q7",
            text: "How often during the last year have you had a feeling of guilt or remorse after drinking?",
            options: [
                { label: "Never", value: 0 },
                { label: "Less than monthly", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Weekly", value: 3 },
                { label: "Daily or almost daily", value: 4 },
            ],
        },
        {
            name: "q8",
            text: "Has a relative, friend, doctor, or other healthcare worker been concerned about your drinking or suggested you cut down?",
            options: [
                { label: "No", value: 0 },
                { label: "Yes, but not in the last year", value: 2 },
                { label: "Yes, in the last year", value: 4 },
            ],
        },
        {
            name: "q9",
            text: "Have you or someone else been injured as a result of your drinking?",
            options: [
                { label: "No", value: 0 },
                { label: "Yes, but not in the last year", value: 2 },
                { label: "Yes, in the last year", value: 4 },
            ],
        },
        {
            name: "q10",
            text: "How often during the last year have you failed to do what was normally expected of you because of drinking?",
            options: [
                { label: "Never", value: 0 },
                { label: "Less than monthly", value: 1 },
                { label: "Monthly", value: 2 },
                { label: "Weekly", value: 3 },
                { label: "Daily or almost daily", value: 4 },
            ],
        },
    ],
    ru: [
        {
            name: "q1",
            text: "Как часто вы выпиваете порцию напитка, содержащего алкоголь?",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Раз в месяц или реже", value: 1 },
                { label: "2-4 раза в месяц", value: 2 },
                { label: "2-3 раза в неделю", value: 3 },
                { label: "4 или более раз в неделю", value: 4 },
            ],
        },
        {
            name: "q2",
            text: "Сколько стандартных порций напитков, содержащих алкоголь, вы выпиваете в типичный день, когда пьёте?",
            options: [
                { label: "1 или 2", value: 0 },
                { label: "3 или 4", value: 1 },
                { label: "5 или 6", value: 2 },
                { label: "7, 8 или 9", value: 3 },
                { label: "10 или более", value: 4 },
            ],
        },
        {
            name: "q3",
            text: "Как часто вы употребляете шесть и более алкогольных напитков за один раз?",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Реже одного раза в месяц", value: 1 },
                { label: "Ежемесячно", value: 2 },
                { label: "Еженедельно", value: 3 },
                { label: "Почти ежедневно или ежедневно", value: 4 },
            ],
        },
        {
            name: "q4",
            text: "Как часто за последний год вы не могли прекратить употребление алкоголя после того, как начали?",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Реже одного раза в месяц", value: 1 },
                { label: "Ежемесячно", value: 2 },
                { label: "Еженедельно", value: 3 },
                { label: "Почти ежедневно или ежедневно", value: 4 },
            ],
        },
        {
            name: "q5",
            text: "Как часто за последний год из-за употребления алкоголя вы не делали чего-то, чего от вас ожидали?",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Реже одного раза в месяц", value: 1 },
                { label: "Ежемесячно", value: 2 },
                { label: "Еженедельно", value: 3 },
                { label: "Ежедневно или почти ежедневно", value: 4 },
            ],
        },
        {
            name: "q6",
            text: "Как часто за последний год вы нуждались в алкогольном напитке утром, чтобы преодолеть похмелье?",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Реже одного раза в месяц", value: 1 },
                { label: "Ежемесячно", value: 2 },
                { label: "Еженедельно", value: 3 },
                { label: "Ежедневно или почти ежедневно", value: 4 },
            ],
        },
        {
            name: "q7",
            text: "Как часто за последний год у вас было чувство вины или сожаления после употребления алкоголя?",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Реже одного раза в месяц", value: 1 },
                { label: "Ежемесячно", value: 2 },
                { label: "Еженедельно", value: 3 },
                { label: "Ежедневно или почти ежедневно", value: 4 },
            ],
        },
        {
            name: "q8",
            text: "Было ли так, что близкий человек, друг, врач или кто-то другой беспокоился об употреблении вами алкоголя либо советовал его сократить?",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да, но не в последний год", value: 2 },
                { label: "Да, в последний год", value: 4 },
            ],
        },
        {
            name: "q9",
            text: "Вы сами или кто-кто другой получил травмы в результате употребления вами алкоголя?",
            options: [
                { label: "Нет", value: 0 },
                { label: "Да, но не в последний год", value: 2 },
                { label: "Да, в последний год", value: 4 },
            ],
        },
        {
            name: "q10",
            text: "Как часто за последний год вы не могли вспомнить, что было накануне вечером, из-за того, что выпивали?",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Реже одного раза в месяц", value: 1 },
                { label: "Ежемесячно", value: 2 },
                { label: "Еженедельно", value: 3 },
                { label: "Ежедневно или практически каждый день", value: 4 },
            ],
        },
    ],
};

export default questions;
