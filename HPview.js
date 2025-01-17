show()

function show() {
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].logged === true) {
      currentuser = users[i];
      found = true;
      homePage();
      break;
    }
  }

  if (!found) {
    loginPage();
  }
}

function topbar() {
  html = /*html*/ `
	<div class = 'topbar'>
	<span onclick = 'homePage()'>Guestbook</span>
	<span onclick = 'profileView("${currentuser.id}")' id = 'user-icon'><img src='${profilePic(currentuser.name)}'></span>
	<span onclick = 'logOut()'>Log Out</span>
	</div>
	`;
  return html;
}

function homePage() {
  app.innerHTML = /*html*/ `
  ${topbar()}
  <div id = 'grid-main'>
		<div>
		<ul>
		<li onclick = 'privateMsgView()'>Private Messages</li>
		<li onclick = 'galleryView()'>See Your Gallery</li>
		</ul>
		</div>
		<div id = 'feed'>
		<p>Welcome back, ${
      currentuser.name
    }! <span onclick = 'addPostView()'>Want to share last news?</span></p>
		${printPosts('home page', -1)}
	   </div>
	</div>
		`;
}

function printPosts(forView, userID) {
  let html = "";
  if (forView == "home page") {
    for (let i = posts.length - 1; i >= 0; i--) {
      html += /*html*/ `		
			<div class = 'post'>
				<div class = 'post-top'><span onclick = 'profileView("${posts[i].authorID}")'>${posts[i].user}</span><span> ${posts[i].displaydate}</span></div>
				<div class = 'post-body'>${posts[i].message}</div>`;
      if (posts[i].picturesrc != "") {
        html += /*html*/ `
				<img src = '${posts[i].picturesrc}' class = 'post-pic'>
				`;
      }
      html += /*html*/ `
				<div class = 'post-bot'>
				<span class = 'like'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#262626" aria-label="Like" class="_8-yf5" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" clip-rule="evenodd"/></svg>
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#212121" fill-rule="evenodd" d="M5.25 18A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v8.5A3.25 3.25 0 0 1 18.75 18h-5.738L8 21.75a1.25 1.25 0 0 1-1.999-1V18h-.75Zm7.264-1.5h6.236a1.75 1.75 0 0 0 1.75-1.75v-8.5a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v8.5c0 .966.784 1.75 1.75 1.75h2.249v3.75l5.015-3.75Z"/></svg>
				</span></div>
			</div>`;
    }
  } else if( forView == 'profile view'){
		// let userObjID = users.findIndex((user) => user.id == userID)

	for (let i = posts.length - 1; i >= 0; i--) {
		if(posts[i].authorID == userID){
			html += /*html*/ `		
				<div class = 'post'>
					<div class = 'post-top'><span onclick = 'profileView("${posts[i].authorID}")'>${posts[i].user}</span><span> ${posts[i].displaydate}</span></div>
					<div class = 'post-body'>${posts[i].message}</div>`;
			if (posts[i].picturesrc != "") {
			  html += /*html*/ `
					<img src = '${posts[i].picturesrc}' class = 'post-pic'>
					`;
			}
			html += /*html*/ `
					<div class = 'post-bot'>like comment</div>
				</div>`;
		 }
	  }
	  if(html == ''){
		html += /*html*/ `
		<div>No posts yet</div>
	</div>`;
	  }
	}
  return html;
}

let addpost = null;

function addPostView() {
  if (!addpost) {
    app.innerHTML += /*html*/ `
			<div id = 'add-post'>
				<div>
					<span class = 'close'>X</span>
					<p class = 'message'>${message}</p>
					<textarea onchange = 'newpostText = this.value' placeholder = 'Share your thoughts'></textarea>
					<label for='picture'>Share a picture</label>
					<input id='picture' onchange = 'copyFile()' type = 'file' accept ='.jpeg, .jpg, .png'>
					<button onclick = 'addPost()'>Add</button>
				</div>
			</div>
		`;

    addpost = document.getElementById("add-post");

    const closeButton = addpost.querySelector(".close");
    closeButton.addEventListener("click", close);
  }
}
