# BlackJackJS
A Black Jack Game built with JS, HTML &amp; CSS with BOOTSTRAP4

## GAME PLAY:
The object of the game is to have the higher value based on the total values of the cards equal to or less than the value of 21. 

If the total card value of the user is higher than the total card value of the computer and is equal to or less than 21, the user wins.

If the total card value of the computer is higher than the total card value of the user and is equal to or less than 21, the computer wins.

If the total card value of the user is greater than 21, and the computer’s total card value is less than 21, the computer wins.

If the total card value of the computer is great than 21, and the user’s total card value is less than 21, the user wins.



## GAME START:
A Button must be clicked to start the game. 

Computer randomly selects 2 variables from any of 4 the arrays.

One variable will be visible, the other variable is hidden from the user.

Once those variables are chosen by the computer, they can no longer be accessible/reusable to the user or the computer.

The user will then randomly be dealt 2 variables from any of the 4 arrays. 

Both variables are visible to the user.

Once those 2 random variables are dealt, they will no longer be accessible/reusable to the user or the computer.

The 2 visible variables’ value will be added and the total will be displayed to the user.
Once both the computer and the user have their cards, the users round begins.

 
## USERS ROUND:
the user will be prompted with an alert to choose between 2 options.
  1.	Stay (do not draw any more cards)
  2.	Deal (another variable from the array is added to the user’s possession.

If the user chooses “Deal”, a card will be randomly selected from either one of the 4 arrays and its value will be added to the total value of the user’s hand.

The user can opt to “Deal” until either the user chooses “Stay” or his hand’s total value is greater than 21.

If the total value of the user’s hand is less than 21 the user will be prompted again between the same 2 options.

If the total value of the user’s hand is equal to 21, the user will automatically stay and the computer will begin it’s turn. The user will be alerted (21! Computers turn).

If the total value of the user’s hand is over 21, the game is over and the user will be alerted “Over 21, You Lose”.

If the total value of the user’s hand is less than 21 and the user chooses “Stay”, the user will be alerted “Computers Turn” and the computer will begin it’s round.

## COMPUTERS ROUND:
Once the user is finished with his round with either the user’s cards value equal to 21 or less than 21 and the user opts to stay, the computers round begins.

The card that is hidden from user’s view will be made visible and the value will be added to the card’s value that was visible. 

If the Computers total hand value is less than 21 and less than the users total hand value, the computer will “deal”.

If the Computers total hand value is less than or equal to 21 and greater than the users total hand value, the game ends and the user will be alerted “You Lose”.

If the Computers total hand value equals 21 and the users total hand value is also equal to 21, the game ends and the user will be alerted “It’s a Draw”.

If the Computers total hand value is greater than 21, the game ends and the user will be alerted “You Win!”
