import './style.css';

const formSubmission = document.getElementById('form');
let tasks = [];
let i = 0; // to be stored as the value of the index (i) property in taskObject
const ul = document.querySelector('ul');


const localData = localStorage.getItem('tasksArray')? JSON.parse(localStorage.getItem('tasksArray')) : [];

const removeTask = (taskObject, index) => {
  const list = document.getElementById(index);

  // needed so that we're able to filter & store the new result in local storage
  //taskObject.completed = true;

  const { description, completed, i } = taskObject;

  //tasks = tasks.filter((task) => task.description !== description && task.completed === completed && task.i !== i );

  let array = localData.filter(task => task.i !== index );

  // Change the value of i & store in the i property for the specific task
  array.map((task, j) => {
    task.i = j + 1;
  });

  localStorage.setItem('tasksArray', JSON.stringify(array));
  document.location.reload();
};

const update = (input, index) => {
  let x = localData[index - 1];
  x.description = input.value;

  let object = {
    description: input.value,
    completed: false,
    i: index
  };

  let z = localData.filter((item) => item.i !== index);
  console.log(z);

  console.log(`index: ${index}`);
  console.log(`Typeof index: ${typeof(index)}`);

  let y = z.splice(index - 1, 0, {...object});
  console.log(`y: ${JSON.stringify(y)}`);

  localStorage.setItem('tasksArray', JSON.stringify(y));

  //document.location.reload();
};

const displayTask = (task) => {
  /* const li = document.createElement('li');
  li.id = index; */

  /* li.innerHTML = `
    <div class="task task-${taskObject.index}">
      <input type="checkbox" id="task-${taskObject.index}" name="task-${taskObject.index}" value=""/>
      <button class="task-to-edit">${taskObject.description}</button>
    </div>
  `; */

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task');
  console.log(`task: ${task}`);
  taskContainer.classList.add(`task-${task.i}`);
  taskContainer.id = `task-${task.i}`;

  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.id = `checkbox-${task.i}`;
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', `task-${task.i}`);
  checkbox.setAttribute('value', '');

  const p = document.createElement('p');
  p.classList.add('task-description');
  p.classList.add('task-to-edit');
  p.innerText = task.description;

  const verticalLineBtn = document.createElement('button');
  verticalLineBtn.classList.add('vertical-line-btn');
  verticalLineBtn.style.border = 'none';
  verticalLineBtn.style.backgroundColor = 'white';

  const verticalLineIcon = document.createElement('i');
  verticalLineIcon.classList.add('material-icons');
  verticalLineIcon.innerHTML = 'more_vert';
  verticalLineIcon.style.color = '#b2b2b2';

  verticalLineBtn.appendChild(verticalLineIcon);
  taskContainer.append(checkbox, p, verticalLineBtn);

  verticalLineBtn.addEventListener('click',  () => {
    const task1 = localData[task.i];
    const eachTask = document.getElementById(`task-${task.i}`);
    eachTask.innerHTML = '';

    const newInput = document.createElement('input');

    console.log(task);
    newInput.setAttribute('type', 'text');
    newInput.value = task.description;

    newInput.addEventListener('focusout', () => {
      update(newInput, task.i);
    });

    const removeIcon = document.createElement('i');
    removeIcon.classList.add('material-icons');
    removeIcon.innerHTML = 'delete';
    removeIcon.style.color = '#b2b2b2';

    verticalLineBtn.removeChild(verticalLineIcon);
    verticalLineBtn.appendChild(removeIcon);

    /* verticalLineBtn.onclick = () => {
      removeTask(task, task.index);
    }; */

    removeIcon.addEventListener('click', () => {
      removeTask(task, task.i);
    });

    eachTask.append(newInput, removeIcon);
  });
  
  //ul.appendChild(task);
  return taskContainer;
};

localData.forEach((task) => {
  console.log(task);

  let display = displayTask(task);

  ul.append(display);
});

const addTask = (taskObject) => {
  i = (tasks.length === 0)? 1 : tasks.length + 1; //index for taskObject

  taskObject.i = i;

  tasks.push(taskObject);
  
  localStorage.setItem('tasksArray', JSON.stringify(tasks));

  displayTask(taskObject, tasks.length - 1);

  document.location.reload();
}

// Old implementation
/* const editTask = (editTaskInput, editTaskValue) => {
  editTaskValue = editTaskInput.value;

  if (editTaskValue !== '') {
    tasks.map((element, k) => {
      if ()
    });
  }
}; */

const getFromLocal = () => {
  if (localStorage.getItem('tasksArray')) {
    tasks = JSON.parse(localStorage.getItem('tasksArray'));

    tasks.forEach((taskObject, index) => {
      displayTask(taskObject, index);
    });
  } else {
    localStorage.setItem('tasksArray', '');
    tasks = [];
  }
};

// check local storage before adding a task (upon first visit to page or reload of page in the same browser)
getFromLocal();

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

/* let editTaskInput = Array.from(document.querySelectorAll('.task-to-edit'));
console.log(editTaskInput); */

// Old implementation
/* editTaskInput.forEach((taskInput) => {
  const editTaskValue = taskInput.value;
  // const editTaskValue = taskInput.getAttribute('value');
  //const editTaskValue = taskInput.getAttribute('placeholder');

  console.log(`taskInput: ${taskInput}`);
  console.log(`taskInput[0]: ${taskInput[0]}`);
  console.log(`taskInput[1]: ${taskInput[1]}`);
  console.log(`editTaskValue: ${editTaskValue}`);

  editTaskInput.onclick = () => {
    editTaskValue = '';
    editTaskInput.removeAttribute('placeholder');
    editTask(editTaskInput, editTaskValue);
  };
}); */

// New Implementation
/* editTaskInput.forEach((taskInput) => {
  const taskContainer  = document.querySelector('.task');

  console.log(taskInput);

  taskInput.onclick = () => {
    const editTaskInput2 = document.createElement('input');
    editTaskInput2.classList.add('edit-task-input-2');
    editTaskInput2.setAttribute('type', 'text');
    editTaskInput2.setAttribute('name', 'edit-task-input-2');
    editTaskInput2.setAttribute('value', `${taskInput.innerText}`);
    editTaskInput2.setAttribute('placeholder', '');

    taskContainer.removeChild(taskInput);
    taskContainer.appendChild(editTaskInput2);
  };
}) */
