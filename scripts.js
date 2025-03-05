const form = document.querySelector('#form-task');
const taskDef = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addLine();
});

function addLine() {
    const taskName = document.getElementById('taskName');

    if (taskDef.includes(taskName.value.trim()) || taskName.value.trim() === "") {
        alert(`Task already exist or the field is empty`);
    } else {
        taskDef.push(taskName.value.trim());

        let line = '<tr>';
        line += `<td id="th">Tarefa</td>`;
        line += `<td>${taskName.value}</td>`;
        line += `<td id="concluir"><button id="taskConcluida"><i class="fa-solid fa-check"></i></button></td>`;
        line += `<td id="cancelar"><button id="removeTask"><i class="fa-solid fa-trash"></i></button></td>`;
        line += `</tr>`;

        document.querySelector('tbody').innerHTML += line;
    }

    taskName.value = '';

    const removeButtons = document.querySelectorAll('.removeTask');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('tr').remove();
        });
    });
};
