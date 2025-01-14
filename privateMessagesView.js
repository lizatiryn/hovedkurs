privateMsgView()
function privateMsgView(){
	app.innerHTML = /*html*/`
	${topbar()}
		<div class= 'private-msg-box'>
			<aside>${sidebarDialogues()}</aside>
			<div>${htmldialogue}</div>
		</div>
	`
}