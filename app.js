//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listeners
todobutton.addEventListener("click", addTodo);
//Functions
function addTodo(event) {
  //Prevents form from submitting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classlist.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerText = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Check trash todoButton
  const trashButton = document.createElement("button");
  trashButton.innerText = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //Append to list button
  todoList.appendChild(todoDiv);
}
