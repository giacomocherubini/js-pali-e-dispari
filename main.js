// - Capire se la parola inserita dall’utente è palindroma o no (e quindi output di conseguenza)
// - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Poi generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.


// creo una variabile parola
var parola = prompt("inserisci una parola");
if (parola.split("").reverse().join("") == parola) {
  alert("parola palindroma");
} else {
  alert("parola non palindroma");
}
// .split    restituisce un array
// .reverse  ordina al contrario l'array restituito in precedenza
// .join restituisce


// creo una variabile scelta chiedendo di scegliere pari o dispari
var scelta = prompt("scegli pari o dispari");

// creo una variabile numero chiedendo un numero da 1 a 5
var numero = parseInt(prompt("scegli un numero da 1 a 5"));

// creo una variabile random che genera un numero da 1 a 5
var random = Math.floor(Math.random() * 5) + 1;
console.log(random);

// creo una variabile sommma
var somma = numero + random;

// creo delle condizioni
if ((somma % 2 == 0 && scelta == "pari") || (somma % 2 == 1 && scelta == "dispari")){
  alert("hai vinto!");
} else {
  alert("hai perso!");
}
