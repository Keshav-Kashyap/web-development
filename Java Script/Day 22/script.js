// const getPromise=()=>{

//    return   new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("sucess");
//         reject("some error");
//     });

// };

// let  promise=getPromise();

// promise.then( (res)=>{
//      console.log("Promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("Promise Rejected",err);

// });



// function getData(dataId,getNextData){

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data:",dataId);
//             resolve("success");
//             if(getNextData) getNextData();
//         },5000);
//     });

// }

function asyncFunc(){
    return  new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("Success");
        },2000);
    });
};
console.log("Featching....");
let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
})