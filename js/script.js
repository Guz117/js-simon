/*
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri 
che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice 
quanti e quali dei numeri da indovinare sono stati individuati.
*/





// creo collegamento per stampare i numeri in pagina
let numbers = document.getElementById('numbers');

// creo array vuoto per poter inserire i numeri
let fiveNumbers = [];

// creo i 5 numeri casuali e li inserisco nell'array
while (fiveNumbers.length < 5) {
    const randomNumbers  = Math.floor(Math.random() * 100) + 1;
    if (!fiveNumbers.includes(randomNumbers)) {
        fiveNumbers.push(randomNumbers);
    }
  }
  console.log(fiveNumbers)

// stampo nel dom i 5 numeri casuali
numbers.innerHTML = 'Guarda questi 5 numeri e ricordali: ' + fiveNumbers;


// faccio sparire dal dom i 5 numeri
setTimeout(disappear, 3000);
function disappear() {
    numbers.innerHTML = '';

// creo il timer di 30secondi
let seconds = 30;

const timer = setInterval (function()  { 
      
      if (seconds > 0) {
        console.log('secondi timer', seconds);
        numbers.innerHTML = seconds;
        seconds -= 1;
      } else {
          clearInterval(timer)
          numbers.innerHTML = '';
        // creo il prompt
          let insert = parseInt(prompt('Inserisci i numeri che hai visto separandoli con uno spazio'));
        // faccio riconoscere i numeri  
          if (fiveNumbers.includes(insert)){
              console.log('you win');
          }
      }
      
    }, 1000);
    
}


    
    