const ul = document.querySelector('ul');
let i = 0;

export default class Task {
  constructor(tasks = []) {
    this.tasks = tasks;
    this.getFromLocal();
  }

  changeElementAndIcon(taskObject, verticalLineBtn, verticalLineIcon, li) {
    li.classList.add('active');

    const taskContainer = document.querySelector(`.task-${taskObject.i}`);

    const p = document.querySelector(`.task-to-edit-${taskObject.i}`);

    taskContainer.removeChild(p);

    const taskToEditInput = document.createElement('input');
    taskToEditInput.setAttribute('type', 'text');
    taskToEditInput.setAttribute('name', `task-to-edit-${taskObject.i}`);
    taskToEditInput.setAttribute('value', `${taskObject.name}`);
    taskToEditInput.classList.add(`task-to-edit-${taskObject.i}`);
    taskToEditInput.classList.add('task-to-edit');
    taskToEditInput.classList.add('active');
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

      taskObject.name = e.target.value;

      localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
    });

    taskToEditInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        taskContainer.removeChild(taskToEditInput);
        this.editTask(taskObject, taskToEditInput.value);
      }
    });
  }

  displayEditedTask = (editedTaskObject, index) => {
    const taskContainer2 = document.querySelector(`.task-${index + 1}`);

    const p2 = document.createElement('p');
    p2.classList.add(`.task-to-edit-${index + 1}`);
    p2.innerText = `${editedTaskObject.name}`;

    taskContainer2.appendChild(p2);

    document.location.reload();
  }

  editTask(taskObject, taskToEditInputValue) {
    this.tasks = JSON.parse(localStorage.getItem('tasksArray'));

    const taskObjectIndex = taskObject.i;

    this.tasks.forEach((task, k) => {
      if (k === taskObjectIndex - 1) {
        task.name = taskToEditInputValue;

        localStorage.setItem('tasksArray', JSON.stringify(this.tasks));

        this.displayEditedTask(task, k);
      }
    });
  }

  removeCheckedTask(checkedIndexes) {
    const lists = Array.from(document.querySelectorAll('.list'));

    lists.forEach((list, a) => {
      checkedIndexes.forEach((checkedIndex) => {
        if (checkedIndex === a) {
          this.tasks.forEach((task, c) => {
            if (c === checkedIndex) {
              const { isDone } = task;

              this.tasks = this.tasks.filter((obj) => obj.isDone !== isDone);

              this.tasks.forEach((task, j) => {
                task.i = j + 1;
              });
            }
          });
          ul.removeChild(list);
        }
      });
    });

    localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
    document.location.reload();
  }

  removeTask(taskObject, index) {
    const list = document.getElementById(index + 1);

    const { name, i } = taskObject;

    this.tasks = this.tasks.filter((task) => task.name !== name && task.i !== i);

    this.tasks.forEach((task, j) => {
      task.i = j + 1;
    });

    localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
    ul.removeChild(list);
  }

  displayTask(taskObject, index) {
    const li = document.createElement('li');
    li.classList.add('list');
    li.id = index + 1;

    li.innerHTML = `
      <div class="task task-${taskObject.i}">
        <input type="checkbox" class="task-${taskObject.i}" id="task-${taskObject.i}" name="task-${taskObject.i}" value=""/>
        <p class="line-through-text task-to-edit-${taskObject.i}">${taskObject.name}</p>
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
      this.changeElementAndIcon(taskObject, verticalLineBtn, verticalLineIcon, li);

      // Clicking on this again removes the task from the list
      verticalLineBtn.onclick = () => {
        this.removeTask(taskObject, index);
      };
    };

    ul.appendChild(li);

    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    const clearListBtn = document.querySelector('.clear-list-btn');

    let checkedIndexes = [];

    checkboxes.forEach((checkbox, j) => {
      const lineThrough = document.querySelector(`.task-to-edit-${j + 1}`);
      checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
          this.tasks.forEach((task, k) => {
            if (k === j) {
              lineThrough.style.textDecoration = 'line-through';
              task.isDone = true;
              checkedIndexes.push(j);
            }
          });
        } else {
          this.tasks.forEach((task, m) => {
            if (m === j) {
              lineThrough.style.textDecoration = 'none';
              task.isDone = false;
              checkedIndexes = checkedIndexes.filter((checkboxIndex) => checkboxIndex !== j);
            }
          });
        }

        localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
      });
    });

    clearListBtn.onclick = () => {
      checkedIndexes.sort((a, b) => a - b);
      this.removeCheckedTask(checkedIndexes);
    };
  }

  addTask(taskObject) {
    i = (this.tasks.length === 0) ? 1 : this.tasks.length + 1; // index for taskObject

    taskObject.i = i;

    this.tasks.push(taskObject);

    localStorage.setItem('tasksArray', JSON.stringify(this.tasks));

    this.displayTask(taskObject, this.tasks.length - 1);
  }

  // check local storage before adding a task
  // (upon first visit to page or reload of page in the same browser)
  getFromLocal() {
    if (localStorage.getItem('tasksArray')) {
      this.tasks = JSON.parse(localStorage.getItem('tasksArray'));

      this.tasks.forEach((taskObject, index) => {
        this.displayTask(taskObject, index);
      });
    } else {
      localStorage.setItem('tasksArray', '');
      this.tasks = [];
    }
  }
}