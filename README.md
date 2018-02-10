# Memory Game Project

This is one of my projects for the Udacity Front End Nanodegree program. For the source code from Udacity, see the original repository https://github.com/udacity/fend-project-memory-game

**All functionalities of the memory game in detail:**

## The cards are arranged randomly on the grid

The class names that will make up these motives ("fa-diamond"; "fa-paper-plane-o"; "fa-anchor"; "fa-boltfa-cube"; "fa-leaf"; "fa-bicycle"; "fa-bomb"; "fa-bolt"; "fa-cube")) will be stored in an array. At next, we uses the class names twice (as each pair of cards needs a class), looping the array twice and using the shuffle function to get them randomly.

```
function shuffle(array) {
    ...
    return array;
}
```

## The deck is made up of eight different pairs of cards, each with different symbols on one side

Every card is represented by this tag:

```
<li class="card"></li>
```

The card gets its unique motive with Font Awesome and the i-Tag:

```
<li class="card">
   <i class="fa fa-diamond"></i>
</li>
```

Javascript will be used to add i-Tags and classes to all cards:

```
.insertAdjacentHTML(afterbegin, );
```

## The cards are arranged with the symbol face down

There has to be a front side and a back side of each card. As default, the back side is displayed and the front side will not be displayed using

```
display:none;
```

As soon as the card is clicked, display will be changed from none to block using an animation.

## The player flips one card over to reveal its underlying symbol

Adding an event listener which starts animation when clicking on one card is necessary.

```
var eachCard = document.querySelectorAll('.card');
for(var i=0; i < eachCard.length; i++){
  eachCard[i].addEventListener('click', function () {
    // Do something
  });
}
```

## The player then turns over a second card

After the second click, the classnames of the cards will be compared, for example:

```
"fa-diamond" == "fa-paper-plane-o"
```

## If the cards match, both cards stay flipped over

```
if "fa-diamond" == "fa-paper-plane-o" is true...
```

... remove the event listener from the cards and do not let them flip back to their back side

## If the cards do not match, both cards are flipped face down

```
if "fa-diamond" == "fa-paper-plane-o" is false...
```

... set the card font to display none again and show the card back.

## The game ends once all cards have been correctly matched

TO DO

## Star rating

The rating is from 1 to 3 stars and will start with three stars. After x clicks on the cards, the rating should first change to 2 stars and finally to 1 star.

## Time counter

When the window has completely loaded, a visible timer should start. It will stop when the game ends.

## Move counter

The current number of moves (=clicks) are counted.

## Reset Button

The reset button resets the game board, the timer, and the star rating.

## When the game ends, a "congatulations" window will pop up

* a modal appears to congratulate the player and ask if they want to play again -> use the reset game function
* and tells the user how much time it took to win the game -> show time count
* and tells the user what the star rating was -> show star rating count
