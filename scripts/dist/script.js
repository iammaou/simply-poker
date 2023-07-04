"use strict";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
let cardsCopy = [...cards];
let hand = [];
let dealer = [];
function randomCard() {
    let n = Math.trunc(Math.round(Math.random() * 52) + 1);
    if (cardsCopy[n] != 0) {
        cardsCopy[n] = 0;
        return cards[n];
    }
    else {
        return randomCard();
    }
}
function start() {
    hand = [randomCard(), randomCard()];
    dealer = [randomCard(), randomCard(), randomCard(), randomCard(), randomCard()];
}
//# sourceMappingURL=script.js.map