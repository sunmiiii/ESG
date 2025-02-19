var question = document.getElementById('question');
var result = document.getElementById('result');
var answer_form = document.getElementById('answer_form');
var answer = document.getElementById('answer');
var remainedChance = document.getElementById('remainedChance');
var number_candidate;
var number_picked;
var wrongAnswerNumbers = 0;

function random_number() {
    number_candidate = [1,2,3,4,5,6,7,8,9];
    number_picked = [];
    for (var i = 0; i < 4; i += 1) {
        var picked = number_candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        number_picked.push(picked);
    }
}

random_number();

console.log(number_picked); // 뽑힌 4자리 숫자 확인용

answer.maxLength = 4;
answer.focus();
remainedChance.innerHTML = 10;

answer_form.addEventListener('submit', function(event) {
    event.preventDefault();
    question.textContent = '';
    if (answer.value === number_picked.join('')) { // 정답을 맞췄을 경우
        result.textContent = 'Home run!'
        answer.value = '';
        answer.focus();
        random_number();
        console.log(number_picked);
        wrongAnswerNumbers = 0;
        remainedChance.innerHTML = 10;
    } else {
        var answer_array = answer.value.split('');
        var strike = 0;
        var ball = 0;
        wrongAnswerNumbers += 1;
        remainedChance.innerHTML -= 1; 
        if (wrongAnswerNumbers > 10) { // 10번 넘게 틀린 경우
            result.textContent = 'You missed 10 chances! The answer was ' + number_picked.join('');
            answer.value = '';
            answer.focus();
            random_number();
            console.log(number_picked); // 새 문제 확인용
            wrongAnswerNumbers = 0;
            remainChance.innerHTML = 10;
        } else { // 10번 미만으로 틀린 경우
            for (var i = 0; i < 4; i += 1) {
                if (Number(answer_array[i]) === number_picked[i]) {
                    strike += 1;
                } else if (number_picked.indexOf(Number(answer_array[i])) > -1) {
                    ball += 1;
                }
            }
            result.textContent = strike + ' strike ' + ball + ' ball ';
            answer.value = '';
            answer.focus();
        }
        console.log(number_picked); // 새 문제 확인용
    }
});