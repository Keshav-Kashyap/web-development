// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1", dataId);
//             resolve("Success");
//         }, 2000);
//     });
// };
// console.log("Featching....");


// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {

//     return getData(3);

// }).then((res) => {
//     console.log(res);
// })
// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
// setTimeout(()=>
// {
//     h1.style.color=color;
//     resolve("color changed");

// },delay);
//     });
// }
// changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was  completed");
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange color was  completed");
//         return changeColor("yellow",1000);
//     })
//     .then(()=>{
//         console.log("Yellow color was  completed");
//         return changeColor("blue",1000);
//     })
//     .then(()=>{
//         console.log("blue color was  completed");
       
//     })

async function greet(){
    // abc.abc();
    // throw "some random error"
  return "hello";
}
greet()
.then((res)=>{
    console.log("Promise  was successful",res);
})
.cqatch((err)=>{
    console.log("Rejected with error",err);
}
)