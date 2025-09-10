/*
Objetivo: Trabalhar com criação, modificação, acesso e métodos básicos de arrays.

1. Crie um array, com pelo menos 10 elementos.
Use o tema:
o Filmes

2. Para o array criado, faça as seguintes operações:
a) Exiba o primeiro e o último elemento.
b) Substitua o terceiro elemento por um novo valor.
c) Adicione um novo elemento ao final com .push()
d) Remova o primeiro elemento com .shift()
e) Exiba o array atualizado no final de cada etapa.
3. Escreva todos os console.log necessários para mostrar as mudanças.
*/

// a) 

let filmes = ['Corra', '500 dias com ela', 'Django: Livre', 'Aranhaverso', 'Pecadores', 'Interestelar', 'Clube da Luta', 'Tá chuvendo Hambúrguer', 'Vingadores: Ultimato', 'La la land'];
console.log(`Primeiro filme: "${filmes[0]}" | Último filme:, "${filmes[filmes.length - 1]}"`);

// b)

filmes[2] = 'Bastardos Inglorios';
console.log('Modificando elemento do array: ', filmes);

// c)

filmes.push('Rango');
console.log('Novo filme adicionado, adicionado:', filmes);

// d)

let removerPrimeiroFilme = filmes.shift();
console.log(`Primeiro filme removido: "${removerPrimeiroFilme}"`);
console.log('Array atualizado:', filmes);