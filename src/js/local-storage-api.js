import { list } from './refs';

export function safeTask(taskItem) {
  const tasks = JSON.parse(localStorage.getItem('keyTask')) || [];

  tasks.push(taskItem);

  localStorage.setItem('keyTask', JSON.stringify(tasks));
}

export function renderTaskFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('keyTask')) || [];
  const marcUp = tasks
    .map(
      ({ Title, Description }) =>
        `<li class="task-list-item">
          <button class="task-list-item-btn">Delete</button>
          <h3>${Title}</h3>
          <p>${Description}</p>
        </li>`
    )
    .join('');

  list.innerHTML = marcUp;
}

export function deleteTask(indexToRemove) {
  const tasks = JSON.parse(localStorage.getItem('keyTask')) || [];
  const newTasks = tasks.filter((element, index) => index !== indexToRemove);
  localStorage.setItem('keyTask', JSON.stringify(newTasks));
}
