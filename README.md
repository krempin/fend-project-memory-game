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
<li class="card closed">
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

Adding an event listener which adds `.open` and `.show` and starts animation when clicking on one card is necessary.

```
const singleCard = document.querySelectorAll('.card');

for(let i = 0; i < singleCard.length; i++){

  if (singleCard[i].classList.contains('closed')) {

    function cardClickFunction() {

      [...]

      // removes listener so that openend cards cannot be clicked again
      singleCard[i].removeEventListener('click', cardClickFunction);

      }
    }

    singleCard[i].addEventListener('click', cardClickFunction);
  }
}
```

The eventListener will be removed immediately to prevent the card from being clicked again.

## The player then turns over a second card

The clicks will be counted. For the rating function, the clicks will also be used so they will be stored in the variable `moves`). After every second click (`moves % 2 === 0`), the following action will be performed:

## If the cards match, both cards stay flipped over

The classes of the two i-tags of the cards will be compared (p.e. `if ("fa-diamond" == "fa-paper-plane-o")`). If the classes equal, a `.match` is added to the card:

```
<li class="card match">
  <i class="fa fa-anchor"></i>
</li>
```

## If the cards do not match, both cards are flipped face down

If the classes do not equal, all additional classes will be removed so that the "back" of the card is shown again:

```
<li class="card closed">
  <i class="fa fa-anchor"></i>
</li>
```

## The game ends once all cards have been correctly matched

The memory game has 16 cards with 8 possible matches. If two classes are equal, the `cardMatches` variable will be incremented by 1 (default value is set to 0). `if (cardMatches === 8)`, the game ends.

## Star rating

The rating is from 1 to 3 stars and will start with 3 stars. The more moves the player needs to end the game, the less stars he will get (one move correlates with one click on a `.card`):

* 3 stars: 0 to 16 moves
* 2 stars: 17 to 32 moves
* 1 star: from 33 moves on

HTML for a full star:

```
<i class="fas fa-star"></i>
```

HTML for a blank star:

```
<i class="far fa-star"></i>
```

The full inner HTML of `ul class="stars"` will be changed depending on the number of moves.

## Time counter

When the window has completely loaded, a visible timer should start. It will stop when the game ends.

## Move counter

This information will be stored in `moves` (default: 0). The current number of moves is counted as clicks on a `.card`. The `moves` decide when card pares are compared (after every 2 moves) and how the star rating will be displayed (see above).

## Reset Button

The reset button resets

*  the game board (remove all classes from `<li class="card">` except card (`.open`, `.show` and `.match`) and use the `shuffle(typeOfCards);` again)
*  the timer (?)
*  the star rating and move countin (`moves = 0;`)

## When the game ends, a "congratulations" window will pop up that...

* congratulates the player and ask if they want to play again (use the reset button)
* tells the player how much time it took to win the game (show timer output)
* tells the player what the star rating was (show rating output)
