/* 1. Conversor de Temperatura: Crie um algoritmo que leia uma temperatura em Celsius e a converta para Fahrenheit. A fórmula é: F = C * 1.8 + 32 . */

let celsius = 22;
let fahrenheit = celsius * 1.8 + 32;

console.log("=== CONVERSOR DE °C EM °F ===");
console.log(`A temperatura ${celsius}°C se equivale a ${fahrenheit}°F.\n`);

/* 2. Cálculo de Média: Desenvolva um algoritmo que leia três notas de um aluno e calcule a média aritmética. Exiba a média na tela. */

let nota1 = 10;
let nota2 = 3;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;

console.log("=== MÉDIA ENTRE NOTAS ===");
console.log(`A média entre as três notas dos alunos será ${media.toFixed(2)} pontos\n`);

/* 3. Troca de Valores: Crie um algoritmo que leia dois números inteiros e troque seus valores. Exiba os valores antes e depois da troca. */

let a = 12;
let b = 55;

console.log("=== ALGORITMO QUE TROCA OS NÚMEROS ===");
console.log("-- Antes da Troca --");
console.log("Valor de A:", a);
console.log("Valor de B:", b);
console.log("-----------------------");

[a, b] = [b, a];

console.log("-- Depois da Troca --");
console.log("Valor de A:", a);
console.log("Valor de B:", b);
console.log("-----------------------");


