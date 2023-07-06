"use strict";
const d1 = document.querySelector('.dealer-card-1');
const d2 = document.querySelector('.dealer-card-2');
const d3 = document.querySelector('.dealer-card-3');
const d4 = document.querySelector('.dealer-card-4');
const d5 = document.querySelector('.dealer-card-5');
const h1 = document.querySelector('.card-1');
const h2 = document.querySelector('.card-2');
const o1 = document.querySelector('.opponent-card-1');
const o2 = document.querySelector('.opponent-card-2');
const raiseButton = document.querySelector('.raise-button');
const callButton = document.querySelector('.call-button');
const foldButton = document.querySelector('.fold-button');
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
const start = [1, 14, 27, 40];
function findAttr(a) {
    let cardNumbers = [];
    if (a <= 12) {
        for (let i = 0; i < start.length; i++) {
            cardNumbers[i] = start[i] + a;
        }
        return cardNumbers;
    }
    else {
        return 0;
    }
}
function findType(a) {
    let cardNumbers = [];
    if (a <= 4) {
        for (let i = 0; i < 13; i++) {
            cardNumbers[i] = cards[i + (a * 13)];
        }
        return cardNumbers;
    }
    else {
        return 0;
    }
}
function findColor(a) {
    let cardNumbers = [];
    if (a == 1 || a == 2) {
        for (let i = 0; i < cards.length / 2; i++) {
            if (i == cards.length / 4) {
                a += 1;
                cardNumbers[i] = cards[i + ((a - 1) * 13)];
            }
            else {
                cardNumbers[i] = cards[i + ((a - 1) * 13)];
            }
        }
        return cardNumbers;
    }
    else {
        return 0;
    }
}
let cardsCopy = [...cards];
function randomCard() {
    let n = Math.trunc(Math.round(Math.random() * 52));
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
let opponent = [randomCard(), randomCard()];
d1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[0]}.png`;
d2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[1]}.png`;
d3.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[2]}.png`;
d4.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[3]}.png`;
d5.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[4]}.png`;
h1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[0]}.png`;
h2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[1]}.png`;
o1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${opponent[0]}.png`;
o2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${opponent[1]}.png`;
function abc() {
    const arr1 = ['bobby', 'hadz'];
    const arr2 = [1, 2];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);
}
//# sourceMappingURL=script.js.map