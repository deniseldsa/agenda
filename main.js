const form = document.getElementById('form-contato');
const contato = [];
const telefone = [];

let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContato();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if (contato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else {

    contato.push(inputNomeContato.value);
    telefone.push(parseFloat(inputTelContato.value));
    

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;  
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContato() {
    const contatofinal = addcontato();

    document.getElementById ('nome-contato-final').innerHTML = addcontatos;
    document.getElementById('tel-contato-final').innerHTML = addcontatos;
};