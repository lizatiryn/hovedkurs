show()
function show(){
    app.innerHTML = /*HTML*/ `
    
    <div class='top-grid'>
    <h1>TO DO</h1> 
    <select id='display' onchange = 'filterTasks()'>
        <option value='all'>All</option>
        <option value='done'>Done</option>
        <option value='undone'>Undone</option>
    </select> 
    </div>

    <input class='taskInput' type = "text" onchange='text = this.value'>
    <button onclick='addTodos()' class = 'add-btn'>Add</button>
    <ul id ='todo-list'> </ul>
    <button onclick = 'clearList()' id = 'clear-btn'>CLEAR LIST</button>
    `
    clearBtn = document.getElementById('clear-btn')

    if (JSON.parse(localStorage.getItem('list')) == null || JSON.parse(localStorage.getItem('list')).length === 0){
        clearBtn.classList.add('hidden')
    } else if (clearBtn.classList.remove('hidden')){
        clearBtn.classList.remove('hidden')
    }
}

list = document.getElementById('todo-list')

function printTodo(disop){
    let html = ''
    
    if(disop == 'all'){
        for(let i = 0; i < todos.length; i++){
            html += /*html*/ `
                <li>
                    <input onclick ='markAsDone(${i})' type = 'checkbox' ${todos[i].status}>
                    <span style = '${addLinethrough(todos[i].status)}' id='task${i}'>${todos[i].task}</span>
                    <button onclick = 'deleteLine(${i})'>X</button>
                </li>
            `

        }
    } else if(disop == 'done'){
        for(let i = 0; i < todos.length; i++){
            if(todos[i].status == 'checked'){
                html += /*html*/ `
                <li>
                    <input onclick ='markAsDone(${i})' type = 'checkbox' ${todos[i].status}>
                    <span style = '${addLinethrough(todos[i].status)}' text id='task${i}'>${todos[i].task}</span>
                    <button onclick = 'deleteLine(${i})'>X</button>
                </li>
            `
            }
        }
    } else {
        for(let i = 0; i < todos.length; i++){
            if(todos[i].status == 'unchecked'){
                html += /*html*/ `
                <li>
                    <input onclick ='markAsDone(${i})' type = 'checkbox' ${todos[i].status}>
                    <span style = '${addLinethrough(todos[i].status)}' id='task${i}'>${todos[i].task}</span>
                    <button onclick = 'deleteLine(${i})'>X</button>
                </li>
            `
            }
        }
    }
    list.innerHTML = html
}