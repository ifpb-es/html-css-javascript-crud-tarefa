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
        let response = await fetch("http://localhost:8080/demo/api/todo", {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (response.ok) { // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
            return await response.json();
        } else {
            // TODO: tratar erro adequadamente
        }
    } catch(ex) {
        // TODO: tratar erro adequadamente
        console.error(ex);
    }
}

export async function adicionarBackend(valor) {
    try {
        let response = await fetch("http://localhost:8080/demo/api/todo", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({descrição: valor})
        });
        if (response.ok) { // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
            return await response.json();
        } else {
            // TODO: tratar erro adequadamente
        }
    } catch(ex) {
        // TODO: tratar erro adequadamente
        console.error(ex);
    }
}

export async function editarBackend(lookupId, valor) {
    try {
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({descrição: valor})
        });
        if (response.ok) { // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
            return await response.json();
        } else {
            // TODO: tratar erro adequadamente
        }
    } catch(ex) {
        // TODO: tratar erro adequadamente
        console.error(ex);
    }
}

export async function removerBackend(lookupId) {
    try {
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (!response.ok) { // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
            // TODO: tratar erro adequadamente
        }
    } catch(ex) {
        // TODO: tratar erro adequadamente
        console.error(ex);
    }
}

export async function concluirTarefaBackend(lookupId) {
    try {
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}/fazer`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (!response.ok) { // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
            // TODO: tratar erro adequadamente
        }
    } catch(ex) {
        // TODO: tratar erro adequadamente
        console.error(ex);
    }
}

export async function desfazerTarefaBackend(lookupId) {
    try {
        let response = await fetch(`http://localhost:8080/demo/api/todo/${lookupId}/desfazer`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          }
        });
        if (!response.ok) { // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
            // TODO: tratar erro adequadamente
        }
    } catch(ex) {
        // TODO: tratar erro adequadamente
        console.error(ex);
    }
}
