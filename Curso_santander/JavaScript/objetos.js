//OBJETOS

//Como criar um objeto no javascript
let pessoa = {
    "nome": "Joao", 
    "idade": 25,
}
console.log(pessoa);//Acessando todos dados do Objeto armazenado na variavel
console.log("Nome: ", pessoa.nome)//Acessando os dados do Objeto armazenado na variavel  pelo nome da chave
console.log("Nome: ", pessoa.idade)
console.log("Nome: ", pessoa["nome"]) //forma alternativa de acesso o objeto mais usual

//Como adicionar um par chave-valor
pessoa.altura = 1.55
pessoa.nome = "geisila" //substitui o joao por geisila
console.log(pessoa);

//Como remover um par chave-valor
delete pessoa.altura; //remove a chave altura e seu valor associado
console.log(pessoa);
console.clear()

//como percorrer
for (let chave in pessoa){
    console.log(pessoa)
}