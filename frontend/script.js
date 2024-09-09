const form = document.getElementById('cadastroForm');
const nameInput = document.getElementById('name');
const cpfInput = document.getElementById('cpf');
const phoneInput = document.getElementById('phone');
const messageElement = document.getElementById('message');
const pessoasList = document.getElementById('pessoasList');
const listarPessoasBtn = document.getElementById('listarPessoasBtn');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const pessoaDto = {
        name: nameInput.value,
        cpf: cpfInput.value,
        phone: phoneInput.value,
    };

    try {
        const response = await axios.post('http://localhost:8080/api/cadastro', pessoaDto);
        messageElement.textContent = response.data;
        messageElement.style.color = 'green';

        nameInput.value = '';
        cpfInput.value = '';
        phoneInput.value = '';
    } catch (error) {
        messageElement.textContent = 'Erro ao cadastrar pessoa.';
        messageElement.style.color = 'red';
    }
});

async function listarPessoas() {
    try {
        const response = await axios.get('http://localhost:8080/api/pessoas');
        pessoasList.innerHTML = '';

        response.data.forEach((pessoa) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${pessoa.name} - ${pessoa.cpf} - ${pessoa.phone}`;
            pessoasList.appendChild(li);
        });
    } catch (error) {
        messageElement.textContent = 'Erro ao buscar as pessoas.';
        messageElement.style.color = 'red';
    }
}

listarPessoasBtn.addEventListener('click', listarPessoas);
