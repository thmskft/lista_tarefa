const form = document.querySelector('#form-task');
const taskDef = [];
const orderedList = document.querySelector('.orderedList');

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

        let taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        taskItem.innerHTML = `
            <span class="task-text">${taskName.value}</span>
            <button class="taskConcluida"><i class="fa-solid fa-check"></i></button>
            <button class="removeTask"><i class="fa-solid fa-trash"></i></button>
        `;

        orderedList.appendChild(taskItem);
    }

    taskName.value = '';

    document.querySelectorAll('.removeTask').forEach(button => {
        button.addEventListener('click', function () {
            const taskItem = this.closest('.task-item');
            const taskText = taskItem.querySelector('.task-text').innerText.trim();

            const index = taskDef.indexOf(taskText);
            if (index !== -1) {
                taskDef.splice(index, 1);
            }

            taskItem.remove();
        });
    });

    document.querySelectorAll('.taskConcluida').forEach(button => {
        button.addEventListener('click', function () {
            const taskTextElement = this.closest('.task-item').querySelector('.task-text');
            taskTextElement.style.color = "green";
            taskTextElement.style.fontStyle = "italic";
            taskTextElement.style.textDecoration = "line-through";
        });
    });
}
