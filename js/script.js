/*
  Senza eseguire la funzione "guessWhat" indovina cosa viene stampato
  in console per i seguenti valori

  a: ""
  b: ""
  c: ""
  add: ""

  ps.
  Per scoprire se hai risposto corretto lancia la funzione e guarda in console

*/

function guessWhat() {
  let c = 3;


  if (true) {
    let a = 1;
    var b = 2;
    c = 4;
  } else {
    b = 3;
  }

  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);

  let a;

  const add = (x) => {
    return (y) => x + y;
  };

  const result = add(b)(c);
  console.log("add:", result);
}

guessWhat();

/*
Risultato ipotetico:
a:undefined
b:2
c:4
add:6

In realtà "let a;"" riga 31 genera un errore e la funzione non restituisce nessun risultato (va in conflitto la riga 20)

Anche il modo di scrivere la funzione add non è propriamente il modo corretto:
 const add = (x,y) => x + y;

*/