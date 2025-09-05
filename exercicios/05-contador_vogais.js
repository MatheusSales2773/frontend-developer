/* 1. Crie um novo arquivo chamado contador_vogais.js

2. Declare uma variável texto e atribua uma frase a ela (ex: "Hello World
JavaScript").

3. Declare uma variável contadorVogais e inicialize-a com 0

4. Use um laço for para percorrer cada caractere da string texto .
let texto = "Hello World JavaScript";
let contadorVogais = 0;

Execute o programa e teste com diferentes frases.
*/

let texto = "Hello World JavaScript";
let textoMinusculo = texto.toLowerCase(); // para ignorar maiúsculas
let contadorVogais = 0;

for (let i = 0; i < textoMinusculo.length; i++) {
    let caractere = textoMinusculo[i];

    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        contadorVogais++;
    }
}

console.log(`O texto "${texto}" possui ${contadorVogais} vogais.`);
