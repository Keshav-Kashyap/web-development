let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let add=document.getElementById("a");
let sub=document.getElementById("s");
let div=document.getElementById("d");
let mul=document.getElementById("m");
let answer=document.getElementById("ans");

function fun_add(){
    let result=parseInt(num1.value)+parseInt(num2.value);
    answer.innerText=result;
}
add.onclick=fun_add;
