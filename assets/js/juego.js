let deck = [];
let tipos = ['C','D','H','S']
let especiales = ['A','K','Q','J']

let puntosJugador = 0;
let puntosComputadora = 0;


const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas')


const crearDeck = () =>{
    for(let i= 2; i<=10;i++){
        for(let tip of tipos){
            deck.push(i+tip)
        }
    } 
    for(let tip of tipos){
        for(let esp of especiales){
            deck.push(esp+tip)     
        }
        
    }
    deck= _.shuffle(deck)//_.shuffle es para ordenar manera aleatoria el arreglo
    console.log(deck)
    return deck;
}

crearDeck();

//Funcion para pedir una carta

const pedirCarta = () =>{
    if(deck.length === 0){
        throw "No hay Cartas";
    }

    const cartaTomada= deck.pop();

    //console.log(cartaTomada);
    //console.log(deck);
    return cartaTomada;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1)
    return (isNaN(valor)) ?
            (valor==='A') ? 11: 10
            :valor * 1
    // let puntos = 0;
    // if(isNaN(valor)){
    //     console.log("No es numero")
    // }else{
    //     console.log("Si es un numero")
    //     puntos = valor
        
    // }
    // console.log(puntos*1)
}


let valor = valorCarta(pedirCarta());

//console.log(valor)
//Eventos
btnPedir.addEventListener('click',() =>{
    const carta = pedirCarta(); 

    puntosJugador += valorCarta(carta); 
    console.log(puntosJugador)
    puntosHTML[0].innerText = puntosJugador; 


    const imgCarta  = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        alert("perdiste")
        console.warn("perdiste");
        btnPedir.disabled = true;
    }else if(puntosJugador === 21){
        alert("Ganaste")
        console.warn("Ganaste");
        btnPedir.disabled = true;
    }

    

})

