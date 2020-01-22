const cards = [
  { name: "a", value: 1, selected: 0 },
  { name: "2", value: 2, selected: 0 }, { name: "3", value: 3, selected: 0 },
  { name: "4", value: 4, selected: 0 }, { name: "5", value: 5, selected: 0 },
  { name: "6", value: 6, selected: 0 }, { name: "7", value: 7, selected: 0 },
  { name: "8", value: 8, selected: 0 }, { name: "9", value: 9, selected: 0 },
  { name: "10", value: 10, selected: 0 }, { name: "J", value: 10, selected: 0 },
  { name: "Q", value: 10, selected: 0 }, { name: "K", value: 10, selected: 0 }]



// Dealers Hand
let dealersBank = 10
let dealersHand = [];
let totalDealersCardValue = 0;

// Players Hand
let playersBank = 10
let playersHand = [];
let totalPlayersCardValue = 0;

document.getElementById('dealersBank').innerHTML = dealersBank;
document.getElementById('playersBank').innerHTML = playersBank;

const gameStartBtn = document.getElementById('gameStartBtn');

// Start game Button
gameStartBtn.addEventListener('click', dealCards);

// start game
function dealCards() {
  // Dealer randomly selects 2 cards an deck for the player and for the dealer.
  dealersHand.push(getRandomCard(), getRandomCard());
  playersHand.push(getRandomCard(), getRandomCard());
  showPlayerButtons();
  AddCardValues();
  playersRound();
  dealersRound();
  showCards();
  console.log({ dealersHand, playersHand })

  gameStartBtn.disabled = true;
}

// Get Random Card
function getRandomCard() {
  let randomCard = cards[Math.floor(Math.random() * cards.length)];
  /* If an item in the array is selected, selected key value +1. If item is selected 4 times by either the player or the dealer, the item is no longer selectable*/
  randomCard.selected++
  if (randomCard.selected === 4) {
    let cardIndex = cards.findIndex(card => card === randomCard);
    cards.splice(cardIndex, 1);
    console.log(cards);
  }
  console.log(randomCard);
  return randomCard;
}

// Add Total Players Cards
function AddCardValues() {
  totalDealersCardValue = 0;
  totalPlayersCardValue = 0;
  playersHand.forEach(card => totalPlayersCardValue += card.value)
  dealersHand.forEach(card => totalDealersCardValue += card.value)
  console.log("total Dealers Hand: " + totalDealersCardValue);
  console.log("total Players Hand: " + totalPlayersCardValue);
};

// Create Player Buttons
function showPlayerButtons() {
  var hitButton = document.createElement('button');
  hitButton.classList.add('btn');
  hitButton.classList.add('btn-warning');
  var hitMe = document.createTextNode('Hit Me');
  hitButton.appendChild(hitMe);
  document.getElementById("hitMe").appendChild(hitButton);
  var stayButton = document.getElementById('stay');
  stayButton.classList.add('btn');
  stayButton.classList.add('btn-info');
  stayButton.classList.add('ml-2');
  var stay = document.createTextNode('Stay');
  stayButton.appendChild(stay);
  document.getElementById("hitMe").appendChild(stayButton);
}

function showCards() {
  card_location = document.getElementById("playersHand");
  playersHand.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('p-5');
    const playersCardNum = document.createTextNode(card.name);
    div.appendChild(playersCardNum);
    card_location.appendChild(div);
  });
}

// Players Round
function playersRound() {
  if (totalPlayersCardValue > 21) {
    playersBank--;
    dealersBank++;
    console.log("Dealer Wins Hand");
  }
}

// Dealers Round
function dealersRound() {
  if (totalDealersCardValue > 21) {
    dealersBank--;
    playersBank++;
    console.log("Player Wins Hand")
  }
}
