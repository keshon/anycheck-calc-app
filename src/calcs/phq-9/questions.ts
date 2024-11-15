import { Questions } from "./domain";

export const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "Little interest or pleasure in doing things",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q2",
            text: "Feeling down, depressed, or hopeless",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Trouble falling or staying asleep, or sleeping too much",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q4",
            text: "Feeling tired or having little energy",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q5",
            text: "Poor appetite or overeating",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q6",
            text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q7",
            text: "Trouble concentrating on things, such as reading the newspaper or watching television",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q8",
            text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
            options: [
                { label: "Not at all", value: 0 },
                { label: "Several days", value: 1 },
                { label: "More than half the days", value: 2 },
                { label: "Nearly every day", value: 3 },
            ],
        },
        {
            name: "q9",
            text: "Thoughts that you would be better off dead, or of hurting yourself",
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
            text: "Вам не хотелось ничего делать",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q2",
            text: "У вас было плохое настроение, вы были подавлены или испытывали чувство безысходности",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q3",
            text: "Вам было трудно заснуть, у вас был прерывистый сон, или Вы слишком много спали",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q4",
            text: "Вы были утомлены, или у вас было мало сил",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q5",
            text: "У вас был плохой аппетит, или вы переедали",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q6",
            text: "Вы плохо о себе думали: считали себя неудачником(неудачницей), или были в себе разочарованы, или считали, что подвели свою семью",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q7",
            text: "Вам было трудно сосредоточиться (например, на чтении газеты или на просмотре телепередач)",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q8",
            text: "Вы двигались или говорили настолько медленно, что окружающие это замечали? Или, наоборот, вы были настолько суетливы или взбудоражены, что двигались гораздо больше обычного",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
        {
            name: "q9",
            text: "Вас посещали мысли о том, что Вам лучше было бы умереть, или о том, чтобы причинить себе какой-нибудь вред",
            options: [
                { label: "Никогда", value: 0 },
                { label: "Несколько дней", value: 1 },
                { label: "Более недели", value: 2 },
                { label: "Почти каждый день", value: 3 },
            ],
        },
    ],
};
