let deck = [];
let tipos = ['C','D','H','S']
let especiales = ['A','K','Q','J']

let puntosJugador = 0;
let puntosComputadora = 0;


const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo   = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');


const divCartasJugador     = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')


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

const repartircartas=(puntos,posicion, divCartas) =>{
    const carta = pedirCarta(); 

    puntos += valorCarta(carta); 
    puntosHTML[posicion].innerText = puntos; 

    const imgCarta  = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartas.append(imgCarta);    
}




//Turno de la computadora
const turnoComputadora = (puntosMinimos) =>{
    do{
        const carta = pedirCarta(); 

        puntosComputadora += valorCarta(carta); 
        puntosHTML[1].innerText = puntosComputadora; 
    
        const imgCarta  = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);    
        //repartircartas(puntosComputadora,1,divCartasComputadora)
        if(puntosMinimos > 21){
            break;
        }

    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() =>{
        if(puntosComputadora === puntosMinimos){
            alert('Nadie Gana')
        }else if(puntosMinimos > 21){
            alert('computadora Gana')
        }else if(puntosComputadora > 21){
            alert('Jugador Gana')
        }else{
            alert('Jugador Gana')
        }
    },100)


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

    //repartircartas(puntosJugador,0,divCartasJugador)

    if(puntosJugador > 21){
        console.warn("perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn("Ganaste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

})



btnDetener.addEventListener('click',() =>{
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
});



btnNuevo.addEventListener('click',() =>{

    console.clear()
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;  

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';


    btnDetener.disabled = false;
    btnPedir.disabled = false;
})
//console.log(puntosJugador)
////TODO: Borrar
//turnoComputadora(puntosJugador);
