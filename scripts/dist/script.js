"use strict";
const d1 = document.querySelector('.dealer-card-1');
const d2 = document.querySelector('.dealer-card-2');
const d3 = document.querySelector('.dealer-card-3');
const d4 = document.querySelector('.dealer-card-4');
const d5 = document.querySelector('.dealer-card-5');
const h1 = document.querySelector('.card-1');
const h2 = document.querySelector('.card-2');
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
let cardsCopy = [...cards];
function randomCard() {
    let n = Math.trunc(Math.round(Math.random() * 51) + 1);
    if (cardsCopy[n] != 0) {
        cardsCopy[n] = 0;
        return cards[n];
    }
    else {
        return randomCard();
    }
}
let hand = [randomCard(), randomCard()];
let dealer = [randomCard(), randomCard(), randomCard(), randomCard(), randomCard()];
d1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[0]}.png`;
d2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[1]}.png`;
d3.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[2]}.png`;
d4.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[3]}.png`;
d5.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[4]}.png`;
h1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[0]}.png`;
h2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[1]}.png`;
//# sourceMappingURL=script.js.map