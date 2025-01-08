function addTodos(){
    if (text != ''){
        todos.push({task: text, status: 'unchecked'})
        localStorage.setItem('list', JSON.stringify(todos))
        todos = JSON.parse(localStorage.getItem('list'))
        printTodo(displayOption)
        document.querySelector(".taskInput").value = ''
        if(clearBtn.classList.remove('hidden')){
            clearBtn.classList.remove('hidden')
        }
        text = ''
    }
    else {
        return ;
    }
}

function deleteLine(i){
    todos.splice(i, 1)
    localStorage.setItem('list', JSON.stringify(todos))
    todos = JSON.parse(localStorage.getItem('list'))

    if (todos.length === 0){
        clearBtn.classList.add('hidden')
    } 

    printTodo(displayOption)
}

function markAsDone(i){
    (todos[i].status == 'checked') ? todos[i].status = 'unchecked' : todos[i].status = 'checked'
    localStorage.setItem('list', JSON.stringify(todos))
    todos = JSON.parse(localStorage.getItem('list'))
    printTodo(displayOption)
}

function filterTasks(){
    let choice = document.getElementById('display').value
    displayOption = choice
    
    printTodo(displayOption)
}

 function addLinethrough(stat){
    if (stat == 'checked')
      { return 'text-decoration: line-through'} 
    else return 'text-decoration: none'
 }

function clearList(){
    localStorage.removeItem('list')
    todos = []
    printTodo('all')
    clearBtn.classList.add('hidden')
}

function loadAsHidden(){
    if (todos == [] || todos == null){
        return 'hidden'
    } else return
}