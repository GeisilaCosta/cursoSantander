//FUNÇÔES

//Definição da função
function saudacao() {
    console.log("Olá! Seja bem-vindo(a)!");
}
//Chamada da função
saudacao();
console.clear();

//Como enviar parametros para as funções
function saudacao() {
    console.log("Olá! Seja bem-vindo(a)!");
}
//Chamada da função
saudacao();

//outros exemplos
function saudacao(nome, curso) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso de ${curso}!`);
}
//chamando a função com os parâmetros
saudacao('Jéssica', 'JavaScript');

//Função que retorna um valor
function saudacao(nome, curso = "javaScript") {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso de ${curso}!`);
}
saudacao("Geisila")
console.clear()

//Retorno da funçaõ
function soma(num1, num2) {
    return num1 + num2
}
const resultado = soma(10, 20);
console.log(resultado);

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true;
    } else { //não e necessario usar o else
        return false;
    }
}
