const nomeJogador = "DanielGamer";
let idade = 16;
let online = true;

let jogoFavorito = {nome: "Minecraft", anoLancamento: 2011};

let pontuacoes = [1000, 2000, 3000];

console.log("Nome:", nomeJogador, typeof nomeJogador);
console.log("Idade:", idade, typeof idade);
console.log("Online:", online, typeof online);
console.log("Jogo Favorito:", jogoFavorito, typeof jogoFavorito);
console.log("Pontuações:", pontuacoes, typeof pontuacoes);

idade = 17;
online = false;

console.log("Nova idade:", idade);
console.log("Novo status online:", online);

let soma = pontuacoes[0] + pontuacoes[1] + pontuacoes[2];
let media = soma / pontuacoes.length;

console.log("Média:", media);