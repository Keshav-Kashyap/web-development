const h1 = document.querySelector("h1");

function colorChange(color, delay) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise Rejected");
            }   
            h1.style.color = color;
            resolve("color Changed");
        }, delay);
    });

};

async function demo() {
    try {
        await colorChange("red", 1000);
        await colorChange("blue", 1000);
        await colorChange("pink", 1000);
        await colorChange("yellow", 1000);
    } catch (err) {
        console.log("error Caught:", err);
    }
};