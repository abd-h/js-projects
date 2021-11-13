// let and const practice
// Setting the stage

const player = "Jack Norris"
const opponent = "John Clovandam"
const game =  "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game`);
} else {
    console.log(`the winner is ${opponent}! ${player} lost the game`);
}
 // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 // Log out items in an array

 let myCourses = ["Learn CSS Animation", "UI Design Fundementals", "Intro to Clean Code"]

 function itemsOfarray(arr) {
     arr.filter(a => console.log(a))
 }
 itemsOfarray(myCourses)
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Save to localStorage 

let myFavoriteMovie = "Scarface"
console.log(localStorage.getItem("myFavoriteMovie"));
//:::::::::::::::::::::::::::::::::::::::::::::::::::::

// addAventListener and object in an array

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const janesScoreButton = document.getElementById("janes-score-btn")
let data1 = document.getElementById("data")


janesScoreButton.addEventListener("click", () => {
    data1.textContent += `${data[0].player}'s Score ${data[0].score}`
})
//:::::::::::::::::::::::::::::::::::::::::::::::::::

// The genetateSentence(desc, arr) takes two parameter: a description and an array.

// It should return a string based upon the description and array

// Rcsmple 1: if you pass in "largest countries", and ["China", "India", "USA"]

// Example 2: If you pass in "best fruits and" and ["Apple", "Banana"], it should return: "The best fruits are Apple and Banana"

// Use both for loop and letiral string to solve the challenge

function genetateSentence(desc, arr) {
    let s= []
    for(let i = 0; i < arr.length; i++){
      s.push(` ${arr[i]}`)
    }
    return `The ${arr.length} ${desc} are${s}`
}

console.log(genetateSentence("best fruits", ["Apple", "Banana"]));

console.log(genetateSentence("largest countries",["China", "India", "USA"]));
//:::::::::::::::::::::::::::::::::::::::::::::::::::

// Render Images

// Create a function that renders the three team images

// Use a for loop, template string (``), plus equals (+=) 

// .innerHTML to solve the chellange.

const imgs = [
    `images/anthonymatial.jpeg`,
    `images/masongreenwood.jpeg`,
   `images/mrashford.jpeg`
]

const imgsContainer = document.getElementById("img-container")

function renderTeamImages(imgs){
    let teamImgs = '';
   for (let i = 0; i < imgs.length; i++) {
      teamImgs +=`<img src="${imgs[i]}" alt="Manchester United forward players">`
   }
   return imgsContainer.innerHTML = teamImgs
}
renderTeamImages(imgs)

//:::::::::::::::::   The End   :::::::::::::::::::
