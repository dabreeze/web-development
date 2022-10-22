
const p1 = {
    score : 0,
    button : document.querySelector('#p1Btn'),
    display : document.querySelector('#p1ScoreSpan')

}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Btn'),
    display : document.querySelector('#p2ScoreSpan')

}

function updateScore(player, opponent) {

    if(!isGameOver){
        player.score += 1;
        if(player.score === winningNumber){
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('looser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }

}

const rsetbtn = document.querySelector('#reset');
const selectWining = document.querySelector('#playTo')

let winningNumber = 3;
let isGameOver = false;


p1.button.addEventListener('click', function(){
    updateScore(p1,p2);
})

p2.button.addEventListener('click', function(){
   updateScore(p2,p1);
})

selectWining.addEventListener('change', function() {
    winningNumber = parseInt(this.value);
    reset();
})

rsetbtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]) {
        p.score =0;
        p.display.textContent =0;
        p.display.classList.remove('winner','looser');
        p.button.disabled = false;
    }
}

