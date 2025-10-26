// Gerencia cadastro, armazenamento e exibição de usuários (cards)

const form = document.getElementById('form-cadastro');
const nameInput = document.getElementById('inputAddress');
const emailInput = document.getElementById('inputEmail4');
const ageInput = document.getElementById('inputPassword4');
const roleInput = document.getElementById('inputAddress2');
const buscaInput = document.getElementById('busca-usuarios');
const cardsGrid = document.getElementById('cards-grid');
const template = document.getElementById('user-card-template');
const listaVazia = document.getElementById('lista-vazia');

let users = JSON.parse(localStorage.getItem('users')) || [];

function save() {
    localStorage.setItem('users', JSON.stringify(users));
}

function createUser(name, email, age, role) {
    return {
        id: String(Date.now()),
        name,
        email,
        age: Number(age) || 0,
        role
    };
}

function addUser(user) {
    users.unshift(user);
    save();
    renderCards(buscaInput ? buscaInput.value : '');
}

function removeUser(id) {
    users = users.filter(u => u.id !== id);
    save();
    renderCards(buscaInput ? buscaInput.value : '');
}

function validarCampos() {
    if (!nameInput || !emailInput || !ageInput || !roleInput) return false;
    if (!nameInput.value.trim()) { nameInput.focus(); return false; }
    if (!emailInput.value.trim()) { emailInput.focus(); return false; }
    if (!ageInput.value.trim()) { ageInput.focus(); return false; }
    if (!roleInput.value.trim()) { roleInput.focus(); return false; }
    return true;
}

function renderCards(filter = '') {
    if (!cardsGrid || !template) return;
    cardsGrid.innerHTML = '';
    const q = String(filter).trim().toLowerCase();
    const filtered = users.filter(u => u.name.toLowerCase().includes(q));

    if (!listaVazia) {
        // no placeholder, just render or not
    } else {
        listaVazia.style.display = filtered.length === 0 ? 'block' : 'none';
    }

    filtered.forEach(user => {
        const clone = template.content.cloneNode(true);
        // template root may be the column or direct card
        const col = clone.querySelector('.col-sm-6, .col-md-4, .col-lg-3') || clone.firstElementChild;
        const card = clone.querySelector('.user-card') || (col && col.querySelector('.user-card'));
        if (!card) return;

        card.dataset.id = user.id;
        const nameEl = card.querySelector('.user-name');
        const ageEl = card.querySelector('.user-age');
        const emailEl = card.querySelector('.user-email');
        const roleEl = card.querySelector('.user-role');
        const btnRemove = card.querySelector('.btn-remove');

        if (nameEl) nameEl.textContent = user.name;
        if (ageEl) ageEl.textContent = String(user.age);
        if (emailEl) emailEl.textContent = user.email;
        if (roleEl) roleEl.textContent = user.role;

        if (btnRemove) {
            btnRemove.addEventListener('click', (ev) => {
                ev.stopPropagation();
                removeUser(user.id);
            });
        }

        card.addEventListener('dblclick', () => removeUser(user.id));

        cardsGrid.appendChild(col);
    });
}

// bind submit (se existir)
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validarCampos()) return alert('Preencha todos os campos.');
        const user = createUser(
            nameInput.value.trim(),
            emailInput.value.trim(),
            ageInput.value.trim(),
            roleInput.value.trim()
        );
        addUser(user);
        form.reset();
        nameInput.focus();
    });
}

// bind busca
if (buscaInput) {
    buscaInput.addEventListener('input', (e) => {
        renderCards(e.target.value);
    });
}

// inicializa
renderCards();