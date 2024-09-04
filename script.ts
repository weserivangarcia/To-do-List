document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#task-input') as HTMLInputElement;
    const addTaskButton = document.querySelector('#add-task-button') as HTMLButtonElement;
    const taskList = document.querySelector('#task-list') as HTMLUListElement;

    function addTask(): void {
        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-button');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            if (taskItem.classList.contains('completed')) {
                completeButton.style.display = 'none';
            } else {
                completeButton.style.display = 'inline-block';
            }
        });

        const RemoveButton = document.createElement('button');
        RemoveButton.textContent = 'X';
        RemoveButton.addEventListener('click', () => {
            taskItem.remove();
        });

        taskItem.appendChild(completeButton);
        taskItem.appendChild(RemoveButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
