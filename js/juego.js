/* 2C TWO OF CLUBS*/
/* 2C TWO OF DIAMONS*/
/* 2C TWO OF HEARTS*/
/* 2C TWO OF SPADES*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosCoomputadora = 0;


//REFERENCIAS HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');


function shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

/* Esta función crea una nueva baraja */
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
    deck = shuffle(deck)
    return deck;
}

crearDeck();
/* Esta función me permite tomar una carta */

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'NO HAY MAS CARTAS EN EL DECK!!'
    }
    const carta = deck.pop();
    return carta;
}

/*
for (let i = 0 ; 1 <= 55; i++) {
    pedirCarta()
} */

//pedirCarta();

/* const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;

    if (isNaN(valor)) {
        //console.log('NO ES UN NÚMERO');
        puntos = (valor === 'A') ? 11 : 10;
        console.log(puntos);
    } else {
        //console.log('ES UN NÚMERO');
        puntos = valor * 1;//* 1 retorna la versión numerica
    }
} */


const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}





btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    //PRIMER SMALL
    puntosHTML[0].innerText = puntosJugador;
    console.log('PUNTOS DEL JUGADOR', puntosJugador);


    
});