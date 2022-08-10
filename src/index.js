import './style.css';

const ul = document.querySelector('ul');
const tasks = [{
  description: 'Task 1',
  completed: false,
  index: 1,
},
{
  description: 'Task 2',
  completed: false,
  index: 2,
},
{
  description: 'Task 3',
  completed: false,
  index: 3,
},
{
  description: 'Task 4',
  completed: false,
  index: 4,
},
];

const createList = () => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
  
    li.innerHTML = `
      <div class="task">
        <input type="checkbox" id="task-${task.index}" name="task-${task.index}" value=""/>
        <input type="text" name="task-${task.index} value="${task.description}" placeholder="${task.description}"/>
      </div>
      <button>
        <i class="vertical-line-icon material-icons">more_vert</i>
      </button>
    `;
  
    ul.appendChild(li);
  });
}

createList();