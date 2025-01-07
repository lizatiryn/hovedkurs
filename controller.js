function addTodos(){
    if (text != ''){
        todos.push({task: text, status: 'unchecked'})
    }
    else {
        return;
    }
    printTodo(displayOption)
    document.querySelector(".taskInput").value = ''
}

function deleteLine(i){
    todos.splice(i, 1)

    printTodo(displayOption)
}

function markAsDone(i){
    (todos[i].status == 'checked') ? todos[i].status = 'unchecked' : todos[i].status = 'checked'

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