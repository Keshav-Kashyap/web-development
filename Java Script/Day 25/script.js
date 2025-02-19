// const h1 = document.querySelector("h1");

// function colorChange(color, delay) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 3) {
//                 reject("Promise Rejected");
//             }   
//             h1.style.color = color;
//             resolve("color Changed");
//         }, delay);
//     });

// };

// async function demo() {
//     try {
//         await colorChange("red", 1000);
//         await colorChange("blue", 1000);
//         await colorChange("pink", 1000);
//         await colorChange("yellow", 1000);
//     } catch (err) {
//         console.log("error Caught:", err);
//     }
// };



let jsonRes=

'{"fact":"The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high.","length":120}';

let validRes= JSON.parse(jsonRes);
console.log(validRes.fact);