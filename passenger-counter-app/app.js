// document.getElementById("count-el").textContent = 5;

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked; the easiers way is defining in the html
// change the count-el in the HTML to releflect the new count

// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el");

// let count = 0;


// function increment() {
//     count += 1;
//     console.log(countEl.textContent = count);
//      return countEl.textContent = count;
// } 
// console.log(increment());
// console.log(count);

// function save() {
//     let saveCount = ` ${count} -`
//     saveEl.textContent += saveCount;
//     countEl.textContent = 0
//     count = 0;
//     // saveCount = 0;
    
// }
// console.log(save());


let count = 0;

let countEl = document.getElementById('count-el')
let incrementBtn = document.getElementById("increment-btn")
let saveEl = document.getElementById("save-el")
let saveBtn = document.getElementById("save-btn")
incrementBtn.addEventListener('click', () => {
    count++
  countEl.textContent =  count;
})

saveBtn.addEventListener("click", () => {
    saveEl.textContent += ` ${count} -`
    count = 0;
    countEl.textContent = 0;
    
})

