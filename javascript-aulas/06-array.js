/* EXEMPLOS BÁSICOS DE ARRAYS */
// 1. Declarando e inciando array vazio
let meuArrayVazio = [];
console.log('Exemplo 1 - Array Vazio:', meuArrayVazio);

// 2. Um Array com frutas
let frutas = ["Maçã", "laranja", "Uva"]
console.log('Exemplo 2 - Array com strings', frutas)

// 3. Declarando array com número
let numero = [10, 20, 30, 40, 50];
console.log('Exemplo 3 - Array de número', numero);

let misto = ['Texto', 123, true, null];
console.log('Exemplo 4 - Array Misto', misto)

// 4. Acessando Array pelo Índice
console.log('Primeira fruta:', frutas[0]);
console.log('Terceiro número:', numero[2])

// 5. Modificando elementos do Array

frutas[1] = 'Pera';
console.log('Exemplo 5 - Array de Frutas modificadas', frutas)

// 6. Obtendo o tamanho de um Array
console.log('Exemplo 6 - Tamanha do Array de frutas:', frutas.length);

// 7. Adicionando elementos ao final de um Array 
frutas.push('Morango');
console.log('Exemplo - Array de frutas, adicionada:', frutas);

// 8. Removendo último elemento de um Array
let ultimaFruta = frutas.pop();
console.log('Exemplo 8 - Array de frutas, removendo:', ultimaFruta);

// 9. Adicionar elemento ao inicio de um Array
frutas.unshift('abacaxi');
console.log('Exemplo 8 - Array de Frutas adicionando:', frutas);

// 10. Remover o primeiro elemento de um Array
let primeiraFruta = frutas.shift();
console.log('Exemplo 10 - Remover primeiro item:', primeiraFruta);

// 11. Interando sobre um Array com um loop tradicional

for (let i = 0; i < numero.length; i++){
    console.log(numero[i]);
};

// 12. Irerando sobre um array com for...of(mais moderno e simples)
console.log('Exemplo 11 - Iterando sobre um array de frutas com for...of');
for (let fruta of frutas) {
    console.log(fruta);
}