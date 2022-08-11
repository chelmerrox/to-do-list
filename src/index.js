import './style.css';

const formSubmission = document.getElementById('form');
const tasks = [];
let indexOne = 0;
const ul = document.querySelector('ul');

const removeTask = (taskObject, index) => {
  const li = document.getElementById(index);

  const { description, completed, indexOne } = taskObject;

  tasks.filter((task) => {
    task.description !== description && task.completed !== completed && task.index !== indexOne
   })

   localStorage.setItem('tasksArray', JSON.stringify(tasks));
   ul.removeChild(li);
};

const displayTask = (taskObject, index) => {
  const li = document.createElement('li');
  li.id = index;

  li.innerHTML = `
    <div class="task">
      <input type="checkbox" id="task-${taskObject.index}" name="task-${taskObject.index}" value=""/>
      <input type="text" name="task-${taskObject.index} value="${taskObject.description}" placeholder="${taskObject.description}"/>
    </div>
  `;

  const verticalLineBtn = document.createElement('button');
  verticalLineBtn.classList.add('vertical-line-btn');
  verticalLineBtn.style.border = 'none';
  verticalLineBtn.style.backgroundColor = 'white';

  const verticalLineIcon = document.createElement('i');
  verticalLineIcon.classList.add('material-icons');
  verticalLineIcon.innerHTML = 'more_vert';
  verticalLineIcon.style.color = '#b2b2b2';

  verticalLineBtn.appendChild(verticalLineIcon);
  li.appendChild(verticalLineBtn);

  verticalLineBtn.onclick = () => {
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('material-icons');
    removeIcon.innerHTML = 'delete';
    removeIcon.style.color = '#b2b2b2';

    verticalLineBtn.removeChild(verticalLineIcon);
    verticalLineBtn.appendChild(removeIcon);

    verticalLineBtn.onclick = () => {
      removeTask(taskObject, index);
    };
  };
  
  ul.appendChild(li);
};

const addTask = (taskObject) => {
  indexOne = (tasks.length === 0)? 1 : tasks.length + 1;

  taskObject.index = indexOne;

  tasks.push(taskObject);
  
  localStorage.setItem('tasksArray', JSON.stringify(tasks));

  displayTask(taskObject, tasks.length - 1);
}

formSubmission.addEventListener('submit', (e) => {
  e.preventDefault();

  const addTaskInput = document.querySelector('.add-task-input'); 

  if (addTaskInput.value !== ''){
    const taskObject = {
      description: addTaskInput.value,
      completed: false
    }

    addTask(taskObject);
  }

  formSubmission.reset();
});