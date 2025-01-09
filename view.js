homePage()
function homePage(){
	app.innerHTML = /*html*/ `
		<div class = 'topbar'>
			<span onclick = 'homePage()'>Guestbook</span>
			<span id = 'user-icon'>User</span>
			<span onclick = ''>Log Out</span>
		</div>

		<div id = 'feed'>
			<p>Welcome back, ${currentuser}! <span onclick = 'addPostView()'>Want to share last news?</span></p>
			${printPosts()}
		</div>
	`
}

function printPosts(){
	let html = ''
	for(let i=0; i < posts.length; i++){
		html += /*html*/ `		
		<div class = 'post'>
			<div class = 'post-top'><span>${posts[i].user}</span><span> ${posts[i].time}</span></div>
			<div class = 'post-body'>${posts[i].message}</div>
			<div class = 'post-bot'>like comment</div>
		</div>`
	}
	return html;
}

function addPostView(){
	if(!addpost){
		app.innerHTML += /*html*/ `
			<div id = 'add-post'>
				<div>
					<span onclick= 'close()'>X</span>
					<input placeholder = 'Share your thoughts'>
					<button onclick = 'addPost()'>Add</button>
				</div>
			</div>
		`

		addpost = document.getElementById('add-post')
	}
}

function close(){
	if(addpost){
		addpost.remove()
		adpost = null
	}
}