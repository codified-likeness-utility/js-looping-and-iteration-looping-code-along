// Code your solutions in this file
function writeCards(stringNames, eventName) {
    let newCards = []
    for (let i =0; i < stringNames.length; i ++) {
        newCards.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return newCards
}

function countDown() {
   let countdown = 10
   while (countdown >= 0) {
       console.log(countdown--);
   }
}

