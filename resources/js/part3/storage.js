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

export async function listarBackend() {
    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/
        let response = await fetch("http://localhost:8080/demo/api/todo", {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
            let errorData = await response.json();
            throw new Error('Erro ao tentar recuperar as tarefas: ' + errorData.detail);
        }
        return await response.json();
    } catch(error) {
        console.error(error.message + '\n' + error.stack);
        throw error;
    }
}

export async function adicionarBackend(valor) {
    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/
        let response = await fetch("http://localhost:8080/demo/api/todo", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({descrição: valor})
        });
        if (!response.ok) {
            let errorData = await response.json();
            throw new Error('Erro ao tentar adicionar uma tarefa: ' + errorData.detail);
        }
        return await response.json();
    } catch(error) {
        console.error(error.message + '\n' + error.stack);
        throw error;
    }
}

export async function editarBackend(lookupId, valor) {
    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({descrição: valor})
        });
        if (!response.ok) {
            let errorData = await response.json();
            throw new Error('Erro ao tentar editar uma tarefa: ' + errorData.detail);
        }
        return await response.json();
    } catch(error) {
        console.error(error.message + '\n' + error.stack);
        throw error;
    }
}

export async function removerBackend(lookupId) {
    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
            let errorData = await response.json();
            throw new Error('Erro ao tentar remover uma tarefa: ' + errorData.detail);
        }
    } catch(error) {
        console.error(error.message + '\n' + error.stack);
        throw error;
    }
}

export async function concluirTarefaBackend(lookupId) {
    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}/fazer`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
            let errorData = await response.json();
            throw new Error('Erro ao tentar concluir uma tarefa: ' + errorData.detail);
        }
    } catch(error) {
        console.error(error.message + '\n' + error.stack);
        throw error;
    }
}

export async function desfazerTarefaBackend(lookupId) {
    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}/desfazer`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
            let errorData = await response.json();
            throw new Error('Erro ao tentar desfazer conclusão de uma tarefa: ' + errorData.detail);
        }
    } catch(error) {
        console.error(error.message + '\n' + error.stack);
        throw error;
    }
}
