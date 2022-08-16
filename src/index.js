import './style.css';

import Task from './modules/task.js';

const formSubmission = document.getElementById('form');

const taskOne = new Task(); // instance for a task

formSubmission.addEventListener('submit', (e) => {
  e.preventDefault();

  const addTaskInput = document.querySelector('.add-task-input');

  if (addTaskInput.value !== '') {
    const taskObject = {
      name: addTaskInput.value,
      isDone: false,
    };

    taskOne.addTask(taskObject);
  }

  formSubmission.reset();
});
