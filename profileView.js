function profileView(userID) {
	for(let i = 0; i<users.length; i++){
		if (String(users[i].id) == userID){
			user = users[i]
		}
	}


	app.innerHTML = /*html*/ ` 
	${topbar()}
		<div class = 'profile-view'>
			<div class = 'profile-left'>
				<img src='${profilePic(user.name)}'>
				<span class = 'profile-username'>${user.name}</span>
				${returnButtonProfileView(userID)}
				<div class = 'friendbox'><label>Follows</label><span class = 'friendlist'>${friendList(user)}</span></div>
			</div>
			<div class = 'profile-postby'>
				<span class ='postby-title'>Posts by ${user.name}</span>
				<div> ${printPosts('profile view', userID)}</div>
			</div>
		</div>

	`;
}
let thisuserID
function returnButtonProfileView(userID){
	thisuserID = userID
	let html = ''
	if (currentuser.id == userID) {
		html = /*html*/ ` 
		  <button onclick = 'editProfileView()'>Edit profile</button>
	  `;
	 } else{
		html = /*html*/ ` 
		  <button onclick = 'addDeleteFriend("${friendAdded(currentuser.id, userID)}", thisuserID)'>${friendAdded(currentuser.id, userID)}</button>
	  `;
	}
	return html
}

function friendList(userObj){
	let html = ''
	for(let i = 0; i < userObj.friend_list.length; i++){
		html += /*html*/ `
			<div onclick = 'profileView(${userObj.friend_list[i].id})' class = 'friend'><img src = '${userObj.friend_list[i].profile_picture_src}'> <span>${userObj.friend_list[i].name}</span></div>
		`
	}
	return html
}

function friendAdded(curusID, usID){
	let friend
	for(let i = 0; i < users.length; i++){
		if(users[i].id == usID){
			friend = users[i]
			for(let j = 0; j < users.length; j++){
				if(users[j].id == curusID){
					if(users[j].friend_list.includes(friend)){
						return 'Unfollow'
					}
					else return 'Follow'
				}
			}
		}
	}
}

function editProfileView(){
	app.innerHTML += /*html*/ `
	<div id = 'edit-profile'>
				<div>
					<span class = 'close'>X</span>
					<p class = 'message'>${message}</p>
					<span>Change your name</span>
					<input onchange = 'newUsername = this.value' type='text' placeholder = 'New username'>

					<label for='profile-picture'>Change your profile picture</label>
					<input id='profile-picture' onchange = 'changeProfilePicture()' type = 'file' accept ='.jpeg, .jpg, .png'>
					<button onclick = 'editProfile()'>Save</button>
				</div>
			</div>
	`
	editprofile = document.getElementById("edit-profile");

	const closeButton = editprofile.querySelector(".close");
	closeButton.addEventListener("click", close);
}

