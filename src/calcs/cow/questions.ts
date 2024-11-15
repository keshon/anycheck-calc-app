import { Questions } from "./domain";

const questions: Questions = {
    en: [
        {
            name: "q1",
            text: "Resting Pulse Rate (BPM)",
            options: [
                { label: "≤80", value: 0 },
                { label: "81-100", value: 1 },
                { label: "101-120", value: 2 },
                { label: ">120", value: 4 },
            ],
        },
        {
            name: "q2",
            text: "Sweating",
            options: [
                { label: "No report of chills or flushing", value: 0 },
                { label: "Subjective report of chills or flushing", value: 1 },
                { label: "Flushed or observable moistness on face", value: 2 },
                { label: "Beads of sweat on brow or face", value: 3 },
                { label: "Sweat streaming off face", value: 4 },
            ],
        },
        {
            name: "q3",
            text: "Restlessness observation during assessment",
            options: [
                { label: "Able to sit still", value: 0 },
                {
                    label: "Reports difficulty sitting still, but is able to do so",
                    value: 1,
                },
                {
                    label: "Frequent shifting or extraneous movements of legs/arms",
                    value: 3,
                },
                {
                    label: "Unable to sit still for more than a few seconds",
                    value: 5,
                },
            ],
        },

        {
            name: "q4",
            text: "Pupil size",
            options: [
                {
                    label: "Pupils pinned or normal size for room light",
                    value: 0,
                },
                {
                    label: "Pupils possibly larger than normal for room light",
                    value: 1,
                },
                { label: "Pupils moderately dilated", value: 2 },
                {
                    label: "Pupils so dilated that only the rim of the iris is visible",
                    value: 5,
                },
            ],
        },
        {
            name: "q5",
            text: "Bone or joint aches",
            options: [
                { label: "Not present", value: 0 },
                { label: "Mild diffuse discomfort", value: 1 },
                {
                    label: "Patient reports severe diffuse aching of joints/ muscles",
                    value: 2,
                },
                {
                    label: "Patient is rubbing joints or muscles and is unable to sit still because of discomfort",
                    value: 4,
                },
            ],
        },
        {
            name: "q6",
            text: "Runny nose or tearing",
            options: [
                { label: "Not present", value: 0 },
                { label: "Nasal stuffiness or unusually moist eyes", value: 1 },
                { label: "Nose running or tearing", value: 2 },
                {
                    label: "Nose constantly running or tears streaming down cheeks",
                    value: 4,
                },
            ],
        },
        {
            name: "q7",
            text: "Gastrointestinal (GI) upset",
            options: [
                { label: "No GI symptoms", value: 0 },
                { label: "Stomach Cramps", value: 1 },
                { label: "Nausea or loose stool", value: 2 },
                { label: "Vomiting or diarrhea", value: 3 },
                {
                    label: "Multiple episodes of vomiting or diarrhea",
                    value: 5,
                },
            ],
        },
        {
            name: "q8",
            text: "Tremor observation of outstretched hands",
            options: [
                { label: "No tremor", value: 0 },
                { label: "Tremor can be felt, but not observed", value: 1 },
                { label: "Slight tremor observable", value: 2 },
                { label: "Gross tremor or muscle twitching", value: 4 },
            ],
        },
        {
            name: "q9",
            text: "Yawning observation during assessment",
            options: [
                { label: "No yawning", value: 0 },
                { label: "Yawning once or twice during assessment", value: 1 },
                {
                    label: "Yawning three or more times during assessment",
                    value: 2,
                },
                { label: "Yawning several times/minute", value: 4 },
            ],
        },
        {
            name: "q10",
            text: "Anxiety or irritability",
            options: [
                { label: "None", value: 0 },
                {
                    label: "Patient reports increasing irritability or anxiousness",
                    value: 1,
                },
                { label: "Patient obviously irritable/anxious", value: 2 },
                {
                    label: "Patient so irritable or anxious that participation in the assessment is difficult",
                    value: 4,
                },
            ],
        },
        {
            name: "q11",
            text: "Gooseflesh skin",
            options: [
                { label: "Skin is smooth", value: 0 },
                {
                    label: "Piloerection of skin can be felt or hairs standing up on arms",
                    value: 3,
                },
                { label: "Prominent piloerection", value: 5 },
            ],
        },
    ],
    ru: [
        {
            name: "q1",
            text: "Частота пульса в покое (ударов в минуту)",
            options: [
                { label: "≤80", value: 0 },
                { label: "81-100", value: 1 },
                { label: "101-120", value: 2 },
                { label: ">120", value: 4 },
            ],
        },
        {
            name: "q2",
            text: "Потоотделение",
            options: [
                {
                    label: "Отсутствует информация о ознобе или покраснении",
                    value: 0,
                },
                {
                    label: "Субъективные ощущения озноба или покраснения",
                    value: 1,
                },
                {
                    label: "Покраснение или наблюдаемая влажность лица",
                    value: 2,
                },
                { label: "Капли пота на лбу или лице", value: 3 },
                { label: "Пот стекает с лица", value: 4 },
            ],
        },
        {
            name: "q3",
            text: "Наблюдение за беспокойством во время оценки",
            options: [
                { label: "Может сидеть спокойно", value: 0 },
                {
                    label: "Сообщает о трудностях в сидении, но способен делать это",
                    value: 1,
                },
                {
                    label: "Часто меняет положение или делает лишние движения ногами/руками",
                    value: 3,
                },
                {
                    label: "Не может сидеть спокойно больше нескольких секунд",
                    value: 5,
                },
            ],
        },

        {
            name: "q4",
            text: "Размер зрачков",
            options: [
                {
                    label: "Зрачки сужены или нормального размера для освещения в помещении",
                    value: 0,
                },
                {
                    label: "Зрачки, возможно, больше, чем нормально для освещения в помещении",
                    value: 1,
                },
                { label: "Умеренное расширение зрачков", value: 2 },
                {
                    label: "Зрачки настолько расширены, что виден только ободок радужки",
                    value: 5,
                },
            ],
        },
        {
            name: "q5",
            text: "Боли в костях или суставах",
            options: [
                { label: "Отсутствуют", value: 0 },
                { label: "Легкое диффузное неприятное ощущение", value: 1 },
                {
                    label: "Пациент сообщает о сильных диффузных болях в суставах/мышцах",
                    value: 2,
                },
                {
                    label: "Пациент трется о суставы или мышцы и не может сидеть спокойно из-за дискомфорта",
                    value: 4,
                },
            ],
        },
        {
            name: "q6",
            text: "Насморк или слезотечение",
            options: [
                { label: "Отсутствует", value: 0 },
                {
                    label: "Заложенность носа или необычно влажные глаза",
                    value: 1,
                },
                { label: "Нос течет или глаза слезятся", value: 2 },
                {
                    label: "Нос постоянно текет или слезы стекают по щекам",
                    value: 4,
                },
            ],
        },
        {
            name: "q7",
            text: "Повреждение желудочно-кишечного тракта",
            options: [
                { label: "Нет симптомов желудочно-кишечного тракта", value: 0 },
                { label: "Боли в животе", value: 1 },
                { label: "Тошнота или расстроенный стул", value: 2 },
                { label: "Рвота или понос", value: 3 },
                {
                    label: "Многократные эпизоды рвоты или поноса",
                    value: 5,
                },
            ],
        },
        {
            name: "q8",
            text: "Наблюдение за дрожью вытянутых рук",
            options: [
                { label: "Отсутствует дрожь", value: 0 },
                { label: "Дрожь ощущается, но не наблюдается", value: 1 },
                { label: "Наблюдается слабая дрожь", value: 2 },
                {
                    label: "Грубая дрожь или судорожные движения мышц",
                    value: 4,
                },
            ],
        },
        {
            name: "q9",
            text: "Зевота во время оценки",
            options: [
                { label: "Нет зевоты", value: 0 },
                { label: "Зевота один или два раза во время оценки", value: 1 },
                {
                    label: "Зевота три или более раза во время оценки",
                    value: 2,
                },
                { label: "Зевота несколько раз в минуту", value: 4 },
            ],
        },
        {
            name: "q10",
            text: "Тревожность или раздражительность",
            options: [
                { label: "Отсутствует", value: 0 },
                {
                    label: "Пациент сообщает о нарастающей раздражительности или тревожности",
                    value: 1,
                },
                { label: "Пациент явно раздражителен/тревожен", value: 2 },
                {
                    label: "Пациент настолько раздражителен или тревожен, что участие в оценке затруднительно",
                    value: 4,
                },
            ],
        },
        {
            name: "q11",
            text: "Мурашки по коже",
            options: [
                { label: "Кожа гладкая", value: 0 },
                {
                    label: "Кожу можно потрогать, и волоски поднимаются на руках",
                    value: 3,
                },
                { label: "Заметное поднимание волосков", value: 5 },
            ],
        },
    ],
};

export default questions;
