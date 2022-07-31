/* 2C TWO OF CLUBS*/
/* 2C TWO OF DIAMONS*/
/* 2C TWO OF HEARTS*/
/* 2C TWO OF SPADES*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    console.log(deck);

}

crearDeck();
