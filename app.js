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
  todoDiv;
}
