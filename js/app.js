/**
 * Create a list that holds all 16 cards
 */

let typeOfCards = [
    "fa-gem",
    "fa-gem",
    "fa-moon",
    "fa-moon",
    "fa-sun",
    "fa-sun",
    "fa-star",
    "fa-star",
    "fa-lightbulb",
    "fa-lightbulb",
    "fa-bell",
    "fa-bell",
    "fa-bolt",
    "fa-bolt",
    "fa-cube",
    "fa-cube"
];

/** Shuffle the list of cards
 * function source: http://stackoverflow.com/a/2450976
 */

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

/**
 * Everything to start the game:
 * Create a list that holds all 16 cards
 * moves: counts every time a closed card is clicked
 * matches: counts every card match, game will end at 8 matches
 * stars: rating from 3 to 1, depending on the count of moves, starts with 3
 * openedCards: array that holds the the actual opened cards
 */

let moves = 0;
let matches = 0;
let stars = 3;
shuffle(typeOfCards);
let openedCards = []

/**
 *  Select all i-tags inside the cards and add the typeOfCards as classes
 */

const singleCard = document.querySelectorAll('.card');
const singleMotive = document.querySelectorAll('.card i');

for(let i = 0; i < singleMotive.length; i++){

    singleMotive[i].classList.add(shuffle(typeOfCards[i]));

    // Add classes to cards for comparing matches
    singleCard[i].classList.add(shuffle(typeOfCards[i]));

}

/**
 * Set up the event listener for all closed or unmatched cards
 */

for(let i = 0; i < singleCard.length; i++){

    if (singleCard[i].classList.contains('closed')) {

        function cardClickFunction() {
            this.classList.add('open','show');
            this.classList.remove('closed');
            openedCards.push(singleCard[i].className);

            // Count the moves the player needs to finish the game
            moves += 1;
            document.querySelector('span.moves').textContent = moves;
            changeRating(moves);

            if (moves !==0 && moves % 2 === 0) {
                matchCards();
            }

            // Remove listener so that openend cards cannot be clicked again
            singleCard[i].removeEventListener('click', cardClickFunction);

        }

        singleCard[i].addEventListener('click', cardClickFunction);
    }
}

/**
 * Match cards function
 */

function matchCards() {

    if (openedCards[0] == openedCards[1]) {
        matches += 1;
        checkEndGame(matches);
        matchedCards();
    } else {
        noCardMatch();
    }

}

function matchedCards() {

  console.log("Yes, it matched");
  let storage = document.querySelectorAll('.show');
  for (let i = 0; i < 2; i++) {
    storage[i].classList.add('match');
    storage[i].classList.remove('show');
  }
  openedCards = [];

}

function noCardMatch() {

    setTimeout(function(){

        let storage = document.querySelectorAll('.show');

        for (let i = 0; i < 2; i++) {
          storage[i].classList.add('closed');
          storage[i].classList.remove('open', 'show');
        }
        openedCards = [];

    },1000);

}

/**
 * Display star rating
 * one click on .card.closed = one move
 * 3 stars: 0 to 16 moves
 * 2 stars: 17 to 32 moves
 * 1 star: from 33 moves on
 */

function changeRating() {

    const displayRating = document.querySelector('ul.stars');

    if (moves <= 16) {
        stars = 3;
        displayRating.innerHTML = '<li><i class="fas fa-star"></i></li>' +
                                  '<li><i class="fas fa-star"></i></li>' +
                                  '<li><i class="fas fa-star"></i></li>';
    } else if (moves < 33) {
        stars = 2;
        displayRating.innerHTML = '<li><i class="fas fa-star"></i></li>' +
                                  '<li><i class="fas fa-star"></i></li>' +
                                  '<li><i class="far fa-star"></i></li>';
    } else {
        stars = 1;
        displayRating.innerHTML = '<li><i class="fa fa-star"></i></li>' +
                                  '<li><i class="far fa-star"></i></li>' +
                                  '<li><i class="far fa-star"></i></li>';
    }

}

/**
 * Timer functionality
 * source: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
 */

let sec = 0;
let secModal = 0;

function count ( timeCount ) {

    if (timeCount > 9) {
        return timeCount;
    } else {
        return '0' + timeCount;
    }

}
let timer = setInterval( function(){

    // Time counter for frontend
    document.getElementById("seconds").innerHTML=count(++sec%60);
    document.getElementById("minutes").innerHTML=count(parseInt(sec/60,10));

    // Time counter for modal
    document.getElementById("modal-seconds").innerHTML=count(++secModal%60);
    document.getElementById("modal-minutes").innerHTML=count(parseInt(secModal/60,10));

}, 1000);

/**
 * Play again modal
 * source: https://www.w3schools.com/howto/howto_css_modals.asp
 */

var modalGameEnd = document.getElementById('gameFinishModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {

    modalGameEnd.style.display = "none";

}

window.onclick = function(event) {

    if (event.target == modalGameEnd) {
        modalGameEnd.style.display = "none";
    }

}

/**
 * Check whether the game has ended
 * source: https://www.w3schools.com/howto/howto_css_modals.asp
 * when all cards are matched, show the modal and reset the timer
 */

function checkEndGame() {

    if (matches === 8) {
        clearInterval ( timer );
        modalGameEnd.style.display = "block";
    }

}

/**
 * Modal contents
 */

document.querySelector('#modal-moves').textContent = moves;

document.querySelector('#modal-stars').textContent = stars;

/**
 * Reset the game
 */

document.querySelector('.restart').addEventListener('click', function () {
  location.reload()
});

document.querySelector('#play-again').addEventListener('click', function () {
  location.reload()
});

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
