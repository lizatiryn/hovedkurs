// galleryView();
function galleryView() {
  app.innerHTML = /*html*/ `
		${topbar()}
		<div class = 'gallerypage-body'>
			<h1>Here is your gallery, ${currentuser.name}</h1>

			<div class = 'gallerydiv'>${displayPictures()}</div>
		
		</div>
	`;
}

function displayPictures(){
	html = ''
	for(let i = 0; i < posts.length; i++){
		if(posts[i].authorID == currentuser.id){
			if(posts[i].picturesrc.length > 5){
				html += /*html*/ `
					<div class='image-container-gallery'><img src = '${posts[i].picturesrc}'></div>
				`
			}
		}
	}
	return html
}