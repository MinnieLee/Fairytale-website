const images = ['Cd1', 'Cd2', 'Cd3', 'Cd4', 'Cd5'];
let cards = [...images, ...images]; // Duplicate each image for pairs
cards = cards.sort(() => Math.random() - 0.5); // Shuffle cards

const gameBoard = document.getElementById('game-board');

let flippedCards = [];
let matchedPairs = 0;

// Create card elements
cards.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = image;

    const cardImg = document.createElement('img');
    cardImg.src = `images/${image}.png`; // Replace with your image path
    card.appendChild(cardImg);

    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
});

function flipCard(card) {
    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.image === card2.dataset.image) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;

        if (matchedPairs === images.length) {
            setTimeout(() => alert('You won!'), 500);
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];
}
