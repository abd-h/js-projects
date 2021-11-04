// Practising if / else statement

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 21;
if (age <= 20) {
    console.log(`Sorry, you're under the age of 21, so can't come in`);
} else {
    console.log(`Welcome!`);
}

// Check if the person is elegible for a birthday card from the king!. They get one if they're 100 years old.

let ageTest = 100;
function age100() {
    if(ageTest < 100) {
        return `Sorry you're not elegible`;
    } else if(ageTest === 100) {
        return `Here is your birthday card from the king`
    } else {
        return `Not elegible, you've gotten one`
    }
}
console.log(age100());
/*:::::::::::::::::::::::::::::::::::::::::::::*/
// Arrays practice
let describeYourSelf = [
    "Joseph", 
    45, 
    {"Likes Pizz": false}
]

// Push the new message array, and then log out  the array

let messages = [
    "Hey, how is it going!",
    "I'm great thank you?",
    "All good, thank you",
    "I've been working on my portifolio"
]

let message = "Same here!" 
messages.push(message)
console.log(messages);
messages.pop(message)
console.log(messages);

// For loops
 for (let i = 2; i < 11; i++){
     console.log(i);
 }

messages.push(message)

for (let i = 0; i < messages.length; i++) {
  
    console.log(messages[i]);
}

let sentence = ['Hello', 'my', 'name', 'is', 'Jason']
    greetingEl = document.querySelector("#greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += `${sentence[i]} `;
}   

// Returning values in functions

let player1Time = 102,
    player2Time = 101;
 
function fasterstPlayerTime() {
        if(player1Time < player2Time) {
            return `Player 1 is the winner`
        } else if(player1Time === player2Time){
            return "Its a draw";
        } else {
            return `Player 2 is a winner`    
        }
    }  
    let fasterstime = fasterstPlayerTime()
    console.log(fasterstime);  

    function getTotalRaceTime() {
        return player1Time + player2Time
    }
    let totalTime = getTotalRaceTime();
    console.log(totalTime);

    console.log();

    function rollDice() {
        let MathFloored = Math.floor(Math.random()  * 6) + 1 
        return MathFloored
    }
    console.log(rollDice());

    // Logical operators

    let hasCompletedCourse = true,
        givesCertificate = true;

        if(hasCompletedCourse&& givesCertificate) {
            generatecertificate();
        }

        function generatecertificate() {
            console.log('Generating certificate....');
        }
     
   let hasSolvedChallenge = false,
        hasHintsLeft = false;
    if(!hasSolvedChallenge && !hasHintsLeft){
            showSolution();
    }         

   function showSolution() {
       console.log("Show solution....");
   } 

   let likesDocumenteries = false,
        likesStartUps = false;

        if(!likesDocumenteries || likesStartUps) recomendMovie();
    
    function recomendMovie() {
        console.log("Hey check out this new movie we think you might like");
    }    
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* Objects - store data in depth - composite / complex data type
known as key value pairs; 
*/
 
let course = {
    title: "Learn CSS Grid for free",
    lesson: 16,
    creator: "Norris Blake",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}
console.log(course.tags[1]);

// Objects and Functions 
let person = {
    name: "James Whittiker",
    age: 43,
    county: "Middlesex"
};
 
function logData() {
    return `${person.name} is ${person.age} years old and lives in ${person.county}`
}
console.log(logData());

let ageGroup = 77;
function trainTicket() {
   return (ageGroup <= 6)? `Free`
             :(ageGroup > 6 && ageGroup <= 17 )? `Child discount`
             :(ageGroup >= 18 && ageGroup <= 26)? `Student discount` 
             :(ageGroup >= 27 && ageGroup < 66)?  `Full Price`
             :`Senior Citizen`
}
console.log(trainTicket());

//   For loop
let largeCountries = ['China', 'India', 'USA', 'Iindonesia', 'Pakistan']

    for (let i =0; i < largeCountries.length; i++) {
        console.log(`- ${largeCountries[i]}`)
    }

// Create a function that returns a random from the array below.
let hands = ['rock', 'paper', 'Scissor'];
function randomHands() {
    let hand = Math.floor(Math.random() * hands.length)
    
    return hands[hand];
}    
console.log(randomHands());

// Create a function that apples into an apple shelf and the oranges into an orange shelf.

// Use a for loop, a conditional statement and  a textContant property

let fruit  = ["🍊", "🍏", "🍊", "🍊", "🍏"],
    appleShelf = document.querySelector(".apple-shelf"),
    orangeShelf = document.querySelector(".orange-shelf")

function shelfs(){
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍊") {
            orangeShelf.textContent += fruit[i]
        }
        else {
            appleShelf.textContent += fruit[i] 
        }
    }
}    
console.log(shelfs());

