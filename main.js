const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const pMessage = document.createElement("p");
pMessage.textContent = "Please write something";
const li = document.createElement("li");

function addTodo(text) {
    li.textContent = text;
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = todoInput.value.trim(); 

    if (text !== "") {
        addTodo(text);
        todoInput.value = "";
        if (pMessage.parentNode) {
            pMessage.parentNode.removeChild(pMessage);
        }
    } else {
        if (!pMessage.parentNode) {
            todoList.appendChild(pMessage);
        }
    }
});

const todoClearButton = document.getElementById("clear-button");

todoClearButton.addEventListener("click", function() {
    todoList.innerHTML = ""; 
});

li.addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
  });

  todoForm.reset()