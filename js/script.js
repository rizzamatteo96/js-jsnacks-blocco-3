//! ------Snack numero 1 - inizio------
//TODO Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// Genero un array di 100 elementi di numeri random
arrayBase = [];
while (arrayBase.length < 100){
    var numero = rndNum(1,100);
    if(!arrayBase.includes(numero)){
        arrayBase.push(numero);
    }
}
console.log(arrayBase);

// Chiedo all'utente di darmi un range da 1 a 100 e controllo che sia all'interno
//* creazione del minimo
var posMin = parseInt(prompt('Estrattore array: Inserisci un valore da 1 a 100'));
while(!chkRange(1,100,posMin)){
    alert('Attenzione! Il dato inserito non è coerente');
    posMin = parseInt(prompt('Estrattore array: Inserisci un NUMERO da 1 a 100'));
}
//* creazione del massimo
var posMax = parseInt(prompt('Estrattore array: Inserisci un valore da 1 a 100'));
while(!chkRange(1,100,posMax)){
    alert('Attenzione! Il dato inserito non è coerente');
    posMax = parseInt(prompt('Estrattore array: Inserisci un NUMERO da 1 a 100'));
}

// trasformo i valori inseriti dall'utente per farli funzionare nel for
posMin--;
posMax--;

//* stampo il risultato nell'html
document.getElementById('ris-1').innerHTML += estrattoreArray(arrayBase,posMin,posMax);
//! ------Snack numero 1 - fine------



//! ------Snack numero 2 - inizio------
//TODO Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// Chiedo all'utente di inserire due parole
var parola1 = prompt('Inserisci la prima parola');
var parola2 = prompt('Inserisci la seconda parola');

//* stampo il risultato nell'html
document.getElementById('ris-2').innerHTML = wordLength(parola1,parola2);
//! ------Snack numero 2 - fine------


//! ------Snack numero 3 - inizio------
//TODO Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// Chiedo all'utente la dimensione dei due array impostando come massimo 10
var arrayL = parseInt(prompt('Inserisci un numero da 1 a 10'));

while(!chkRange(1,10,arrayL)){
    alert('Attenzione! Il dato inserito non è coerente');
    arrayL = parseInt(prompt('Inserisci un numero da 1 a 10'));
}

// Genero un array di arrayL elementi di numeri random
arrayNumeri = [];
while (arrayNumeri.length < arrayL){
    var numero = rndNum(1,100);
    if(!arrayNumeri.includes(numero)){
        arrayNumeri.push(numero);
    }
}
console.log(arrayNumeri);

// Genero un array di arrayL elementi di lettere minuscole random
arrayLettere = [];
while (arrayLettere.length < arrayL){
    //* creo un numero random da 97=codice ascii di 'a' a 122=codice ascii di 'z' 
    var lettera = rndNum(97,122);
    if(!arrayLettere.includes(lettera)){
        arrayLettere.push(lettera);
    }
}

for(var i = 0; i < arrayLettere.length; i++){
    //* trasformo i codici ascii in lettere
    arrayLettere[i] = String.fromCharCode(arrayLettere[i]);
}

console.log(arrayLettere);

//* stampo il risultato nell'html
document.getElementById('ris-3').innerHTML += arrayFusion(arrayNumeri,arrayLettere);
//! ------Snack numero 3 - fine------


//! ------Snack numero 4 - inizio------








//* stampo il risultato nell'html
// document.getElementById('ris-4').innerHTML =
//! ------Snack numero 4 - fine------






//! --------------Sezione per le funzioni----------------
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function estrattoreArray(array,min,max){

    if(min > max){
        var temp = min;
        min = max;
        max = temp;
        alert('Il valore inserito come massimo è minore del minimo. La funzione invertirà automaticamente i due numeri')
    }

    var arrayOut = [];
    for(var i = min; i <= max; i++){
        arrayOut.push(array[i]);
    }

    return arrayOut;

}

function chkRange(min,max,val){
    return val >= min && val <= max && !isNaN(val);
}

function wordLength(word1,word2){
    var msg = 'Le parole sono lunghe uguali e sono: ' + word1 + ' + ' + word2;
    if(word1.length > word2.length){
        msg = 'La prima parola è più lunga. La parola è: ' + word1;
    }
    else if(word2.length > word1.length){
        msg = 'La seconda parola è più lunga. La parola è: ' + word2;
    }

    return msg;
}

function arrayFusion(array1,array2){
    var arrayOut = [];
    for(var i = 0; i < array1.length; i++){
        arrayOut.push(array1[i],array2[i]);
    }
    return arrayOut;
}