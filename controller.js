function addPost() {
  let postTime = new Date();

  let formatedDate =
    String(postTime.getDate()).padStart(2, "0") +
    "/" +
    String(postTime.getMonth() + 1).padStart(2, "0") +
    "/" +
    postTime.getFullYear() +
    " " +
    String(postTime.getHours()).padStart(2, "0") +
    ":" +
    String(postTime.getMinutes()).padStart(2, "0");
  if (addpostPicture != null || newpostText.length > 0) {
    if (addpostPicture) {
      posts.push({
        user: currentuser,
        message: newpostText,
        displaydate: formatedDate,
        picturesrc: addpostPicture,
        time: postTime,
      });
    } else {
      posts.push({
        user: currentuser,
        message: newpostText,
        displaydate: formatedDate,
        picturesrc: "",
        time: postTime,
      });
    }
    homePage();
    newpostPic = null;
    newpostText = "";
    message = ''
  }else{
    message = 'You cannot add an empty post :('
    close();
    addPostView()
  }
}

function logOut() {
  let index = users.findIndex((userObj) => userObj.name == currentuser);
  users[index].logged = false;
  currentuser = "";
  loginPage();
}

function checkUser() {
  let user = thisUser;
  let pass = thisPass;
  thisUser = "";
  thisPass = "";
  let userfound;
  for (i = 0; i < users.length; i++) {
    console.log("i promise i check");
    if (users[i].name == user) {
      console.log("name ok");
      if (users[i].password == pass) {
        userfound = true;
        currentuser = users[i].name;
      }
    }
  }
  if (!userfound) {
    if (user.length == 0 || pass.length == 0) {
      message = "Please fill in all fields.";
      loginPage();
    } else {
      message = "Wrong password or username";
      loginPage();
    }
  } else {
    let index = users.findIndex((userObj) => userObj.name == currentuser);
    users[index].logged = true;
    homePage();
    message = "";
  }
}

function signUp() {
  let createpassword = createPass;
  let createusername = createUser;
  let repeatpassword = rptPass;

  if (createusername.length >= 4) {
    if (createpassword === repeatpassword) {
      if (createpassword.length > 5) {
        users.push({
          id: newid,
          name: createusername,
          password: createpassword,
          logged: true,
        });
        currentuser = createusername;
        homePage();
      } else {
        message = "Password must at least contain 6 characters.";
        createPage();
      }
    } else {
      message = "Please enter the same password twice.";
      createPage();
    }
  } else if (createusername.length == 0) {
    message = "Please enter your username.";
    createPage();
  } else if (createusername.length < 4 && createusername.length > 0) {
    message = "Username must at least contain 4 characters.";
    createPage();
  }
}

let addpostPicture = null;

function copyFile() {
  addpostPicture = null;
  let inputPic = document.getElementById("picture");
  addpostPicture = URL.createObjectURL(inputPic.files[0]);
}
