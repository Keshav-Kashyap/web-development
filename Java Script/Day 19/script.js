let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]
let started = false;
let level = 0;
let hilevel=0;
let h2 = document.querySelector('h2');

let stBtn=document.querySelector(".start");


function startGame() {

    if (started == false) {
       
        started = true;
        cheakfirst();
        levelUp();
    }   


}

// document.addEventListener("keypress", startGame);
stBtn.addEventListener("click",startGame);

function gameFlash(btn) {

    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);






}
function userFlash(btn) {

    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);






}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random button
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function cheakfirst(){
    if(started==false){
    h2.style.color="red"
    }
    else {
        h2.style.color="black";
    }
    
}

function cheakAns(idx) {

    if(started==false){
        cheakfirst();
        return;
    }

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
           
        setTimeout(levelUp, 1000);

        }


    } else {
if(hilevel<=level){
hilevel=level;
}
stBtn.innerText="Re Start"        
h2.innerHTML = `Game Over ! Your Score Was <b>${level} </b> <br> Press Start Button to start <br> Highest Score ${hilevel}`;
    document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white ";
        }, 150)
        reset();
    }


}

function btnPress() {
if(!started) return;

    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    cheakAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {

    btn.addEventListener("click", btnPress)


}

function reset() {
    started = false;
    stBtn.innerText = "Start";
    gameSeq = [];
    userSeq = [];
    level = 0;

}