const area = document.getElementById("area");
const adicionar = document.getElementById("adicionar");

adicionar.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Texto adicionado dinamicamente!";

    p.style.backgroundColor = "#FFFACD";
    p.style.padding = "10px";
    p.style.border = "1px solid #f3dc56ff"; 
    p.style.marginTop = "5px";

    area.appendChild(p);
});

