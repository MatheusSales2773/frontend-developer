// 1. STRING
let usuario = "Maria";
let mensagem = "Bem vinda, " + usuario + "!";
console.log("1. String:", mensagem, "Tipo:", typeof mensagem);


// 2. NUMBER - Idade, notas, cálculos
let preco = 19.99;
let quantidade = 3;
let total = preco * quantidade;
console.log("2. NUMBER: Total da compra vai ser = R$", total, "Tipo:", typeof total);

// 3. BIGINT - Trabalhar com valores financeiros enormes ou IDs
let idBlockchain = 123456789;
console.log("3. BIGINT (ID Blockchain):", idBlockchain, "Tipo:", typeof idBlockchain)

// 4. BOOLEAN - Controle de fluxo, condiçóes, status
let estaLogado = true;
if (estaLogado) {
    console.log("4. BOOLEAN: Usuário está logado", estaLogado, "Tipo:", typeof estaLogado)
} else {
    console.log("4. BOOLEAN: Usuário não está logado", estaLogado, "Tipo:", typeof estaLogado)
};

// 5. UNDEFINED - Variável ainda não definida (ex: cadastro incompleto)
let telefone;
console.log("5. UNDEFINED: Telefone =", telefone, "Tipo:", typeof (telefone));


// 6. SYMBOL - Usado para criar identificadores (ex: chave de objeto)
let chave1 = Symbol("chaveAPI");
let chave2 = Symbol("chaveAPI");
console.log("6. SYMBOL: São Iguais?", chave1 == chave2); //false


// 7. NULL - Valor intencionalmente vazio(ex: campo sem resposta)
let resposta = null;
console.log("7. NULL: Resposta não foi recebida", resposta, "Tipo:", typeof resposta);

// Exemplo:
let aluno = {
    nome: "Matheus",            //STRING
    idade: 20,                  //NUMBER
    matricula: 250910123,       //BIGINT
    ativo: true,                //BOOLEAN
    telefone: undefined,        //UNDEFINED
    token: Symbol("token"),     //SYMBOL
    responsavel: null           //NULL
};
console.log("Objeto aluno com diferentes tipo primitivos:");
console.log(aluno);
