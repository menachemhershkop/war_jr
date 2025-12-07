export function createCard(rank, suite){
  const cards = {"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13,"A":14}
  const type = ["H","C","D","S"]
  if (rank in cards){
    return {"rank":rank,"suite":suite,"value":cards[rank]}
  }
}

// console.log(createCard("6","H"));
