import { list, formEl } from './refs';
import { renderTask } from './tasks';
import { safeTask } from './local-storage-api';
import { renderTaskFromLocalStorage, deleteTask } from './local-storage-api';

renderTaskFromLocalStorage();
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = event.target.taskName.value.trim();
  const taskDescription = event.target.taskDescription.value.trim();

  if (!taskName || !taskDescription) {
    alert('Заповніть всі поля форми!');
  }

  const taskItem = { Title: taskName, Description: taskDescription };
  renderTask(taskItem);

  safeTask(taskItem);
  console.log(taskName);
  console.log(taskDescription);

  formEl.reset();
});
console.log(list);

list.addEventListener('click', event => {
  if (event.target.classList.contains('task-list-item-btn')) {
    const item = event.target.closest('.task-list-item');

    const index = [...list.children].indexOf(item);
    item.remove();

    deleteTask(index);
  }
});
