
const todoInputEl = document.getElementById("todo-input")
const buttonEl = document.getElementById("add-btn")
const clearTodoButtonEl = document.getElementById("clear-btn")
const todoListEl = document.getElementById("todo-list")
let todoArrayEl = JSON.parse(localStorage.getItem("todos")) || []



const saveTodoItem = () => {
    // retrieve the value from input
    const newItem = todoInputEl.value
    if(!newItem){
        alert("Fill the input")
        return
    }
    // push new item into the array of todos
    todoArrayEl.push(newItem)
    // clear the input
    todoInputEl.value = ""
    // save it into localStorage
    localStorage.setItem("todos", JSON.stringify(todoArrayEl))
    // display
    displayTodo()
}

// display
const displayTodo = () => {
    // get the todo array from localStorage
    todoArrayEl = JSON.parse(localStorage.getItem("todos")) || []

    // clear the ul innerHTML
    todoListEl.innerHTML = ""
    // loop the array and render it
    todoArrayEl.forEach((ele) => {
        todoListEl.innerHTML += `
            <li>${ele}</li>
        `
    })
}

displayTodo()

const clearAllTodos = ()=>{
    localStorage.clear()
    displayTodo()
}

buttonEl.addEventListener("click", saveTodoItem)
clearTodoButtonEl.addEventListener("click", clearAllTodos)