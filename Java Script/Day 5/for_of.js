// let arr=[1,2,44];
// for (const num of arr ) {
//     console.log("Element no : "+num);
    
// }
// let name="keshav";
// for (const char of name) {
//     console.log(char);
// }
let person={ name:"john",age:30};
for(let key in person){
    console.log(key+" :"+person[key]);
}