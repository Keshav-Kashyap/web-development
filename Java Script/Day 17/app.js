let btn=document.querySelector("button");
console.dir(btn);

// btn.onclick = function () {
// alert("Button was cliked");

// }

function sayhello() {
    console.log("hello World");
}


btn.onclick = sayhello;