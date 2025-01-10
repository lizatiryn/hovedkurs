
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
					<textarea placeholder = 'Share your thoughts'></textarea>
					<label for='picture'>Share a picture</label>
					<input id='picture' type = 'file' accept ='.jpeg, .jpg, .png'>
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