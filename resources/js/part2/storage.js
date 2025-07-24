/*

[
    {
        "lookupId": "20946716-88f3-4bce-8633-13ee2f94e064",
        "descrição": "Descrição 6",
        "concluídoEm": null
    },
    {
        "lookupId": "61c337b2-ca59-4237-9e9a-22ada58509b1",
        "descrição": "Descrição 2",
        "concluídoEm": "2025-03-06T00:27:37.272881"
    }
]

*/

let data = null;
let dataInLocalStorage = localStorage.getItem('tarefas');
if (dataInLocalStorage != null) {
    data = JSON.parse(dataInLocalStorage);
} else {
    data = {
        tarefas: []
    };
}

function atualizarDadosStorage() {
    localStorage.setItem('tarefas', JSON.stringify(data));
}

export function listarBackend() {
    return [...data.tarefas];
}

export function adicionarBackend(valor) {
    let tarefaAdicionada = {
        lookupId: new Date().getTime(),
        descrição: valor,
        concluídoEm: null,
    };
    data.tarefas.push(tarefaAdicionada);
    atualizarDadosStorage();
    return tarefaAdicionada;
}

export function editarBackend(lookupId, valor) {
    for (let tarefa of data.tarefas) {
        if (tarefa.lookupId == lookupId) {
            tarefa.descrição = valor;
            atualizarDadosStorage();
            return tarefa;
        }
    }
}

export function removerBackend(lookupId) {
    data.tarefas = data.tarefas.filter(t => t.lookupId != lookupId);
    atualizarDadosStorage();
}

export function concluirTarefaBackend(lookupId) {
    for (let tarefa of data.tarefas) {
        if (tarefa.lookupId == lookupId) {
            tarefa.concluídoEm = new Date();
            break;
        }
    }
    atualizarDadosStorage();
}

export function desfazerTarefaBackend(lookupId) {
    for (let tarefa of data.tarefas) {
        if (tarefa.lookupId == lookupId) {
            tarefa.concluídoEm = null;
            break;
        }
    }
    atualizarDadosStorage();
}
