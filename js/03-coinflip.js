let choice = prompt ('select "Heads or Tails"')
let coinFlip = Math.round(Math.random())
if (choice == 'Heads') {
    if (coinFlip >= 1 ) {
        document.write ('The flip was heads and you chose head...you win!')
    } else {
        document.write ('The flip was tails but you chose heads...you lose!')
    }
} else if (choice == 'Tails') {
    if (coinFlip >= 1 ) {
        document.write ('The flip was tails and you chose tails...you win!')
    } else {
        document.write ('The flip was heads but you chose tails...you lose!')
    }
}