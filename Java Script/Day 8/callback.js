// function greet(name,cb){
//     console.log(`Hello ${name}!!`);
//     cb();
// }
// function newgreet(){
//     console.log(`i am new `);

// }
// greet("keshav", newgreet);
const calculate = (a,b,opr) =>{
return opr(a,b);
}
const add = (a,b) =>{
    console.log(`Add: ${a+b}`);

}
const sub = (a,b) =>{
    console.log(`sub: ${a-b}`);

}
const mul = (a,b) =>{
    console.log(`mul: ${a*b}`);

}
const div = (a,b) =>{
    console.log(`div: ${a/b}`);

}
let req=prompt();
if(req=="add") calculate(2,3,add);
else if (req=="mul")calculate(2,3,mul);
else if (req=="sub")calculate(2,3,sub);
else if (req=="div")calculate(2,3,div);
else console.log("Please Enter Currect spelling");