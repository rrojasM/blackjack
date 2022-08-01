/* 2C TWO OF CLUBS*/
/* 2C TWO OF DIAMONS*/
/* 2C TWO OF HEARTS*/
/* 2C TWO OF SPADES*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;


//REFERENCIAS HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');


const puntosHTML = document.querySelectorAll('small');
const cartasJugador = document.querySelector('#jugador-cartas');
const cartasCoputadora = document.querySelector('#computadora-cartas');



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


const turnoComputadora = (puntosMinimos) => {

    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);

        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');

        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        cartasCoputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));


    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('NADIE GANA');
        } else if (puntosMinimos > 21) {
            alert('COMPUTADORA GANA...')
        } else if (puntosComputadora > 21) {
            alert('JUGADOR GANA')
        } else {
            alert('COMPUTADORA GANA!!')
        }

    }, 200);

}





btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    //PRIMER SMALL
    puntosHTML[0].innerText = puntosJugador;
    console.log('PUNTOS DEL JUGADOR', puntosJugador);
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    cartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('LO SIENTO PERDISTE!!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador)
    } else if (puntosJugador === 21) {
        console.info('21 GANASTE...');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador)
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador)
});


btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerHTML = 0;

    cartasJugador.innerHTML = '';
    cartasCoputadora.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

}); 