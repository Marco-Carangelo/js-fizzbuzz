# js-fizzbuzz

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Risoluzione:

-Per stampare i numeri useremo un ciclo FOR, perchè sappiamo già che ci saranno 100 stampe totali. L'indice del ciclo FOR partirà da 1 è la condizione per uscire dal ciclo sarà "esegui se l'indice è minore o uguale a 0.

-Per ogni ciclo saremo di fronte a quattro possibilità:
    1.Il numero è sia multiplo di 3 che multiplo di 5.
    2.Il numero è multiplo di 3.
    3.Il numero è multiplo di 5.
    4.Il numero non è ne multiplo di 3 ne multiplo di 5.

- Per la risoluzione si può proseguire in due modi:
    1.Si può usare una struttura SWITCH o delle IF ELSE annidate che verifichino per prima la condizione più escludente, cioè quella del caso 1(If i%3===0 && If i%5===0), in modo da stampare FizzBuzz, uscire subito dal ciclo e poi proseguire con un altro numero. Le condizioni del caso 2 e 3 sono autoescludenti, quindi non ha importanza quale viene verificata prima in questo caso, l'importante è che venga tenuto il caso 4 come comportamento di DEFAULT se non si verifica nessuna delle condizioni di cui sopra.

    2.Si può evitare completamente di verificare la condizione del caso 1.
    Possiamo definire una variabile resultPrint di tipo stringa all'inizio del ciclo FOR, che servirà per gestire la stampa del risultato. Si usano due strutture, una IF ed una IF ELSE NON ANNIDATE e verifichiamo prima la condizione del caso 2, successivamente quella del caso 3 e manteniamo il caso 4 come DEFAULT, quindi andrebbe nell'ultima ELSE.
    La prima IF verifica la condizione del caso 2 (i%3===0), se vera assegna alla variabile resultPrint il valore 'Fizz'. La seconda struttura verifica la condizione del caso 3 (i%5===0), se vera entra nel ramo IF e se la variabile concatena alla variabile resultPrint il valore Buzz, in questo modo, se è vuota si stamperà solo Buzz (''+'Buzz'=Buzz), se c'è già il valore Fizz si stamperà FizzBuzz('Fizz'+'Buzz'=FizzBuzz).
    Nell'ELSE della seconda struttura gestiremo il caso di DEFAULT, cioè assegneremo a resultPrint il valore di i.
    Il risultato verrà stampato come ultima operazione del ciclo FOR.

    *Con questa soluzione è fondamentale mantenere quest'ordine nella verifica delle condizioni, altrimenti si invertirebbe l'ordine in cui le variabili verrebbero assegnate nel caso 1, ottenendo la stampa di BuzzFizz. Inoltre le strutture non possono essere IF ELSE annidate, perchè la verifica della condizione del caso 2 ci farebbe uscire dalla struttura, impedendoci di verificare la seconda condizione.

-Le variabili di cui abbiamo bisogno sono:
    -Due costanti di tipo stringa con valori 'Fizz' e 'Buzz'
    -Due costanti con valore 3 e 5 da usare come divisori dell'operazione modulo (%) nelle condizioni.
    -Una variabile resultPrint per stampare il risultato del ciclo FOR.