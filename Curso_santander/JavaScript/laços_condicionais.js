//LAÇOS CONDICIONAIS

const input = require("readline-sync");

const numero_sorteado = 5;

//const numero = input.question("Qual e o  seu numero? ");
//console.log(numero, typeof numero);//input.question, assim ele vai ler  a variavel numero como um texto por isso temos que usar: const numero = Number(input.question("qual e o seu numero?"))

let numero = Number(input.question("Qual e o  seu numero? "));
/*
if (numero == numero_sorteado) {
    console.log("Parabens! Voce acertou!");
} else {
    console.log("Que pena! Voce errou.");
    }
    acima uma opçao*/

    while (numero !== numero_sorteado) { 
        console.log("Voce errou o numero. Tente  novamente.")
        numero = Number(input.question("Qual e o  seu numero? "));
    };

    console.log("Voce acertou! Parabens!"); //quando acertar o numero, vai sair da repetiçao acima i imprimir a mensagem