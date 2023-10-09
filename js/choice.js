let qList = [
    "친구가 이유 없이 욕을 먹었다고 한다면?",
    "친구가 옷을 샀다고 신나서 보여주는데<br>너무 안 어울린다면?",
    "급식이 맛있는 날이라면?",
    "쉬는 시간이 5분 남았을 때, 친구가 배가 아프다고 보건실에 같이 가달라고 한다면?",
    "친구가 \"보고싶어 빨리 와\"라고 한다면?",
    "친한 친구가 \"하늘에 별을 따다 줄게\"<br>라고 한다면?",
    "친한 친구가 \"평생 친구하자\"라고 한다면?",
    "친구가 “나 스트레스 받아.. 놀러가자”라고 한다면?",
    "생일 때, 친구가 쓸데없는 선물을 줬다면?"
];

let cList = [
    [
        "누가 그랬어? 걔 지금 어디있어?",
        "미친 거 아니야? 같이 열심히 욕해준다."
    ],
    [
        "안 어울린다고 솔직히 말한다.",
        "친구가 상처받을까 봐 잘 어울린다고 해준다."
    ],
    [
        "친구를 두고 먼저 뛰어간다.",
        "친구를 기다렸다가 같이 간다."
    ],
    [
        "많이 아프냐고 물어보고 얼른 같이 가자고 한다.",
        "쉬는 시간 얼마 안 남았으니까 빨리 다녀오자고 한다."
    ],
    [
        "좀만 참아 ㅋㅋ",
        "얼른 갈게!"
    ],
    [
        "별은 따고 붙이는게 아니야",
        "나중에 나도 따다 줄게 ㅋㅋㅋㅋ"
    ],
    [
        "헉 진짜?? 감동이야!!!",
        "영원한건 없어"
    ],
    [
        "왜 또 무슨일이야ㅠㅠ",
        "어디갈건데?"
    ],
    [
        "고마워! 잘 쓸게...!",
        "고마워. 근데 다음에는 이런 선물 안 줬으면 좋겠어"
    ]
];

let isT = [
    0, 0, 0, 1, 0, 0, 1, 1, 0
];

let index = 0;
let score = 0;

const tBgmList = [
    new Audio('../audio/click/T 유진.mp3'),
    new Audio('../audio/click/T 다율.mp3'),
    new Audio('../audio/click/T 주영.mp3'),
];

const fBgmList = [
    new Audio('../audio/click/F 유진.mp3'),
    new Audio('../audio/click/F 다율.mp3'),
    new Audio('../audio/click/F 주영.mp3'),
];

const indexLable = document.getElementById('index');
const qContainer = document.getElementById('q-container');
const qDiv = document.getElementById('q-div');
const cContainer = document.getElementById('c-container');
const cDiv = document.getElementsByClassName('c-div');

indexLable.innerHTML = (index + 1) + ' / 10'
qDiv.innerHTML = qList[index];
cDiv[0].innerHTML = cList[index][0];
cDiv[1].innerHTML = cList[index][1];

function shuffle(array) {
    return array.sort(()=> Math.random() - 0.5);
}

cDiv[0].onclick = () => {
    index++;
    if (isT[index] === 0) {
        score += 10;
        shuffle(tBgmList)[0].play();
    } else {
        shuffle(fBgmList)[1].play();
    }
    if (index === cList.length) {
        window.open(`result.html?score=${score}`, '_top');
    } else {
        next();
    }
};

cDiv[1].onclick = () => {
    index++;
    if (isT[index] === 1) {
        score += 10;
        shuffle(tBgmList)[0].play();

    } else {
        shuffle(fBgmList)[1].play();
    }

    if (index === cList.length) {
        window.open(`result.html?score=${score}`, '_top');
    } else {
        next();
    }
    
};

function next() {
    indexLable.innerHTML = (index + 1) + ' / 10'
    qDiv.innerHTML = qList[index];
    cDiv[0].innerHTML = cList[index][0];
    cDiv[1].innerHTML = cList[index][1];

    console.log(score);
    indexLable.innerHTML = (index + 1) + ' / 10'
    cContainer.style.display = 'none';
    cDiv[0].style.display = 'none';
    cDiv[1].style.display = 'none';

    setTimeout(() => {
        cContainer.style.display = 'flex';
        cDiv[0].style.display = 'flex';
        cDiv[1].style.display = 'flex';
    }, 3000);
};

next();

const bgm = new Audio('../audio/bgm.mp3');
bgm.autoloop = false;
window.onload = () => {
    bgm.play();
};
