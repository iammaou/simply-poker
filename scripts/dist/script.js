"use strict";
const d1 = document.querySelector('.dealer-card-1');
const d2 = document.querySelector('.dealer-card-2');
const d3 = document.querySelector('.dealer-card-3');
const d4 = document.querySelector('.dealer-card-4');
const d5 = document.querySelector('.dealer-card-5');
const h1 = document.querySelector('.card-1');
const h2 = document.querySelector('.card-2');
const raiseButton = document.querySelector('.raise-button');
const callButton = document.querySelector('.call-button');
const foldButton = document.querySelector('.fold-button');
const value = document.querySelector('.personalValue');
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
const start = [1, 14, 27, 40];
let cardValue = 0;
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
let dealerActive = [dealer[0], dealer[1], dealer[2]];
let opponent = [randomCard(), randomCard()];
d1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[0]}.png`;
d2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[1]}.png`;
d3.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[2]}.png`;
d4.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[3]}.png`;
d5.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[4]}.png`;
h1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[0]}.png`;
h2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[1]}.png`;
function findAttr(searchingFor) {
    let cardNumbers = [];
    if (searchingFor <= 12) {
        for (let i = 0; i < start.length; i++) {
            cardNumbers[i] = start[i] + searchingFor;
        }
        return cardNumbers;
    }
    return [];
}
function findType(searchingFor) {
    let cardNumbers = [];
    if (searchingFor <= 4) {
        for (let i = 0; i < 13; i++) {
            cardNumbers[i] = cards[i + (searchingFor * 13)];
        }
        return cardNumbers;
    }
    return [];
}
function findColor(searchingFor) {
    let cardNumbers = [];
    if (searchingFor == 1 || searchingFor == 2) {
        for (let i = 0; i < cards.length / 2; i++) {
            if (i == cards.length / 4) {
                searchingFor += 1;
                cardNumbers[i] = cards[i + ((searchingFor - 1) * 13)];
            }
            else {
                cardNumbers[i] = cards[i + ((searchingFor - 1) * 13)];
            }
        }
        return cardNumbers;
    }
    return [];
}
function checkAttr(findArray, checkingArray) {
    for (let i = 0; i < findArray.length; i++) {
        for (let j = 0; j < checkingArray.length; j++) {
            if (checkingArray[j] == findArray[i]) {
                return true;
            }
        }
    }
    return false;
}
if (checkAttr(findAttr(0), hand) == true || checkAttr(findAttr(0), dealerActive) == true ||
    checkAttr(findAttr(1), hand) == true || checkAttr(findAttr(1), dealerActive) == true ||
    checkAttr(findAttr(2), hand) == true || checkAttr(findAttr(2), dealerActive) == true) {
    value.textContent = 'High Card';
}
//# sourceMappingURL=script.js.map