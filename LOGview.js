function clearMsgLogin(){
	message = ''
	loginPage()
}

function loginPage(){

	app.innerHTML = /*html*/ `
	
	<div class='login-signup-page'>
			<div class='login-signup-title'>SIGN IN</div>
			<p class = 'message'>${message}</p>
			<input onchange = 'thisUser = this.value' type = 'text' placeholder='Username' >
			<input onchange = 'thisPass = this.value' type = 'password' placeholder = 'Password'>
			<button onclick = 'checkUser()'>Sign In</button>
			<div>Don't have an account yet? <span class='create-login' onclick = 'clearMsgCreate()'>Create one!</span></div>
		</div>

	`

}

let createUser = ''
let createPass = ''
let rptPass = ''
function clearMsgCreate(){
	message = ''
	createPage()
}
function createPage(){

	app.innerHTML = /*html*/ `
	
	<div class='login-signup-page'>
		<div class='login-signup-title'>Sign up</div>
		<p class = 'message'>${message}</p>
		<input onchange = 'createUser = this.value' type = 'text' placeholder='Create username' >
		<input onchange = 'createPass = this.value' type = 'password' placeholder = 'Create password'>
		<input onchange = 'rptPass = this.value' type = 'password' placeholder = 'Repeat password'>
		<button onclick = 'signUp()'>Create an account</button>
		<div>Already have an account? <span class='create-login' onclick = 'clearMsgLogin()'>Log in!</span></div>
	</div>

`
}