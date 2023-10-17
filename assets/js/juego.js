let deck = [];
let tipos = ['C','D','H','S']
let especiales = ['A','K','Q','J']

const baraja =() =>{
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
    console.log(deck)

    deck= _.shuffle(deck)


    console.log(deck)

    return deck;
}

baraja()

