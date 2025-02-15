// function  first() {

//     console.log("first Function");

// }

// function second(){
//     console.log("Second Function");
// }

// first();
// second();
// console.log("End Of Js");


function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans=two()+one();
    console.log(ans);
}
three();
