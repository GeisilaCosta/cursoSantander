//LACO NUMERICO: FOR

const input = require("readline-sync");

//O problema

/*const nota1 = Number(input.question("Informe a noata 1: "));
const nota2 = Number(input.question("Informe a noata 2: "));
const nota3 = Number(input.question("Informe a noata 3: "));

let media = (nota1 + nota2 + nota3) / 3; */ //o problema sera resolvido de outra forma


//Acumulador
let acumulador = 0;
acumulador = acumulador + 10;// ou
acumulador += 10;//ou
acumulador++;//adiciona uma unidade ao valor da variavel
console.log(acumulador);

acumulador = acumulador - 3;
console.log(acumulador);
acumulador -= 3;
console.log(acumulador);
console.clear

//Estrutura FOR
for  (let i = 0; i < 10; i++){
    console.log("repetição", i)
}
console.clear
for  (let i = 10; i <= 20; i++){
    console.log("repetição", i)
}
console.clear
for  (let i = 10; i > 0 ; i--){
    console.log("repetição", i)
}

console.clear();

//resolvendo o problema inicial
let nota;//variavel vazia pois o usuario que dara o valor
let soma = 0;
for (let i=1;i<=3;i++){
    nota = Number(input.question(`Informe a nota ${i} do Aluno: `))
    soma = soma + nota;
    }
    console.log(`A media do aluno é ${soma/3}`);
