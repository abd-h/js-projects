let num1 = 8,
    num2 = 2;

document.querySelector(".num1-el").textContent = num1;
document.querySelector(".num2-el").textContent = num2;
let sumEl = document.querySelector(".sum-el")
console.log(sumEl);

// Add
let addEl = document.querySelector(".add-el");
console.log(addEl);
addEl.addEventListener("click", () => {
    let result = num1 + num2;
    return sumEl.textContent = 'Sum:' + result;
})

// Subtract
let subtractEl = document.querySelector('.subtract-el')

subtractEl.addEventListener("click", () =>{
    let result = num1 - num2;
    return sumEl.textContent = 'Sum:' + result;
})

// Divide
let divideEl = document.querySelector(".divide-el");
divideEl.addEventListener("click", () => {
    let result = num1 / num2;
    return sumEl.textContent = 'Sum:' + result;
})

// Multipy
let multiplyEl = document.querySelector(".multiply-el");
multiplyEl.addEventListener("click", () => {
    let result = num1 * num2;
    sumEl.textContent = 'Sum:' + result;
  
})
