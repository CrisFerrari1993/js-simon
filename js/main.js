/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Il layout lo decidete voi.
Non perdetevi solo nei suoi dettagli da subito, ma date priorità a farlo funzionare.
Poi se volete lo abbellite quanto volete, quando funziona tutto.
*/
// Assegno alle variabili il valore dom per visualizzarle a schermo
let play = document.getElementById('play');
let countDown = document.getElementById('timer');
let risultato = document.getElementById('resoult');
let simonNumbers = document.getElementById('simon-numbers');
let cover = document.getElementById('cover hidden');
let saluto = 'Benvenuto a Simon, premi sul bottone per cominciare!';
// saluto l'utente prima di coninciare la partita
simonNumbers.innerHTML = saluto;
//genero un evento al click del bottone
play.addEventListener('click', () => {
    //svuoto il paragrafo per prepararlo all area di gioco
    simonNumbers.innerHTML='';
    //creo una variabile col valore 30
    let seconds = 30;
    let userNum = [];
    let score = 0;
    let numChecked = [];
    //creo un loup a tempo 
    const clock = setInterval(
        () => {
            if(seconds === 0){
                simonNumbers.innerHTML = 'Tempo Scaduto!!!'
                for(let i = 0; i < 5; i++){
                    let userInput = parseInt(prompt('Inserisci i numeri che hai visto: '));
                }
            }
        }
    )
    }
);
// Funzione che mette in un array 5 numeri
function genArrRandomNum (minNum, maxNum, arrLenght) {
    //array da popolare 
    let arr = [];
    //ciclo che mi popolera l'array
    while(arr.length < arrLenght) {
        //generezione numero casuale
        let newNum = casualNumbers(minNum, maxNum);
        arr.push(newNum); 
    }
    return arr;
};
//Funzione che genera un numero random da 0 a 100;

function casualNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}