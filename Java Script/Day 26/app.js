let url= "http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let inp=document.querySelector('input');
let p=document.querySelector("#result");
let select =document.querySelector("#select");
let selectState=document.querySelector("#select-state");



btn.addEventListener("click", async()=>{
    let country=inp.value;
    console.log(country);
 let colArr = await getColleges(country);
 show(colArr)
});
select.addEventListener("click", ()=>{
    setCountry();
})
selectState.addEventListener("click", ()=>{
    setState();
})
function show(colArr){
    let list=document.querySelector("#list");
    list.innerText = "";
for(col of colArr){
    console.log(col.name);

   

    let li=document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);
}

}


async function getColleges(country) {
    try{
      
       let res= await axios.get(url+country);
      return res.data;
    }catch(e){
        console.log(e);
        return [];
    }
    
}
async function setCountry(){
try{

    let res= await axios.get("https://restcountries.com/v3.1/all");
    let countries = res.data;
    console.log(countries);
  
    countries.sort((a,b)=>a.name.common.localeCompare(b.name.common));
    
    countries.forEach(country => {
        let option =document.createElement("option");
        option.value=country.name.common;
        option.innerText=country.name.common;

        select.appendChild(option);
    });
    
}catch(err){
    console.log(err);
}

}
async function setState(){
    let country=document.querySelector("#select").value;
    // console.log(country);
    selectState.innerHTML = "";

    if(!country) return;
    try{

        let res= await axios.post("https://countriesnow.space/api/v0.1/countries/states", {  
        
        
            country:country
        });
        let states=res.data.data.states;
      
        states.forEach(state=>{
            let option =document.createElement("option");
            option.value=state.name;
            option.textContent=state.name;
            
            selectState.appendChild(option);
        });
    }catch(e){
        console.log(e);
    }
}