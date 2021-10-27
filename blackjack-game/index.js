/*      Psudocode for blackjack game
 1.     Create two veriables, firstCard and secondCard.
        Set their values to a random number between 2 - 11

 2.     Create a variable, and set it to the sum of the two cards.

 3.     creat hasJlackJack variable to tract the state blackjack and 
        flip its value in the if statement
 4.   creat isAlive variable to tract the state playing and flip 
    its value in the if statement

5.  a) Declare a variable called message and assign it to 
empty string.  

6.  Declare called start  and bind to eventlistener

7.  Store the message-el paragraph in a variable called messageEl
8.  Display the message in messageEl using messageEl.textContent

9.   Store the sum-el paragraph in a variable called sumEl
10. render the sum on the page using this format;
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

let firstCard = 3,
     secondCard = 16,
     sum = firstCard + secondCard,
     hasBlackJack = false,
     isAlive = true,
     message = ""

let startBtn = document.querySelector("button"),
    messageEl = document.querySelector("#message-el"),
    sumEl = document.querySelector("#sum-el");
  

startBtn.addEventListener("click", () => {
    
    sumEl.textContent =`Sum: ${sum}`;
   (sum < 21)? message = `You're still in the game, do you want to draw another card`
   :(sum === 21)? hasBlackJack = true? message = `Congratulatlion You are the winner`
   :isAlive = false:
    message = `Game is over`;
    messageEl.textContent = message
    console.log(hasBlackJack)
    console.log(isAlive)
})



