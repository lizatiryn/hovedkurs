const app = document.getElementById('app')
const dropdown = document.getElementById('display')
let clearBtn
let list

let todos
if(JSON.parse(localStorage.getItem('list')) == null) todos = []
else todos = JSON.parse(localStorage.getItem('list'))


let text = ''
let displayOption = 'all'