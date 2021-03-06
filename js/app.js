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
    let currentIndex = array.length, temporaryValue, randomIndex;

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
 * moves: counts every time 2 not yet matched cards are clicked
 * matches: counts every card match, game will end at 8 matches
 * stars: rating from 3 to 1, depending on the count of moves, starts with 3
 * openedCards: array that holds the the actual opened cards
 */

let moves = 0;
let matches = 0;
let stars = 3;
shuffle(typeOfCards);
let openedCards = [];

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

    singleCard[i].addEventListener('click', cardClickFunction);

    function cardClickFunction() {

        this.classList.add('open','show');
        this.classList.remove('closed');
        openedCards.push(singleCard[i].className);

        if (openedCards.length == 2) {

            matchCards();

            // Count the moves the player needs to finish the game
            moves += 1;
            document.querySelector('span.moves').textContent = moves;
            changeRating(moves);
        }

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
        return true;
    } else {
        noCardMatch();
        return false;
    }

}

function matchedCards() {

    const storage = document.querySelectorAll('.show');
    for (let i = 0; i < 2; i++) {
        storage[i].classList.add('match');
        storage[i].classList.remove('show');
    }
    openedCards = [];

}

function noCardMatch() {
    const storage = document.querySelectorAll('.show');

    for (let i = 0; i < 2; i++) {

      storage[i].classList.add('dismatch');

      setTimeout(function(){

            storage[i].classList.remove('open', 'show');

            setTimeout(function(){

                storage[i].classList.remove('dismatch', 'dismatch');
                storage[i].classList.add('closed');
            },600);

        openedCards = [];

    },1000);

    }

}

/**
 * Display star rating
 * one click on .card.closed = one move
 * 3 stars: 0 to 8 moves
 * 2 stars: 9 to 25 moves
 * 1 star: from 26 moves on
 */

function changeRating() {

    const displayRating = document.querySelector('ul.stars');
    addContent();

    if (moves <= 8) {
        stars = 3;
        displayRating.innerHTML = '<li><i class="fas fa-star"></i></li>' +
                                  '<li><i class="fas fa-star"></i></li>' +
                                  '<li><i class="fas fa-star"></i></li>';
    } else if (moves < 26) {
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

let modalGameEnd = document.getElementById('gameFinishModal');
let span = document.getElementsByClassName("close")[0];

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

function addContent() {

document.querySelector('#modal-moves').textContent = moves;

document.querySelector('#modal-stars').textContent = stars;

}

/**
 * Reset the game
 */

document.querySelector('.restart').addEventListener('click', function () {
  location.reload()
});

document.querySelector('#play-again').addEventListener('click', function () {
  location.reload()
});
