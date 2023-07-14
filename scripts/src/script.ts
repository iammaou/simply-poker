const d1:any = document.querySelector('.dealer-card-1');
const d2:any = document.querySelector('.dealer-card-2');
const d3:any = document.querySelector('.dealer-card-3');
const d4:any = document.querySelector('.dealer-card-4');
const d5:any = document.querySelector('.dealer-card-5');

const h1:any = document.querySelector('.card-1');
const h2:any = document.querySelector('.card-2');

// const o1:any = document.querySelector('.opponent-card-1');
// const o2:any = document.querySelector('.opponent-card-2');

const raiseButton:any = document.querySelector('.raise-button');
const callButton:any = document.querySelector('.call-button');
const foldButton:any = document.querySelector('.fold-button');
const value:any = document.querySelector('.personalValue');

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
const start = [1, 14, 27, 40];

let cardValue:Number = 0;
let cardsCopy = [...cards];

function randomCard(){
    let n = Math.trunc(Math.round(Math.random() * 52));	
    
    if(n!=undefined && cardsCopy[n] != 0){
        cardsCopy[n] = 0;
        return cards[n];
    } else return randomCard();
}

function findAttr(searchingFor:number){ //returns: kings, queens, jacks, 10-2 and aces
    let cardNumbers = [];
    
    if(searchingFor<=12){
        for(let i=0; i<start.length; i++){ //finds the cards that we are checking for
            cardNumbers[i] = start[i] + searchingFor;
        }
        return cardNumbers;
    } 
    return [];
}

function findType(searchingFor:number){ //returns: spades, hearts, clubs, diamonds
    let cardNumbers = [];

    if(searchingFor<=4){
        for(let i=0; i<13; i++){
            cardNumbers[i] = cards[i+(searchingFor*13)];
        }
        return cardNumbers;
    } 
    return [];
}

function findColor(searchingFor:number){ //returns: black, red
    let cardNumbers = [];
    
    if(searchingFor==1 || searchingFor==2){
        for(let i=0; i<cards.length/2; i++){
            if(i==cards.length/4){
                searchingFor+=1;
                cardNumbers[i] = cards[i+((searchingFor-1)*13)];
            } else{
                cardNumbers[i] = cards[i+((searchingFor-1)*13)];
            }
        }
        return cardNumbers;
    }
    return [];
}

function checkHighCard(findArray:number[], checkingArray:number[]){
    for(let i=0;i<findArray.length;i++){
        for(let j=0;j<checkingArray.length;j++){
            if(checkingArray[j]==findArray[i]){
                return true;
            }
        }
    }
    return false;
}

function arrayConfig(theArray:number[]){
    for(let i=0; i<theArray.length; i++){
        for(;theArray[i]>13;){
            theArray[i]=theArray[i]-13;
        }
    }

    return theArray;
}

function checkPair(handArray:number[], dealerArray:number[]){
    let handArrayCopy = [...handArray];
    let dealerArrayCopy = [...dealerArray];
    handArrayCopy = arrayConfig(dealerArrayCopy);
    dealerArrayCopy = arrayConfig(dealerArrayCopy);

    for(let i=0;i<dealerArrayCopy.length;i++){
        for(let j=0; j<handArrayCopy.length; j++){
            if(dealerArrayCopy[i]==handArrayCopy[j]){
                return true;
            }
        }
    }

    if(handArrayCopy[0]==handArrayCopy[1]){
        return true;
    }

    // for(let i=0;i<dealerArrayCopy.length;i++){
    //     for(let j=i+1; j<dealerArrayCopy.length;j++){
    //         if(dealerArrayCopy[i]==dealerArrayCopy[j]){
    //             return true;
    //         }
    //     }
    // }

    return false;
}

function checkTwoPair(handArray:number[], dealerArray:number[]){
    let handArrayCopy = [...handArray];
    let dealerArrayCopy = [...dealerArray];

    for(let i=0; i<handArrayCopy.length; i++){
        for(;handArrayCopy[i]>13;){
            handArrayCopy[i]=handArrayCopy[i]-13;
        }
    }
    for(let i=0; i<dealerArrayCopy.length; i++){
        for(;dealerArrayCopy[i]>13;){
            dealerArrayCopy[i]=dealerArrayCopy[i]-13;
        }
    }

    for(let i=0; i<dealerArrayCopy.length;i++){
        for(let j=0; j<handArrayCopy.length; j++){
            if(dealerArrayCopy[i]==handArrayCopy[j]){
                
            }
        }
    }

    return false;
}

let hand = [randomCard(),randomCard()];
let dealer = [randomCard(),randomCard(),randomCard()];
let opponent = [randomCard(), randomCard()];

d1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[0]}.png`;
d2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[1]}.png`;
d3.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[2]}.png`;
// d4.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[3]}.png`;
// d5.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${dealer[4]}.png`;

h1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[0]}.png`;
h2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${hand[1]}.png`;

// o1.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${opponent[0]}.png`;
// o2.src = `../../assets/PNG-cards-1.3/PNG-cards-1.3/${opponent[1]}.png`;

if( checkHighCard(findAttr(0), hand) || checkHighCard(findAttr(0), dealer) ||
    checkHighCard(findAttr(1), hand) || checkHighCard(findAttr(1), dealer) ||
    checkHighCard(findAttr(2), hand) || checkHighCard(findAttr(2), dealer)
){
    value.textContent = "High Card";
} 
if(checkPair(hand, dealer)){
    value.textContent = "Pair";
}