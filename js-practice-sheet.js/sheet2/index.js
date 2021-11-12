const main = document.querySelector("main")

// Factory function 
// function that manufacture/create function

// closure
// functions inside a funcion 

// Higher order functions are functions that take in another function
// or retutn another function

function headingFactory(colour) {
    const closure = function(text) {
        const heading = document.createElement("h1")
        heading.setAttribute('style', 'color: ' + colour)
        heading.textContent = text;
        return heading
    }  
    return closure
}

const createRedHeading = headingFactory("red")
const createGreyHeading = headingFactory("grey")

const head1 = createRedHeading("Hey there")
const heading2 = createGreyHeading("Hey there how is it going?")

main.appendChild(head1)
main.appendChild(heading2)

// Callback function - a function that is passed to another function

window.addEventListener("click", function (event){

});
function shopping(budget, afterShoppingCallback) {
    const spent = 100
    budget = budget - spent
    budget = afterShoppingCallback(budget)
    return budget
}
const leftOver = shopping(1000, function(budget){
    console.log("Watch a movie", budget);
    console.log("Watch a movie");
    budget = budget - 30
    return budget
})
console.log(leftOver );

// Promise
// resolve - a function to call when the promise is successful
// reject - a function to call when the promise has failed
const buyIceCream = function (amount = 5) {
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            if(amount < 3) {
                reject("Not enough money")
            } else {
                resolve("An Ice cream!")
            }
        })
    })
}
buyIceCream(2)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

// More elegent way to write a Promise

const buyIceCream2 = async function(amount = 5) {
    if(amount < 3) {
        throw new error("Not enough money")
    } else {
        return "An Ice cream"
    }
}
buyIceCream2(23)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
// Using a wait 
async function main1() {
    console.log("hey")
    const iceCream = await buyIceCream2(1)
    console.log(iceCream);
    console.log("there");
}
            
       