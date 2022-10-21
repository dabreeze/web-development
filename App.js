

const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2Btn');
const p1Score = document.querySelector('#p1ScoreSpan');
const p2Score = document.querySelector('#p2ScoreSpan');
const rsetbtn = document.querySelector('#reset');
const selectWining = document.querySelector('#playTo')


let p1ScoreDisplay = 0;
let p2ScoreDisplay = 0;
let winningNumber = 3;
let isGameOver = false;


p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1ScoreDisplay += 1;
        if(p1ScoreDisplay === winningNumber){
            isGameOver = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('looser');
        }
        p1Score.textContent = p1ScoreDisplay;
    }
})

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2ScoreDisplay += 1;
        if(p2ScoreDisplay === winningNumber){
            isGameOver = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('looser');
        }
        p2Score.textContent = p2ScoreDisplay;
    }
})

selectWining.addEventListener('change', function() {
    winningNumber = parseInt(this.value);
    reset();
})

rsetbtn.addEventListener('click', reset)

function reset() {
    p1ScoreDisplay = 0;
    p2ScoreDisplay = 0;
    p1Score.textContent = p1ScoreDisplay;
    p2Score.textContent = p2ScoreDisplay;
    isGameOver = false;
    p2Score.classList.remove('winner','looser');
    p1Score.classList.remove('looser', 'winner');

}

