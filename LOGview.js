function loginPage(){
	let thisUser = ''
	let thisPass = ''

	app.innerHTML = /*html*/ `
		<div>LOG IN</div>

		<div>
			<input onchange = 'thisUser = this.value' type = 'text' placeholder='Username'>
			<input onchange = 'thisPass = this.value' type = 'password' placeholder = 'Password'>
			<button onclick = 'checkUser("${thisUser}", "${thisPass}")'>Log In</button>
		</div>

		<div>Don't have an account yet? <span>Create one!</span></div>
	`
}
