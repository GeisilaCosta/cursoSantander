//COERÇÃO (CONVERSÃO) DE TIPOS

// 1°. Coerção Explicita (Manual)
const numero = 10;
console.log(numero, typeof numero);
const numeroEmFormatoDeString = String(numero);//conversão de numero para string
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number("1236554789"))// convertendo a string que esta entre aspas em numero
console.log(parseFloat("1236554789"))
console.log(parseInt("1236554789"))
console.log(Boolean("1236554789"))
console.log(Boolean("0"))// somente zero retorna falso
console.clear();

// 2°. Coerção Implicitada ou Automática do JavaScript

console.log(10 + 1);
console.log(10 + "1"); //Concaternou  o valor da variável número com o valor da string
console.log("10" - 1); //Converteram os valores e realizaram a operação,  tornando-o um número novamente
console.log(10 *'3');
console.log(10 -'gegegeg');//naõ da  conversão pois não é possível converter a string para um número, da o erro NaN (naõ e um numero)
let n = 1 + '1'; //saida "11"
n = n - 1;// n recebe o valor da conta acima menos 1
console.log(n);
console.log(2 + 3 + 4 + "5");
console.log("5" + 6 + 3 +8);
console.log("10" - "4" - "3" - 2 + "5");