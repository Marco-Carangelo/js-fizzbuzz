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

    2. Si possono usare  tre strutture IF consecutive.
    Definiamo una variabile resultPrint all'inizio del ciclo FOR e le diamo valore ''.
    Nella prima struttura IF verifichiamo la prima condizione (i%3 = 0), se vera concateniamo a result print il valore Fizz.
    Nella seconda struttura IF verifichiamo la seconda condizione (i%5 = 0), se vera concateniamo a resultPrint il valore Buzz.
    Nella terza  struttura IF assegnamo a resultPrint il valore di i se il numero non è ne multiplo di 3 ne multiplo di 5.
    In questo caso è fondamentale che venga verificato prima il caso multiplo di 3 e successivamente il caso multiplo di 5, altrimenti le stringhe verrebbero concatenate al contrario.


-Le variabili di cui abbiamo bisogno sono:
    -Due costanti di tipo stringa con valori 'Fizz' e 'Buzz'
    -Due costanti con valore 3 e 5 da usare come divisori dell'operazione modulo (%) nelle condizioni.
    -Una variabile resultPrint per stampare il risultato del ciclo FOR.