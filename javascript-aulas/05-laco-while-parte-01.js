// 1. Exemplo com DO...WHILE (executa pelo menos uma vez)

let i = 0;
do {
    console.log("O valor de i é: " + i);
    i++;
} while (i < 5);

console.log("\n--- Exemplo com condição falsa inicial ---");


// 2. Exemplo com DO...WHILE e condição falsa desde o início

let j = 10;
do {
    console.log("O valor de j é: " + j);
    j++;
} while (j < 5); // Aqui a condição já começa falsa

console.log("\n--- Exemplo mais complexo: Jogo do número secreto ---");


// 3. While em um exemplo mais complexo (adivinhação)

let numeroSecreto = 7;
let palpite = 1;

console.log("Tente adivinhar o número secreto entre 1 e 10.\n");

while (palpite !== numeroSecreto) {
    if (palpite < numeroSecreto) {
        console.log("Palpite:", palpite, "Errado. Tente um número maior.");
        palpite++;
    } else {
        console.log("Palpite:", palpite, "Errado. Tente um número menor.");
        palpite--;
    }
}

console.log("\nVocê acertou o palpite:", palpite);
