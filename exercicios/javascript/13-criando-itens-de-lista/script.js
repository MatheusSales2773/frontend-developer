const lista = document.getElementById("lista");
const adicionarItem = document.getElementById("adicionarItem");
let contador = 0;

adicionarItem.addEventListener("click", () => {
    contador++;

    const novoItem = document.createElement("li");

    novoItem.textContent = `Item ${contador}`;

    lista.appendChild(novoItem);
});

