const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

let todos = [];


// Save todos to localStorage
function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}


// Display todos on the page
function displayTodos() {

    todoList.innerHTML = "";

    todos.forEach(function(todo) {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;

        // Strikethrough completed todo
        if (todo.completed) {
            span.style.textDecoration = "line-through";
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";


        // Complete button
        completeButton.addEventListener("click", function() {

            todo.completed = !todo.completed;

            saveTodos();

            displayTodos();
        });


        // Delete button
        deleteButton.addEventListener("click", function() {

            todos = todos.filter(function(item) {
                return item.id !== todo.id;
            });

            saveTodos();

            displayTodos();
        });


        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}


// Add button
addButton.addEventListener("click", function() {

    const text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    saveTodos();

    todoInput.value = "";

    displayTodos();
});


// Load saved todos
const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
    todos = JSON.parse(savedTodos);
}

displayTodos();