const people = [
    { name: "Alice", age: 25, city: "New York", profession: "Engineer" },
    { name: "Bob", age: 34, city: "Los Angeles", profession: "Designer" },
    { name: "Charlie", age: 29, city: "Chicago", profession: "Teacher" },
    { name: "David", age: 42, city: "New York", profession: "Doctor" },
    { name: "Eva", age: 30, city: "Los Angeles", profession: "Engineer" },
    { name: "Frank", age: 36, city: "New York", profession: "Designer" },
    { name: "Grace", age: 27, city: "Chicago", profession: "Engineer" },
];

// let user = people.filter(data => {

//     return data.profession === "Designer" && data.city ==="New York";
// });


// let user = people.filter(data => {

//     return data.name.startsWith('D') || data.city ==="Chicago";
// });
let user = people.filter(data => {

    return data.profession !== "Engineer"
});
console.log(user);