const Student={
    name:"keshav",
    marks:95,
    pro:this,// global scope
    getName: function () {
        console.log(this);
        return this.name;// keshav

    },
    getMarks: () => {
        console.log(this);// parent's Scope -> Window
        return this.marks;//  Undefined, since `this` is inherited from the global scope
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this);// student
        }, 2000);
    },
    getInfo2: function (){
        setTimeout( function() {
            console.log(this);// Window
        }, 2000);
    }

};


Student.getName();
// console.log(Student.getName());
Student.getMarks();
// console.log(Student.getMarks());
Student.getInfo1();
Student.getInfo2();