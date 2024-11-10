// function sum(...args){
// for(let i=0;i<args.length;i++){
//     console.log("you give us:", args[i]);
// }
// }
// sum(1,0,3,2);

function sum(...args){
    console.log( args.reduce((sum,ele) => sum+ele ));
    }
   sum(1,2,3,4);