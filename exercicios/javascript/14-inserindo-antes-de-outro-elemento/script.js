const minhaLista = document.getElementById("minhaLista");
const item2 = document.getElementById("item2")
const botaoInserir = document.getElementById("inserirItem1")
const mensagem = document.getElementById("mensagem")


botaoInserir.addEventListener("click", () => {
    const itemJaExiste = document.querySelector("#item1");
    if (itemJaExiste){
        alert("Item 1 já inserido.");
        return;
    } else {
        const novoItem = document.createElement("li");

        novoItem.id = "item1";

        novoItem.textContent = "Item 1";
        minhaLista.insertBefore(novoItem, item2);        
    }
}
);

