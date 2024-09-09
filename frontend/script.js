const form = document.getElementById('cadastro-form');
const listarPessoasBtn = document.getElementById('listar-pessoas');
const pessoasList = document.getElementById('pessoas-list');

// Função para cadastrar uma pessoa
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const phone = document.getElementById('phone').value;

    try {
        const response = await axios.post('http://localhost:8080/api/cadastro', {
            name,
            cpf,
            phone
        });

        alert(response.data);
        form.reset();
    } catch (error) {
        alert('Erro ao cadastrar pessoa. Verifique os dados e tente novamente.');
        console.error(error);
    }
});

// Função para listar pessoas cadastradas
listarPessoasBtn.addEventListener('click', async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/pessoas');
        pessoasList.innerHTML = '';

        response.data.forEach(pessoa => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `${pessoa.name} - ${pessoa.cpf} - ${pessoa.phone}`;
            pessoasList.appendChild(listItem);
        });
    } catch (error) {
        alert('Erro ao listar pessoas cadastradas.');
        console.error(error);
    }
});
