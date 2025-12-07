export function createCard(rank, suite){
  const cards = {"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13,"A":14}
//   const type = ["H","C","D","S"]
  if (rank in cards){
    return {"rank":rank,"suite":suite,"value":cards[rank]}
  }
}

 export function compareCards(p1Cards,p2Cards){
    if (p1Cards["value"]> p2Cards["value"]){
        return "p1 is won"
    }
    else if (p1Cards["value"]< p2Cards["value"]){
        return "p2 is won"
    }
    else {
        return "War!!!"
    }
 }
 
export function createDeck(){
    const cards = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
    const suit = ["H", "C", "D", "S"]
    let fullCards = []

    for (let i=0; i< suit.length; i++){
        // console.log(suit[i]);
        
        for (let j=0; j< cards.length; j++){
            // console.log(cards[j]);
            
           fullCards.push(createCard(cards[j],suit[i])) 
        }
    }
    return fullCards
}

export function shuffle(deck){
    for (let i=0; i<1000; i++){
        const index1 = Math.floor(Math.random()*deck.length)
        const index2 = Math.floor(Math.random()*deck.length)
        if (index1 == index2){
            i=i-1
        }
        else {
            let temp= null

            temp = deck[index1]  
            deck[index1] = deck[index2] 
            deck[index2] = temp
        }
    }
    return deck
}

let deck = createDeck()
console.log(shuffle(deck));
