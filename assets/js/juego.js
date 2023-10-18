let deck = [];
let tipos = ['C','D','H','S']
let especiales = ['A','K','Q','J']

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

const tomarCarta = () =>{
    if(deck.length === 0){
        throw "No hay Cartas";
    }

    let cartaTomada;

    cartaTomada = deck.pop();

    console.log(cartaTomada);
    console.log(deck);
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

let valor = valorCarta(tomarCarta())

console.log({valor})