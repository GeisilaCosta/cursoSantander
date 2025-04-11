// > ARRAYS


// - Como criar um array?
let arr = ["geisila", 40, 1.53, true]
console.log(arr)

// - Como acessar elementos do array
console.log("Acessando o primeiro elemento: ", arr[0])
console.log("Acessando o segundo elemento: ", arr[1])
console.log("Acessando o terceiro elemento: ", arr[2])
console.log("Acessando o quarto elemento: ", arr[3])

//como obter o tamanho do array?
console.log('Tamanho do Array: ' , arr.length);

console.clear()

// - Percorrendo arrays
for (let i = 0; i  < arr.length; i++) {
    console.log(arr[i]); //exemplo1 mostra os valores armazenados  da variavel
}

for (let elemento of arr) {
    console.log(elemento); //Exemplo2 é uma forma mais moderna, mas a mesma funçaõ do de cima
}
//console.clear

for (let indice in arr) {
    //console.log(indice)   //exemplo 3 mostra os indices dos elementos  que estão sendo percorridos no array
    
    console.log(indice, arr[indice]) //exemplo 4 mostra os valores correspondentes aos indices
}
