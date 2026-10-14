const STORAGE_KEY = 'simple-task-board';
const statuses = ['todo', 'in-progress', 'done'];
let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  statuses.forEach((status) => {
    const list = document.querySelector(`#${status}-list`);
    const matchingTasks = tasks.filter((task) => task.status === status);

    list.replaceChildren(...matchingTasks.map(createTaskCard));
    document.querySelector(`#${status}-count`).textContent = matchingTasks.length;

    if (matchingTasks.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = 'No tasks';
      list.append(empty);
    }
  });
}

function createTaskCard(task) {
  const card = document.createElement('article');
  card.className = 'task';

  const title = document.createElement('p');
  title.textContent = task.title;

  const select = document.createElement('select');
  select.setAttribute('aria-label', `Change status for ${task.title}`);
  select.innerHTML = `
    <option value="todo">To Do</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
  `;
  select.value = task.status;
  select.addEventListener('change', () => {
    task.status = select.value;
    saveTasks();
    renderTasks();
  });

  card.append(title, select);
  return card;
}

document.querySelector('#task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#task-input');
  const title = input.value.trim();

  if (!title) return;

  tasks.push({
    id: crypto.randomUUID(),
    title,
    status: 'todo'
  });

  saveTasks();
  renderTasks();
  input.value = '';
  input.focus();
});

renderTasks();
