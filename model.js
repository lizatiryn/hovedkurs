const app = document.getElementById('app')

let users = [
	{
		id: 0,
		name: 'test',
		password: '1234', 
		logged: true,
		profile_picture_src: 'pics/user.jpg',
		friend_list: []
	},
	{
		id: 1,
		name: 'test2',
		password: '1234', 
		logged: false,
		profile_picture_src: 'pics/user.jpg',
		friend_list: []
	},
]

users[0].friend_list.push(users[1])
users[1].friend_list.push(users[0])

let posts = [
	{
		user: 'test',
		message: 'is it alive?',
		displaydate: '09/01/2025 13:46',
		picturesrc: '',
		time: new Date(2025, 0, 9, 13, 46),
		authorID: 0
	},
	{
		user: 'test',
		message: 'is it alive?',
		displaydate: '09/01/2025 13:47',
		picturesrc: 'pics/referance.png',
		time: new Date(2025, 0, 9, 13, 47),
		authorID: 0
	},
]

let currentuser = users[0]
// .name
// let currentuserID = users[0].id

let thisUser = ''
let thisPass = ''

let newid = users[users.length - 1].id + 1

let message = ''

let newpostText = ''
// let newpostPic 

let newProfilePic
let newUsername = ''