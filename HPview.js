show()

function show(){
	let found = false
	for(let i = 0; i < users.length; i++){
		if (users[i].logged === true){
			currentuser = users[i].name
			found = true
			homePage()
			break
		}

	}

	if(!found){
		loginPage()
	}
}

function homePage(){
	app.innerHTML = /*html*/ `
	<div class = 'topbar'>
	<span onclick = 'homePage()'>Guestbook</span>
	<span id = 'user-icon'>User</span>
	<span onclick = 'logOut()'>Log Out</span>
	</div>
	<div id = 'grid-main'>
		<div>
		<ul>
		<li>Friends</li>
		<li>Private Messages</li>
		<li>See Your Gallery</li>
		</ul>
		</div>
		<div id = 'feed'>
		<p>Welcome back, ${currentuser}! <span onclick = 'addPostView()'>Want to share last news?</span></p>
		${printPosts()}
	   </div>
	</div>
		`
	}
	
	function printPosts(){
		let html = ''
		for(let i = posts.length - 1; i >= 0; i--){
			html += /*html*/ `		
			<div class = 'post'>
				<div class = 'post-top'><span>${posts[i].user}</span><span> ${posts[i].displaydate}</span></div>
				<div class = 'post-body'>${posts[i].message}</div>`	
			if(posts[i].picturesrc != ''){
				html += /*html*/`
				<img src = '${posts[i].picturesrc}' class = 'post-pic'>
				`
			}
			html += /*html*/`
				<div class = 'post-bot'>like comment</div>
			</div>`
		}
		return html;
	}
	
	
let addpost = null;
	
function addPostView(){
	if(!addpost){
		app.innerHTML += /*html*/ `
			<div id = 'add-post'>
				<div>
					<span class = 'close'>X</span>
					<textarea onchange = 'newpostText = this.value' placeholder = 'Share your thoughts'></textarea>
					<label for='picture'>Share a picture</label>
					<input id='picture' onchange = 'newpostPic = this.value' type = 'file' accept ='.jpeg, .jpg, .png'>
					<button onclick = 'addPost()'>Add</button>
				</div>
			</div>
		`

		addpost = document.getElementById('add-post')

		const closeButton = addpost.querySelector('.close');
		closeButton.addEventListener('click', close);
	}
}

function close(){
	console.log('wth');
	addpost.remove()
	addpost = null
}