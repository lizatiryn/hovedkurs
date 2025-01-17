let htmldialogue = "Choose a dialogue";
let typedMsg = "";

function sidebarDialogues() {
  let html = "";
  for (let i = 0; i < dialogues.length; i++) {
    if(dialogues[i].messages.length > 0){


    if (currentuser.id == dialogues[i].userA.id) {
      html += /*html*/ `
				<div onclick = 'openDialogue(${i}, ${dialogues[i].userB.id})' class = 'dialogue-preview'><img src = '${
        dialogues[i].userB.profile_picture_src
      }'> <div><span>${
        dialogues[i].userB.name
      }</span><span class = 'message-preview'>${
        dialogues[i].messages[dialogues[i].messages.length - 1].sender.name
      }: ${
        dialogues[i].messages[dialogues[i].messages.length - 1].message
      }</span></div></div>
			`;
    } else if (currentuser.id == dialogues[i].userB.id) {
      html += /*html*/ `
      <div onclick = 'openDialogue(${i}, ${dialogues[i].userA.id})' class = 'dialogue-preview'><img src = '${
      dialogues[i].userA.profile_picture_src
    }'> <div><span>${
      dialogues[i].userA.name
    }</span><span class = 'message-preview'>${
      dialogues[i].messages[dialogues[i].messages.length - 1].sender.name
    }: ${
      dialogues[i].messages[dialogues[i].messages.length - 1].message
    }</span></div></div>
    `;
    }
  }
  }

  return html;
}

function openDialogue(i, anotherUserID) {
  let anotherUser = users[users.findIndex((user) => user.id == anotherUserID)]
  
  htmldialogue = /*html*/ `
    <div onclick = 'profileView(${anotherUserID})' class = 'another-user'><img src = '${
      anotherUser.profile_picture_src
    }'> <span>${
      anotherUser.name
    }</span></div>

		<div class = 'dialogue-window-box'>
			${messages(i, anotherUserID)}
		
		</div>
	`;
  privateMsgView();
}

function messages(i, anotherUserID) {
  let html = "";
  if(i == -1){
    dialogues.push({
      userA: users[users.findIndex((user) => user.id == currentuser.id)],
      userB: users[users.findIndex((user) => user.id == anotherUserID)],
      messages: []
    })
    i = dialogues.length - 1
    html = /*html*/ `
    <span class = 'send-msg'><input onchange = 'typedMsg = this.value' type = 'text' placeholder = 'Type in your message'><button onclick = 'sendMsg(${i})'>Send</button></span>
    `;
    return html;
  }
  for (let j = 0; j < dialogues[i].messages.length; j++) {
    if (j === 0) {
      html += /*html*/ `
        <div class = 'date-sent'>${dialogues[i].messages[j].senttime
          .getDate()
          .toString()}/${
        dialogues[i].messages[j].senttime.getMonth().toString() + 1
      }</div>
      `;
    }
    if (
      j != 0 &&
      dialogues[i].messages[j].senttime -
        dialogues[i].messages[j - 1].senttime >
        86400000
    ) {
      html += /*html*/ `
        <div class = 'date-sent'>${dialogues[i].messages[j].senttime
          .getDate()
          .toString()}/${
        dialogues[i].messages[j].senttime.getMonth().toString() + 1
      }</div>
      `;
    }
    html += /*html*/ `<div class = 'message-dialogue ${addClass(i, j)}'>
      <span>${
        dialogues[i].messages[j].message
      }</span> <span class = 'time-sent'>${dialogues[i].messages[j].senttime
      .getHours()
      .toString()}:${dialogues[i].messages[j].senttime
      .getMinutes()
      .toString().padStart(2, '0')}</span>
		</div>`;
  }
  html += /*html*/ `
  <span class = 'send-msg'><input onchange = 'typedMsg = this.value' type = 'text' placeholder = 'Type in your message'><button onclick = 'sendMsg(${i})'>Send</button></span>
  `;
  return html;
}

function addClass(i, j) {
  if (dialogues[i].messages[j].sender.id == currentuser.id) {
    return "your-msg";
  } else return "";
}

function sendMsg(i) {
  let newMsg;
  let anotherUser
  if (typedMsg.length > 0) {
    if (currentuser.id === dialogues[i].userA.id) {
      newMsg = {
        sender: dialogues[i].userA,
        message: typedMsg,
        senttime: new Date(),
      };
      anotherUser = dialogues[i].userB
    } else if (currentuser.id === dialogues[i].userB.id) {
      newMsg = {
        sender: dialogues[i].userB,
        message: typedMsg,
        senttime: new Date(),
      };
      anotherUser = dialogues[i].userA
    }
    dialogues[i].messages.push(newMsg);
    openDialogue(i, anotherUser.id);
    typedMsg = "";
  }
  else return
}
