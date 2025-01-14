// show()

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
				<div class = 'post-bot'>like comment</div>
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
