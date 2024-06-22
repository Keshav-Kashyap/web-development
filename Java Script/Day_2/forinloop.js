let x={
name:"keshav",
age:18,
course: "Mca",
};
for (const key in x) {
    if (Object.hasOwnProperty.call(object, key)) {
        console.log(x[key]);
        
    }
}