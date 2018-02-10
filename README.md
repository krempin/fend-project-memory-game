# Memory Game Project

This is one of my projects for the Udacity Front End Nanodegree program. For the source code from Udacity, see the original repository https://github.com/udacity/fend-project-memory-game

**All functionalities of the memory game in detail:**

## The cards are arranged randomly on the grid

The class names that will make up these motives (`"fa-diamond"` `"fa-paper-plane-o"`; `"fa-anchor"` `"fa-boltfa-cube"` `"fa-leaf"` `"fa-bicycle"` `"fa-bomb"` `"fa-bolt"` `"fa-cube"`) will be stored twice in an array `typeOfCards` and will be shuffled by using `shuffle(typeOfCards)` function.

## The deck is made up of eight different pairs of cards, each with different symbols on one side

As this code is the one all cards have in common, every card on the HTML consists of the following:

```
<li class="card">
  <i class="fa"></i>
</li>
```

The card gets its unique motive with Font Awesome and the i-Tag:

```
<li class="card">
   <i class="fa fa-diamond"></i>
</li>
```

Javascript will be used to add i-Tags and classes to all cards:

```
singleMotive[i].classList.add(...);
```

## The cards are arranged with the symbol face down

There has to be a "front" side and a "back" side of each card. The back side is displayed as default:

```
<li class="card">
  <i class="fa fa-bomb"></i>
</li>
```

When a card is clicked, the front side will be displayed by adding the classes `.open` and `.show` to the outer HTML:

```
<li class="card open show">
  <i class="fa fa-bolt"></i>
</li>
```

## The player flips one card over to reveal its underlying symbol

Adding an event listener which starts animation when clicking on one card is necessary.

```
const singleCard = document.querySelectorAll('.card');
for(let i = 0; i < singleCard.length; i++){
  singleCard[i].addEventListener('click', function () {
    // DO SOMETHING
  });
}
```

## The player then turns over a second card

The clicks will be counted. For the rating function, the clicks will also be used so they will be stored into the variable `moves`). After every second click, the following action will be performed:

## If the cards match, both cards stay flipped over

The classes of the two i-tags of the cards will be compared, for example:

```
if ("fa-diamond" == "fa-paper-plane-o") {}
```

If the css classes equal, add a .match class to the card. The eventListener has to be removed from these two cards.

```
<li class="card match">
  <i class="fa fa-anchor"></i>
</li>
```

If they do not equal, all additional classes will be remained so that the "back" side of the card is shown again.

```
<li class="card">
  <i class="fa fa-anchor"></i>
</li>
```

## If the cards do not match, both cards are flipped face down

```
if "fa-diamond" == "fa-paper-plane-o" is false...
```

... set the card font to display none again and show the card back.

## The game ends once all cards have been correctly matched

TO DO

## Star rating

The rating is from 1 to 3 stars and will start with 3 stars. The more moves the player needs to end the game, the less stars he will get (one move correlates with one click on a `.card`):

* 3 stars: 0 to 16 moves
* 2 stars: 17 to 32 moves
* 1 star: from 33 moves on

HTML for a full star:

```
<i class="fa fa-star"></i>
```

HTML for a blank star:

```
<i class="fa fa-star-o"></i>
```

## Time counter

When the window has completely loaded, a visible timer should start. It will stop when the game ends.

## Move counter

The current number of moves (=clicks) are counted.

## Reset Button

The reset button resets the game board, the timer, and the star rating.

The game board should be resetted by using *shuffle(typeOfCards);* again and removing all .open, .show und .match classes.

## When the game ends, a "congatulations" window will pop up

* a modal appears to congratulate the player and ask if they want to play again -> use the reset game function
* and tells the user how much time it took to win the game -> show time count
* and tells the user what the star rating was -> show star rating count
