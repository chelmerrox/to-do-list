import _ from 'lodash';
import './style.css';

const ul = document.querySelector('ul');
const tasks = [{
    description: 'Task 1',
    completed: false,
    index: 1
  },
  {
    description: 'Task 2',
    completed: false,
    index: 2
  }, 
  {
    description: 'Task 3',
    completed: false,
    index: 3
  }
];

tasks.forEach((task) => {
  const li = document.createElement('li');

  li.innerHTML = `
    <div class="task">
      <input type="checkbox" id="task-${task.index}" name="task-${task.index}" value=""/>
      <label for="task-${task.index}">Task ${task.index}</label>
    </div>
    <i class="material-icons">more_vert</i>
  `;

  ul.appendChild(li);
});