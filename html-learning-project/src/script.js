// This file contains basic JavaScript code for interactivity and DOM manipulation.

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');
    const input = document.getElementById('todoInput');
    const addBtn = document.getElementById('addTodo');
    const list = document.getElementById('todoList');

    if (button && message) {
        button.addEventListener('click', function() {
            message.textContent = 'Button was clicked!';
        });
    }

    addBtn.addEventListener('click', function() {
        const task = input.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;

            // Add a remove button to each task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.style.marginLeft = '10px';
            removeBtn.addEventListener('click', function() {
                list.removeChild(li);
            });

            li.appendChild(removeBtn);
            list.appendChild(li);
            input.value = '';
        }
    });
});