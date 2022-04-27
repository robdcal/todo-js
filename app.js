// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector(".filter-todo")

// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

// Functions
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault()
    // create todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // create checkmark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    // create delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // append to list
    todoList.appendChild(todoDiv)
    // clear input
    todoInput.value = ''
}

function deleteCheck(event) {
    const item = event.target
    // delete item
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        // animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    // check off item
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    // console.log(todos)
    todos.forEach(function (todo) {
        // console.log(todo)
        if (todo.nodeName !== "#text") {
            switch (event.target.value) {
                case "all":
                    todo.style.display = 'flex'
                    break;
                case "complete":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex'
                    } else {
                        todo.style.display = 'none'
                    }
                    break;
                case "incomplete":
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex'
                    } else {
                        todo.style.display = 'none'
                    }
                    break;
            }
        }
    })
}