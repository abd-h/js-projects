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

    function getRandomCard() {
        return Math.floor(Math.random() * 13) + 1
    }

    function renderGame() {
        let firstCard = getRandomCard(),
            secondCard = getRandomCard()
            cards = [firstCard, secondCard]
            sum = `Sum: ${firstCard} ${secondCard}`
    }

