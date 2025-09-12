/*
1. Crie um novo arquivo chamado calculadora_media.js .

2. Declare três variáveis para as notas: nota1 , nota2 , nota3 . Atribua valores a
elas (ex: 70, 85, 60).

3. Calcule a média das três notas e armazene em uma variável media .

Use estruturas de decisão para classificar o aluno:
- Se media for maior ou igual a 70: "Aprovado!"
- Se media for maior ou igual a 50 e menor que 70: "Recuperação."
- Se media` for menor que 50: "Reprovado."

Execute o programa e teste com diferentes combinações de notas para verificar todos os
caminhos.
*/

let nota1 = 70;
let nota2 = 85;
let nota3 = 60;
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média: " + media.toFixed(2));

if (media >= 70){
    console.log("Aprovado!")
} else if (media >= 50 && media < 70){
    console.log("Recuperação.")
} else {
    console.log("Reprovado.")
} 
