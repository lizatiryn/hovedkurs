function addPost(){
	
}

function checkUser(user, password){
	for(i=0; i< users.length; i++){
	if(users[i].name == user){
		console.log('name ok');
			if(users[i].password == password){
				homePage()
				currentuser = users[i].name
			}
		} 
	}
}