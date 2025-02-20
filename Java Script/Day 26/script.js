// let url = "https://catfact.ninja/fact";
// let h1=document.querySelector('h1');
// let btn=document.querySelector('button');

// async function getFact(){

//     try{
//         let res= await fetch(url);
//         let data= await res.json();
//         h1.innerText=data.fact;
    
//     } catch(e){
//         h1.innerText=`Error: ${e}`;
//     }
  


// }

// btn.addEventListener("click", ()=>{
//     getFact();
// });
const url="https://catfact.ninja/fact";

async function getJokes(){
    try{
        const config = {headers:{Accept:"application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);

    } catch(err){
        console.log(err);
    }
}