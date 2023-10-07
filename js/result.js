const title = document.getElementById('result-title');
const per = document.getElementById('result-per');
const img = document.getElementById('result-img');
const restartButton = document.getElementById('restart-button');

const score = new URL(location.href).searchParams.get('score');
let result = 0;
let strings = '너 극 T야,너 T맞아,너 T이긴 해,너 T아냐'.split(',');

if (score >= 90) {
    result = 0;
} else if (score >= 70) {
    result = 1;
} else if (score >= 40) {
    result = 2;
} else {
    result = 3;
}
console.log(result);
title.innerHTML = '"' + strings[result] + '"';
per.innerHTML = String(parseInt(score) + Math.ceil(Math.random() * 9)) + "% T입니다.";
img.src = `./image/${result}.png`;
 
restartButton.onclick = () => {
    window.open('../index.html', '_top');
};

const bgm = new Audio('../audio/bgm.mp3');
bgm.autoloop = false;

window.onload = () => {
    const sound = new Audio(`../audio/result/${result}.mp3`);
    bgm.play();
    sound.play();   
};