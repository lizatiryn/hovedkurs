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

let dialogues = [
	{
		userA: users[0],
		userB: users[1],
		messages: [
		]
	},
	{
		userA: users[0],
		userB: users[1],
		messages: [
		]
	},
]

dialogues[0].messages.push(			
	{
		sender: dialogues[0].userA,
		message: 'Hello world!',
		senttime: new Date(2025, 0, 14, 13, 43)
	},
	{
		sender:dialogues[0].userB,
		message: 'Do you still dream about being a programist? Take pills please.',
		senttime: new Date(2025, 0, 14, 13, 45)
	}
)
dialogues[1].messages.push(			
	{
		sender: dialogues[0].userA,
		message: 'Hello world!',
		senttime: new Date(2025, 0, 14, 13, 43)
	},
	{
		sender:dialogues[0].userB,
		message: 'Do you still dream about being a programist? Take pills please.',
		senttime: new Date(2025, 0, 14, 13, 45)
	}
)

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



//  TO DO:

// - likes/comments
// - gallery
// - save
// - dialogues