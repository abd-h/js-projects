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