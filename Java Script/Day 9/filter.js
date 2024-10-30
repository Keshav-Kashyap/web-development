
const Mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//From Fillter
const MyNewnums = Mynums.filter(
    (num) =>  {
       return num > 4;
    }
    
)
console.log(`This is Mynewnums: ${MyNewnums}`);

//From  forEach
const arr=[];
const nums=Mynums.forEach( (num)=>
{
    if(num>4){
        arr.push(num);
    }

})
console.log(`This is arr:  ${arr}`)