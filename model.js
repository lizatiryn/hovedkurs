const app = document.getElementById('app')

let users = [
	{
		name: 'test',
		password: '1234', 
	},
]
let posts = [
	{
		user: 'test',
		message: 'is it alive?',
		time: '09/01/2025 13:46',
		picturesrc: '',
	},
	{
		user: 'test',
		message: 'is it alive?',
		time: '09/01/2025 13:47',
		picturesrc: 'pics/referance.png',
	},
]

let currentuser = users[0].name