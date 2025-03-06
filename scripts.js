const taskDef = [];

$('#form-task').submit(function (e) {
    e.preventDefault();
    addLine();
});

function addLine() {
    const taskName = $('#taskName').val().trim();

    if (taskDef.includes(taskName) || taskName === "") {
        alert(`Task already exists or the field is empty`);
    } else {
        taskDef.push(taskName);

        let line = '<li class="task-item">';
        line += `<span class="task-text">${taskName}</span>`;
        line += `<button class="taskConcluida"><i class="fa-solid fa-check"></i></button>`;
        line += `<button class="removeTask"><i class="fa-solid fa-trash"></i></button>`;
        line += '</li>';

        $('.orderedList').append(line);
    }

    $('#taskName').val('');

    $('.orderedList').on('click', '.removeTask', function () {
        const row = $(this).closest('li');
        const taskText = row.find('.task-text').text().trim();

        const index = taskDef.indexOf(taskText);

        if (index !== -1) {
            taskDef.splice(index, 1);
        }

        row.remove();
    });

    $('.orderedList').on('click', '.taskConcluida', function () {
        const taskTextElement = $(this).closest('li').find('.task-text');
        taskTextElement.css({
            'color': 'green',
            'font-style': 'italic',
            'text-decoration': 'line-through'
        });
    });
}
