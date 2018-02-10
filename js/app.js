// Set variables

let moves = 0;

// Create a list that holds all 16 cards */

let typeOfCards = [
    "fa-diamond",
    "fa-diamond",
    "fa-paper-plane-o",
    "fa-paper-plane-o",
    "fa-anchor",
    "fa-anchor",
    "fa-boltfa-cube",
    "fa-boltfa-cube",
    "fa-leaf",
    "fa-leaf",
    "fa-bicycle",
    "fa-bicycle",
    "fa-bomb",
    "fa-bomb",
    "fa-bolt",
    "fa-bolt",
    "fa-cube",
    "fa-cube"
];

// Shuffle the list of cards //
// Shuffle function from http://stackoverflow.com/a/2450976 //

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

shuffle(typeOfCards);

// Select all i-tags inside the cards and add the typeOfCards as classes

const singleMotive = document.querySelectorAll('.card i');

for(let i = 0; i < singleMotive.length; i++){
  singleMotive[i].classList.add(shuffle(typeOfCards[i]));
}

// Set up the event listener for all cards

const singleCard = document.querySelectorAll('.card');

for(let i = 0; i < singleCard.length; i++){
  singleCard[i].addEventListener('click', function () {
    moves = [i]; // counts the moves the player needs to finish the game
    document.querySelector('span.moves').textContent = i++;
  });
}

// Display star rating
// one click on .card = one move
// 3 stars: 0 to 16 moves, 2 stars: 17 to 32 moves, 1 star: from 33 moves on

const displayRating = document.querySelector('ul.stars');

if (moves <= 16) {
    displayRating.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
} else if (moves < 33) {
    displayRating.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star-o"></i></li>';
} else {
    displayRating.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star-o"></i></li><li><i class="fa fa-star-o"></i></li>';
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
