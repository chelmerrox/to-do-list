import './style.css';

const formSubmission = document.getElementById('form');
let tasks = [];
let i = 0;
const ul = document.querySelector('ul');

const changeElementAndIcon = (taskObject, verticalLineBtn, verticalLineIcon) => {
  const taskContainer = document.querySelector(`.task-${taskObject.i}`);

  const p = document.querySelector(`.task-to-edit-${taskObject.i}`);

  taskContainer.removeChild(p);

  const taskToEditInput = document.createElement('input');
  taskToEditInput.setAttribute('type', 'text');
  taskToEditInput.setAttribute('name', `task-to-edit-${taskObject.i}`);
  taskToEditInput.setAttribute('value',`${taskObject.description}`);
  taskToEditInput.classList.add(`task-to-edit-${taskObject.i}`);
  taskToEditInput.setAttribute('autocomplete', 'off');

  taskContainer.appendChild(taskToEditInput);

  const removeIcon = document.createElement('i');
  removeIcon.classList.add('material-icons');
  removeIcon.classList.add('remove-icon');
  removeIcon.innerHTML = 'delete';
  
  verticalLineBtn.removeChild(verticalLineIcon);
  verticalLineBtn.appendChild(removeIcon);

  taskToEditInput.addEventListener('change', (e) => {
    e.preventDefault();

    taskObject.description = e.target.value;

    localStorage.setItem('tasksArray', JSON.stringify(tasks));
  });

  taskToEditInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
      taskContainer.removeChild(taskToEditInput);
      editTask(taskObject, taskToEditInput.value);
    }
  });
}

const displayEditedTask = (editedTaskObject, index) => {
  const taskContainer2 = document.querySelector(`.task-${editedTaskObject.i}`);

  const p2 = document.createElement('p');
  p2.classList.add(`.task-to-edit-${editedTaskObject.i}`);
  p2.innerText = `${editedTaskObject.description}`;

  taskContainer2.appendChild(p2);

  const verticalLineBtn2 = document.getElementById(`vertical-line-btn-${editedTaskObject.i}`);

  const verticalLineIcon2 = document.createElement('i');
  verticalLineIcon2.classList.add('material-icons');
  verticalLineIcon2.classList.add('vertical-line-icon');
  verticalLineIcon2.innerHTML = 'more_vert';

  const removeIcon2 = document.querySelector('.remove-icon');

  verticalLineBtn2.removeChild(removeIcon2);
  verticalLineBtn2.appendChild(verticalLineIcon2);

  // Click on the vertical line button once to show Remove icon & change <p> to <input>
  verticalLineBtn2.onclick= () => {
    changeElementAndIcon(editedTaskObject, verticalLineBtn2, verticalLineIcon2);

    // Clicking on this again removes the task from the list
    verticalLineBtn.onclick = () => {
      removeTask(editedTaskObject, index);
    }; 
  }
}

const editTask = (taskObject, taskToEditInputValue) => {
  tasks = JSON.parse(localStorage.getItem('tasksArray'));
  
  let taskObjectIndex = taskObject.i;

  tasks.forEach((task, k) => {
    if (k === taskObjectIndex - 1) {
      task.description = taskToEditInputValue;

      console.log(`tasks: ${tasks}`);

      localStorage.setItem('tasksArray', JSON.stringify(tasks));

      displayEditedTask(task, tasks.length - 1);
    }
  });
}

const removeTask = (taskObject, index) => {
  const list = document.getElementById(index + 1);

  // needed so that we're able to filter & store the new result in local storage
  //taskObject.completed = true;

  const { description, completed, i } = taskObject;

  tasks = tasks.filter((task) => task.description !== description && task.completed === completed && task.i !== i );

  // Change the value of i & store in the i property for the specific task
  tasks.map((task, j) => {
    task.i = j + 1;
  });

  localStorage.setItem('tasksArray', JSON.stringify(tasks));
  ul.removeChild(list);
};

const displayTask = (taskObject, index) => {
  const li = document.createElement('li');
  li.id = index + 1;

  li.innerHTML = `
    <div class="task task-${taskObject.i}">
      <input type="checkbox" id="task-${taskObject.i}" name="task-${taskObject.i}" value=""/>
      <p class="task-to-edit-${taskObject.i}">${taskObject.description}</p>
    </div>
  `;

  const verticalLineBtn = document.createElement('button');
  verticalLineBtn.classList.add('vertical-line-btn');
  verticalLineBtn.id = `vertical-line-btn-${taskObject.i}`;

  const verticalLineIcon = document.createElement('i');
  verticalLineIcon.classList.add('vertical-line-icon');
  verticalLineIcon.classList.add('material-icons');
  verticalLineIcon.innerHTML = 'more_vert';

  verticalLineBtn.appendChild(verticalLineIcon);
  li.appendChild(verticalLineBtn);

  // Click on the vertical line button once to show Remove icon & change <p> to <input>
  verticalLineBtn.onclick = () => {
    changeElementAndIcon(taskObject, verticalLineBtn, verticalLineIcon);

    // Clicking on this again removes the task from the list
    verticalLineBtn.onclick = () => {
      removeTask(taskObject, index);
    }; 
  };

  ul.appendChild(li);
};

const addTask = (taskObject) => {
  i = (tasks.length === 0)? 1 : tasks.length + 1; //index for taskObject
  
  taskObject.i = i;

  tasks.push(taskObject);
  
  localStorage.setItem('tasksArray', JSON.stringify(tasks));

  displayTask(taskObject, tasks.length - 1);
}

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
