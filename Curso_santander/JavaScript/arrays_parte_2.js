// > ARRAYS PARTE 2 - METODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

//Fatiamento: slice
console.log(arr1.slice(1)); //retorna os elementos do array a partir da posição 1 até o final (sem incluir)
console.log(arr1.slice(-3)); //retorna os três últimos
console.log(arr1.slice(0,3)); //retorna os elementos do array a partir da posição indicada pelo parâmetro (neste caso, a partir de 1)(inicio, fim)
console.clear()

//Adicionando elementos: push | unshift

//push
console.log("Antes de adicionar:", arr2);
arr2.push(78, 69, 45); //adiciona
arr2.push(40) //adiciona ao final
console.log("Depois de adicionar com push: ", arr2);

//unshift
console.log("Antes de adicionar com unshift: ", arr2)
arr2.unshift(10, 20); //adicona no começo
console.log("Depois de adicionar com unshift: ", arr2);
console.clear();

//Removendo elementos: pop | shift
//pop
console.log("Antes de remover com pop: ", arr2);
arr2.pop()//remove o ultimo elemento da lista
console.log("Após a remoção com o pop: ", arr2);

const elementoRemovido = arr2.pop( );
console.log("O elemento removido foi: " , elementoRemovido);

//shift
console.log("Antes de remover com shift: ", arr2);
arr2.shift()//remove o primeiro elemento da lista
console.log("Depois de remover com pop: ", arr2);
const elementoRemovidoDoComeco = arr2.shift();
console.log("O elemento removido pelo shift foi: " , elementoRemovidoDoComeco);
console.clear()

//Concatenando arrays: concat
console.log(arr1.concat(arr2)) //junta dois ou mais arrays em um só sem alterá-los
console.log([].concat(arr2, arr1)) //mesma coisa que colocar entre [] e .concat
console.clear()

//Buscando elementos: indexof |  lastindexof
let indiceDoElemento34 = arr1.indexOf(34);//o indexof procura na  posição do array arr1 onde está esse valor e armazena na variavel criada indiceDoElemento34. se tiver mais de um com esse valor sempre retorna o primeiro
console.log(indiceDoElemento34);

let arr3 = [1,3, 2, 3, 4, 3,3 ];
console.log(arr3.indexOf(3)); //retorna o indíce do primeiro elemento encontrado
console.log(arr3.lastIndexOf(3)); //retorna o indice do  último elemento encontrado
console.clear();

//Descobrindo a existencia de um elemento: includes
console.log(arr1.includes(5)); //retorna true se tem o element
console.log(arr1.includes(12));
console.clear();

//Invertendo arrays: reverse
console.log("arr1 normal", arr1);
const arr1Invertido = arr1.reverse();
console.log("arr1 invertida", arr1Invertido)
