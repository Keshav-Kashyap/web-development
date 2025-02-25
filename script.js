let boxes = document.querySelectorAll('.box');
let board = document.querySelector(".board");
let pieces = document.querySelectorAll(".piece");
let select;
let cheakDrag;


pieces.forEach((piece) => {
    piece.addEventListener("dragstart", (event) => {
        clickPiece(event.target);
    });

    piece.addEventListener("click", (e)=>{
        clickPiece(e.target);
        higlightBox( e.target.parentElement);
       
    })





});





function clickPiece(piece){
    cheakDrag = cheakMove(piece);
    select = piece;

}


function higlightBox(box){

if(box.classList.contains("higlight")){
    box.classList.remove("higlight");

}
else{
    box.classList.add("higlight");
}
}


function cheakMove(piece) {

    if (!piece) return null;
    let color = piece.getAttribute("src").split('-').pop().split('.')[0];
    if (color === "b") {
        return "black";
    } else if (color === "w") {
        return "white";
    }
    return null;
}


function MovePiece() {

}


boxes.forEach((box) => {

    box.addEventListener("dragover", (e2) => {
        e2.preventDefault();
    });
    box.addEventListener("drop", (e3) => {
        e3.preventDefault();

        let existingPiece = box.querySelector(".piece");
        if (existingPiece) {

            let existingColor = cheakMove(existingPiece);


            if (existingColor !== cheakDrag) {
                console.log("opposite Color ");
                box.innerHTML = "";
                box.appendChild(select);
            } else {
                console.log("same Color , Move Not allowed");
            }   
        } else {
            box.appendChild(select);
        }

    });

});


