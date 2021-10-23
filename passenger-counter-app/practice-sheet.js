let lap1 = 34,
    lap2 = 33,
    lap3 = 36;

// create a function that logs out the sum of all the lap times.
function totalLaps() {
    let lapTime = lap1 + (lap2   + lap3);
    return lapTime;
}    
console.log(totalLaps());

let lapsCompleted = 0;

// ctreate a function that increments the lapsCompleted variable with one
// Then run three times
function lapsComplete() {
    lapsCompleted++
    let result = lapsCompleted;
    return result
}
console.log(lapsComplete());
console.log(lapsComplete());
console.log(lapsComplete());

// strings
const userName = 'Perie'
const message = "You have three notifications"; 
console.log(userName.concat(' ', message
));

const messageToUser = `${userName} ${message}`;
console.log(messageToUser);

// logging greeting to the console 
const name = `Bond`;
const greeting = `Hello, my name is`;
const myGreeting = `${greeting} ${name}  `
console.log(myGreeting);

const firstName = `Christiano`, 
         lastName = `Ronaldo`;

const fullName =`${firstName} ${lastName}`;
console.log(fullName);       

// Create a function that logs out Hi there Lider;
let anyName = `Malinder`;
let great  = `Hi there`;

function grt() {
    let greating = ` ${great}, ${anyName}!`;
    return greating;
}
console.log(grt());

