/*
const cards = [
    1 King Spades
    2 Queen Spades
    3 Jack Spades
    4 10 Spades
    5 9 Spades
    6 8 Spades
    7 7 Spades
    8 6 Spades
    9 5 Spades
    10 4 Spades
    11 3 Spades
    12 2 Spades
    13 Ace Spades

    14 King Hearts 
    15 Queen Hearts
    16 Jack Hearts 
    17 10 Hearts 
    18 9 Hearts 
    19 8 Hearts 
    20 7 Hearts 
    21 6 Hearts 
    22 5 Hearts 
    23 4 Hearts 
    24 3 Hearts 
    25 2 Hearts 
    26 Ace Hearts 

    27 King Clubs 
    28 Queen Clubs 
    29 Jack Clubs 
    30 10 Clubs 
    31 9 Clubs 
    32 8 Clubs 
    33 7 Clubs 
    34 6 Clubs 
    35 5 Clubs 
    36 4 Clubs 
    37 3 Clubs 
    38 2 Clubs 
    39 Ace Clubs 

    40 King Diamonds 
    41 Queen Diamonds 
    42 Jack Diamonds 
    43 10 Diamonds 
    44 9 Diamonds 
    45 8 Diamonds 
    46 7 Diamonds 
    47 6 Diamonds 
    48 5 Diamonds 
    49 4 Diamonds 
    50 3 Diamonds 
    51 2 Diamonds 
    52 Ace Diamonds
];*/

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];

let cardsCopy = [...cards];
let hand = [];
let dealer = [];

function randomCard(){
let n = Math.trunc(Math.round(Math.random() * 52) + 1);	

if(cardsCopy[n] != 0){
    cardsCopy[n] = 0;
    return cards[n];
} else{
    return randomCard();
}	
}

function start(){
hand = [randomCard(), randomCard()];
dealer = [randomCard(), randomCard(), randomCard(), randomCard(), randomCard()];
}

start();
console.log();