let elementoTarefaEditada = null;

// 1. Adicionar/Atualizar uma tarefa
let addElement = document.getElementById('add');
addElement.addEventListener('click', (e) => {
  e.preventDefault();
  let entradaElement = document.getElementById('entrada');
  let valor = entradaElement.value;
  if (!valor || valor.trim() == '') {
    // Usuário não informou nada
    return;
  }
  if (elementoTarefaEditada) {
    editarEntrada(valor);
  } else {
    adicionarEntrada(valor);
  }
  entradaElement.value = '';
});

function editarEntrada(valor) {
  elementoTarefaEditada.getElementsByTagName('p')[0].textContent = valor;
  elementoTarefaEditada.classList.remove('target');
  elementoTarefaEditada = null;
}

function adicionarEntrada(valor) {
  let novoElementoTarefa = criarElementoTarefa(valor);

  let elementoListaNaoConcluidas = document.getElementById('nao-concluidas');
  elementoListaNaoConcluidas.appendChild(novoElementoTarefa);
}

function criarElementoTarefa(valor) {
  let elementoItemLista = document.createElement('li');

    let elementoDescricaoTarefa = document.createElement('p');
    elementoDescricaoTarefa.textContent = valor;

    let elementoBotoesAcao = document.createElement('div');
    elementoBotoesAcao.classList.add('botoes');

      let elementoBotaoRemover = document.createElement('button');
      elementoBotaoRemover.classList.add('remover');
      elementoBotaoRemover.addEventListener('click', removerTarefa);

        let elementoIconeRemover = document.createElement('i');
        elementoIconeRemover.classList.add('fa', 'fa-trash-o');

        elementoBotaoRemover.appendChild(elementoIconeRemover);

      let elementoSeparadorAcoesEditar = document.createElement('hr');
      elementoSeparadorAcoesEditar.classList.add('editar');

      let elementoBotaoEditar = document.createElement('button');
      elementoBotaoEditar.classList.add('editar');
      elementoBotaoEditar.addEventListener('click', editarTarefa);

        let elementoIconeEditar = document.createElement('i');
        elementoIconeEditar.classList.add('fa', 'fa-edit');

        elementoBotaoEditar.appendChild(elementoIconeEditar);
      
      let elementoSeparadorAcoesConcluir = document.createElement('hr');

      let elementoBotaoConcluir = document.createElement('button');
      elementoBotaoConcluir.classList.add('concluir');
      elementoBotaoConcluir.addEventListener('click', concluirTarefa);

        let elementoIconeConcluir = document.createElement('i');
        elementoIconeConcluir.classList.add('fa', 'fa-check-circle-o');

        elementoBotaoConcluir.appendChild(elementoIconeConcluir);

      elementoBotoesAcao.appendChild(elementoBotaoRemover);
      elementoBotoesAcao.appendChild(elementoSeparadorAcoesEditar);
      elementoBotoesAcao.appendChild(elementoBotaoEditar);
      elementoBotoesAcao.appendChild(elementoSeparadorAcoesConcluir);
      elementoBotoesAcao.appendChild(elementoBotaoConcluir);

  elementoItemLista.appendChild(elementoDescricaoTarefa);
  elementoItemLista.appendChild(elementoBotoesAcao);

  return elementoItemLista;
}

// 2. Concluir/Desfazer uma tarefa
function concluirTarefa(e) {
  cancelarEventualEdicaoEmAndamento();
  let elementoClicado = e.target;
  let elementoItemLista = elementoClicado.closest('li');
  let elementoListaPai = elementoItemLista.parentNode;

  let elementoListaOrigem = elementoListaPai;
  let elementoListaDestino = null;

  if (elementoListaPai.id == 'nao-concluidas') {
    elementoListaDestino = document.getElementById('concluidas');
  } else {
    elementoListaDestino = document.getElementById('nao-concluidas');
  }

  elementoListaOrigem.removeChild(elementoItemLista);
  elementoListaDestino.appendChild(elementoItemLista);
}

// 3. Remover uma tarefa
function removerTarefa(e) {
  cancelarEventualEdicaoEmAndamento();
  let resultado = confirm('Tem certeza que deseja remover?');
  if (resultado) {
    let elementoClicado = e.target;
    let elementoItemLista = elementoClicado.closest('li');

    elementoItemLista.remove();
  }
}

// 4. Editar uma tarefa
function editarTarefa(e) {
  cancelarEventualEdicaoEmAndamento();
  let elementoClicado = e.target;
  let elementoItemLista = elementoClicado.closest('li');
  elementoTarefaEditada = elementoItemLista;
  let elementoEntrada = document.getElementById('entrada');
  let elementoDescricaoTarefa = elementoItemLista.getElementsByTagName('p')[0];
  elementoEntrada.value = elementoDescricaoTarefa.textContent;

  elementoItemLista.classList.add('target');
}

function cancelarEventualEdicaoEmAndamento() {
  // Removendo referência de Tarefa sendo editada anteriormente
  elementoTarefaEditada = null;

  // Remover classe 'target' dos elementos 'li' (alguma edição anterior a esta)
  let elementosItemLista = document.querySelectorAll('#tarefas li');
  elementosItemLista.forEach(e => e.classList.remove('target'));

  // Zerar conteúdo do campo de entrada
  let elementoEntrada = document.getElementById('entrada');
  elementoEntrada.value = '';
}
