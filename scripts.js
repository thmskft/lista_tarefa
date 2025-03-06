const form = document.querySelector('#form-task');
const taskDef = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addLine();
});

function addLine() {
    const taskName = document.getElementById('taskName');

    if (taskDef.includes(taskName.value.trim()) || taskName.value.trim() === "") {
        alert(`Task already exists or the field is empty`);
    } else {
        taskDef.push(taskName.value.trim());

        // Criar a linha para a tabela
        let line = '<tr>';

        // Aplicar ID somente no primeiro 'td' de "Tarefa"
        line += `<td id="th"><strong>Tarefa:</strong></td>`;  // Aqui usamos o ID "th"
        line += `<td class="task-text" id="taskNameValue">${taskName.value}</td>`;  // A tarefa inserida
        line += `<td><button class="taskConcluida"><i class="fa-solid fa-check"></i></button></td>`;  // Botão de concluir
        line += `<td><button class="removeTask"><i class="fa-solid fa-trash"></i></button></td>`;  // Botão de remover
        line += `</tr>`;

        // Adiciona a linha ao corpo da tabela
        document.querySelector('tbody').innerHTML += line;
    }

    // Limpa o campo de input após a inserção
    taskName.value = '';

    // Re-aplicar os eventos de clique nos botões de remover
    const removeButtons = document.querySelectorAll('.removeTask');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const row = this.closest('tr');
            const taskText = row.children[1].innerText.trim();

            const index = taskDef.indexOf(taskText);

            if (index !== -1) {
                taskDef.splice(index, 1);
            }

            row.remove();
        });
    });

    const completeButtons = document.querySelectorAll('.taskConcluida');
    completeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const taskTextElement = this.closest('tr').querySelector('.task-text');
            taskTextElement.style.color = "green";
            taskTextElement.style.fontStyle = "italic";
            taskTextElement.style.textDecoration = "line-through";
        });
    });
};
