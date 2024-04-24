const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("list");
const pMessage = document.querySelector("p");
pMessage.textContent = "Please write something";

function addTodo(text) {
    const li = document.createElement("li");
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