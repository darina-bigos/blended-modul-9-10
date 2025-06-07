import { list } from './refs';

export function renderTask({ Title, Description }) {
  const marckUp = `<li class="task-list-item">
          <button class="task-list-item-btn">Delete</button>
          <h3>${Title}</h3>
          <p>${Description}</p>
        </li>`;

  list.insertAdjacentHTML('beforeend', marckUp);
}
