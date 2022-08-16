import './style.css';

import Task from './modules/task.js';

const formSubmission = document.getElementById('form');
//let i = 0;
export const ul = document.querySelector('ul');

const taskOne = new Task(); // instance for a task

formSubmission.addEventListener('submit', (e) => {
  e.preventDefault();

  const addTaskInput = document.querySelector('.add-task-input'); 

  if (addTaskInput.value !== ''){
    const taskObject = {
      description: addTaskInput.value,
      completed: false
    }

    taskOne.addTask(taskObject);
  }

  formSubmission.reset();
});
