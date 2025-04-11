//Operadores Boleanos

//igualdade == (ou ===)
//desigualdade != (ou !===)
//maior que  >
//maior ou igual a >=
//menor que  <
//menor ou igual a <=


const numero = 10;
console.log(numero == 10);
console.log(numero != 10);
console.log(numero > 10);
console.log(numero >= 10);
console.log(numero < 10);
console.log(numero <= 10);

console.log(numero == "10");
console.log(numero === "10"); //utilizar sempre.

console.clear(); //limpa o console, nao aparece os acimas

console.log(10 !=10);
console.log(10 != "10");
console.log(10 !== "10"); //utilizar sempre.

//conjunção Lógicas

//AND => && dois  e's juntos, tudo verdadeiro exemplo abaixo
let idade = 26;
let tenhoCNH = true;
const possoDirigir = idade  >= 18 && tenhoCNH === true;
console.log("posso dirigir? ", possoDirigir);

//OR =>  || um ou outro é verdadeiro exemplo abaixo
idade = 40; //atribuindo novo valor a variavel criada acima
const votoFacultativo = idade < 10  || idade > 70;
console.log("voto facultativo?", votoFacultativo);

//NOT =>  ! inversão lógica
const estouGostadoDoCurso =  false;
console.log(!estouGostadoDoCurso)
