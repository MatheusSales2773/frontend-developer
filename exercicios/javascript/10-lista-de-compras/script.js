let produtos = documentquerySelectorAll(".produto");

for (let pro of produtos){
    console.log("Produto:", pro.textContent);
    pro.style.color = "red";
}



let itens = document.querySelectorAll(".item");

for (let item of itens){
    console.log(item.textContent);
    item.style.color = "blue"
}

