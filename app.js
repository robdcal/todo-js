// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

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
        todo.remove()
    }
}