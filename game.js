// 랜덤 숫자 만들기
let answerArr = [];
let num;
while (answerArr.length < 3) {
    num = Math.floor(Math.random() * 9);
    if (!answerArr.includes(num)) {
        answerArr.push(num);
    }
}
//console.log(answerArr);

console.log(`
===================숫자야구 게임===================
컴퓨터가 세자리 숫자를 생성하였습니다. 답을 맞춰보세요!
`);

// 콘솔창에 입력받기
let userCnt = 0;
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    userCnt++;
    console.log(userCnt, "번째 시도 : ", line);
    match(line);
});

// 스트라이크, 볼 판단
let strike = 0;
let ball = 0;
function match(userAnswer) {
    for (let i = 0; i < answerArr.length; i++) {
        if (answerArr[i] == Number(userAnswer[i])) {
            strike++;
        } else if (answerArr.includes(Number(userAnswer[i]))) {
            ball++;
        }
    }

    console.log(`${ball}B${strike}S`);

    if (strike == 3) {
        console.log(`${userCnt}번 만에 맟히셨습니다! 게임을 종료합니다!`)
        rl.close();
    } else {
        strike = 0;
        ball = 0;
    }
}
