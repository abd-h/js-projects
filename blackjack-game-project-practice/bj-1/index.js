/*Blackjack Psudocode
1. Object needs to be created that contains player name and chips
2. Declare variables for 
        cards and set it to empty array
        sums and set it to zero
        hasblackjack and set to false
        isAlive and set it to false
        message and set it to empty string

        // To render 
    Declare variables for:
        messageEl 
        cardsEl
        startEl
        newCardEl
        playerEl    

        // Game Rule
        cards must be between 1 and 13
        if card is greater than 10 just display 10
        else if card number is eqeal to 1 display 11

        // To Win
        cards need to be displayed (use cardsEl) two cards first and then 
        if sum is less than 21 then you can have another go by clicking the new card button
        else if sum of cards is strickly eqeal to 21 then you won the game.
        else you lose the game

        // newcard function needs to be declared.
*/
let player = {
    name: "John Smith",
    chips: 2500,
    monatery: "$"
}

let cards = [],
    sum = 0,
    message = "",
    hasBlackJack = false,
    isAlive = false,
    messageEl = document.querySelector(".message-el"),
    cardsEl = document.querySelector(".cards-el"),
    sumEl = document.querySelector(".sum-el"),
    startEl = document.querySelector(".start-el"),
    newCardEl = document.querySelector(".new-card-el"),
    playerEl = document.querySelector(".player-el")

    playerEl.textContent = `${player.name}: ${player.monatery}${player.chips}`

    startEl.addEventListener("click", () => {
        startGame()
    })

    newCardEl.addEventListener("click", () => {
        newCard()
    })

    function getRandomCard() {
        let randomNumber = Math.floor(Math.random() * 13) +1
        if(randomNumber > 10) {
            return 10
        } else if(randomNumber === 1) {
            return 11
        } else {
            return randomNumber
        }
    }

    function startGame() {
        isAlive = true
        let firstCard = getRandomCard(),
            secondCard  = getRandomCard()
            cards = [firstCard, secondCard]
            sum = firstCard + secondCard
            renderGame()
    }

    function renderGame() {
        cardsEl.textContent = `Cards: `
        for(let i = 0; i < cards.length; i++) {
            cardsEl.textContent += `${cards[i]} `
        }
        sumEl.textContent = `Sum: ${sum}`
        if(sum <= 20) {
            isAlive = true
            hasBlackJack = false
            message = `You still in the game, do you want to draw another card`
        } else if(sum === 21) {
            isAlive = true
            hasBlackJack = truek
            message = `Congratulations you've won the game`
        } else {
            isAlive = false
            hasBlackJack = false
            message =  `GAME'S OVER`
        }
        messageEl.textContent = message
    }

    function newCard() {
        let thirdCard = getRandomCard()
        if(sum < 21) {
            cards.push(thirdCard)
            sum += thirdCard
            renderGame()
        }
    }




































/*
let player = {
    name: "Jack Norris",
    chips: 500
}
let cards = [],
    sum = 0,
    hasBlackJack = false,
    isAlive = false,
    message = "",
    messageEl = document.querySelector(".message-el"),
    cardsEl = document.querySelector(".cards-el"),
    sumEl = document.querySelector(".sum-el"),
    startEl = document.querySelector(".start-el"),
    newCardEl = document.querySelector(".new-card-el"),
    playerEl = document.querySelector(".player-el");

    playerEl.textContent = `${player.name}: $${player.chips}`

    startEl.addEventListener("click", () => {
        startGame()
    })

    newCardEl.addEventListener("click", () => {
        newCard()
    })

    function getRandomCard() {
        let randomNumber = Math.floor(Math.random() * 13) + 1
        if(randomNumber > 10) {
            return 10
        } else if(randomNumber === 1) {
            return 11
        } else {
            return randomNumber
        }
    }

    function startGame() {
        isAlive = true
        let firstCard = getRandomCard(),
            secondCard = getRandomCard();
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }

    function renderGame() {
        cardsEl.textContent = `Cards: `
        for(let i = 0; i < cards.length; i++) {
            cardsEl.textContent += `${cards[i]} `
        }
        sumEl.textContent = `Sum: ${sum}`
        if(sum <= 20) {
            hasBlackJack = false
            isAlive = true
            message = `You still in the game do you want to draw another card`;
        } else if(sum === 21){
            hasBlackJack = true
            isAlive = true
            messageEl = `Congratulations you've won the game`
        } else {
            isAlive = false
            hasBlackJack = false
            message = `GAME'S OVER`
        }
        messageEl.textContent = message
    }

    function newCard() {
        let thirdCard = getRandomCard()
        if(isAlive && !hasBlackJack) {
            sum += thirdCard
        cards.push(thirdCard)
        renderGame()
        }
    }
    
    */

