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

6.  store button element on variable called startButton  
        1.Create render function and put inside this function startBtn and bind to addEventListener on click the function should execute the 
        2. if statement that checks cards should not exceed 21
        3. 

7.  Store the message-el paragraph in a variable called messageEl
8.  Display the message in messageEl using messageEl.textContent

9.   Store the sum-el paragraph in a variable called sumEl
10. render the sum on the page using this format; Sum: 21

11.   Store the cards-el paragraph in a variable called cardsEl
12. render the cards on the page using this format; Cards: 21

13. Declare newCard variable and addEventListenern 

14. Create startGame function and then evoke it.

15. Declare avariab call cards and should an array containing cards.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

let firstCard = Math.floor(Math.random() * 11) + 2,
     secondCard = Math.floor(Math.random() * 11) + 2,
     cards = [firstCard, secondCard],
     sum = firstCard + secondCard,
     hasBlackJack = false,
     isAlive = true,
     message = ""

let startBtn = document.querySelector("button"),
    messageEl = document.querySelector("#message-el"),
    sumEl = document.querySelector("#sum-el"),
    cardsEl = document.querySelector("#cards-el")
    newCard = document.querySelector(".new-card-el")
  
    function startGame() {
        return renderGame()
    }
function renderGame() {
  startBtn.addEventListener("click", () =>{
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
    sumEl.textContent =`Sum: ${sum}`;
   (sum < 21)? message = `You're still in the game, do you want to draw another card`
   :(sum === 21)? hasBlackJack = true? message = `Congratulatlion You are the winner`
   :isAlive = false:
    message = `Game is over`;
    messageEl.textContent = message
    console.log(hasBlackJack)
    console.log(isAlive)
})
}
renderGame()



newCard.addEventListener("click", () => {
    let thirdCard = Math.floor(Math.random() * 11) + 2;
    cardsEl.textContent = `Cards: ${thirdCard}`
    sum += thirdCard
    renderGame()
})


