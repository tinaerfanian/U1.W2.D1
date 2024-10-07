/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
1. Number (Numero)
Praticamente questo sarebbe come un contenitore per i numeri,possiamo mettere tutti i numeri,sia interi che decimali
  
Esempio:
let number = 7


2. String (Stringa)
Questo contenitore conserva le parole e le frasi, Le parole devono essere messe tra virgolette, un po' come se le stessi racchiudendo in una scatola.

Esempio:
let name = "Epicoders"

3. Boolean (Booleano):
Il Booleano è simile a un interruttore della luce che può essere acceso o spento. può contenere solo vero o falso. È utile per domande semplici come "sei rico?" (vero o falso)

Esempio:
let accesa = true;
let spenta = false;

4. Undefined (Non definito)
Questo è come una scatola vuota. Significa che ho preparato una scatola, ma non ci ho ancora messo nulla dentro. 
Quando creo una variabile e non le do un valore, è "undefined", cioè senza contenuto.

Esempio:
let name;

5. Null
Questa scatola è molto simile a "undefined", ma la differenza è che io decido di svuotarla di proposito.
 Quando dico che qualcosa è "null", vuol dire che sto dicendo "non c'è niente qui, ma lo so e l'ho deciso io!".

 Esempio:
 let empty = null;



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Tina";
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;
console.log(somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Erfanian"; // Riassegnazione
console.log(myName); // Stampa "Erfanian"

// Dimostrazione dell'impossibilità di riassegnare con const
const myConstName = "Esempio"; // Dichiarazione con const
console.log(myConstName); // Stampa "Esempio"
// Questo genererà un errore
// myConstName = "Nuovo Valore"; // Commentato per evitare errore

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */     
let sottrazione = 4 - x; 
console.log(sottrazione); 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

let diversi = name1 !== name2
console.log("name1 è diverso da name2:", diversi);

let lowercaSe = name1.toLowerCase() === name2.toLowerCase();
console.log("name1 e name2 diventano uguali in lowercase:",lowercaSe); 