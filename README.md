# BlackJackJS
A Black Jack Game built with JS, HTML &amp; CSS with BOOTSTRAP4

## GAME PLAY:
The object of the game is to have the higher value based on the total values of the cards equal to or less than the value of 21.

If the total card value of the player is higher than the total card value of the dealer and is equal to or less than 21, the player wins.

If the total card value of the dealer is higher than the total card value of the player and is equal to or less than 21, the dealer wins.

If the total card value of the player is greater than 21, and the dealer’s total card value is less than 21, the dealer wins.

If the total card value of the dealer is great than 21, and the player’s total card value is less than 21, the player wins.



## GAME START:
A Button must be clicked to start the game.

dealer randomly selects 2 cards an deck for the player and for the dealer.

One card will be visible, the other card is hidden from the player.

Each card can only be selected 4 times for either the player or the dealer.

The player will then randomly be dealt 2 cards from the deck.

Both cards are visible to the player.

The 2 visible cards’ value will be added and the total will be displayed to the player.

Once both the dealer and the player have their cards, the players round begins.


## playerS ROUND:
the player will be prompted with an alert to choose between 2 options.
  1.	Stay (do not draw any more cards)
  2.	Deal (another card from the deck is added to the player’s possession.

If the player chooses “Deal”, a card will be randomly selected from either one of the 4 decks and its value will be added to the total value of the player’s hand.

The player can opt to “Deal” until either the player chooses “Stay” or his hand’s total value is greater than 21.

If the total value of the player’s hand is less than 21 the player will be prompted again between the same 2 options.

If the total value of the player’s hand is equal to 21, the player will automatically stay and the dealer will begin it’s turn. The player will be alerted (21! dealers turn).

If the total value of the player’s hand is over 21, the game is over and the player will be alerted “Over 21, You Lose”.

If the total value of the player’s hand is less than 21 and the player chooses “Stay”, the player will be alerted “dealers Turn” and the dealer will begin it’s round.

## dealerS ROUND:
Once the player is finished with his round with either the player’s cards value equal to 21 or less than 21 and the player opts to stay, the dealers round begins.

The card that is hidden from player’s view will be made visible and the value will be added to the card’s value that was visible. 

If the dealers total hand value is less than 21 and less than the players total hand value, the dealer will “deal”.

If the dealers total hand value is less than or equal to 21 and greater than the players total hand value, the game ends and the player will be alerted “You Lose”.

If the dealers total hand value equals 21 and the players total hand value is also equal to 21, the game ends and the player will be alerted “It’s a Draw”.

If the dealers total hand value is greater than 21, the game ends and the player will be alerted “You Win!”
