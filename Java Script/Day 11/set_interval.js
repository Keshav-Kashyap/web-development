console.log("hey there");
 let id=setInterval(()=>{
    console.log("keshav");
3
},2000);

setTimeout(()=>{
    clearInterval(id);
},5000);
