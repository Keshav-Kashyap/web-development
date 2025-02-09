// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
// alert("Button was cliked");

// }

// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick = sayhello;
//     // btn.onmouseenter=function () {
//     //     console.log("You Hover a button")
//     // }

//     btn.addEventListener("click",sayhello);
//     btn.addEventListener("click",hellokeshav);
// }

// function sayhello() {
//     alert("hello World");
// }
// function hellokeshav() {
//     alert("hello Keshav");
// }

let btn=document.querySelector('button');
let h1=document.querySelector('h1');
let h3=document.querySelector('h3');
let p=document.querySelector('p');


function changeColor(){
    if(this.style.backgroundColor ==="blue"){
        this.style.backgroundColor="white"
        this.style.color="black";

    }else{
        this.style.backgroundColor="Blue"
    this.style.color="White";
    }
}

btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
