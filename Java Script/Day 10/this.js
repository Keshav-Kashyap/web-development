const student ={
    name: "keshav",
    age:18,
    eng:95,
    math:59,
    phy:97,
   

}

function getAvg(){
    console.log(this);
    // let avg=(this.eng + this.math + this.phy)/3;
    // console.log(avg);
}
getAvg();