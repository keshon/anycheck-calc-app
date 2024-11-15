import { Questions } from "./domain";

const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "Feeling nervous, anxious or on edge",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q2",
            text: "Not being able to stop or control worrying",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Worrying too much about different things",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q4",
            text: "Trouble relaxing",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q5",
            text: "Being so restless that it is hard to sit still",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q6",
            text: "Becoming easily annoyed or irritable",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q7",
            text: "Feeling afraid, as if something awful might happen",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
    ],
    ru: [
        {
            name: "q1",
            text: "Повышенная нервная возбудимость, беспокойство или раздражительность",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Больше половины дней", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q2",
            text: "Неспособность справиться с волнением",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Больше половины дней", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Чрезмерное беспокойство по разному поводу",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Больше половины дней", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q4",
            text: "Неспособность расслабляться",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Больше половины дней", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q5",
            text: "Крайняя степень беспокойства: «не могу найти себе места»",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Больше половины дней", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q6",
            text: "Легко поддаюсь чувству беспокойства или раздражительности.",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Больше половины дней", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q7",
            text: "Опасение чего-то страшного",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколькодней", value: 1 },
                { label: "Больше половины дней", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
    ],
};

export default questions;
