let htmldialogue = "Choose a dialogue";

function sidebarDialogues() {
  let html = "";
  for (let i = 0; i < dialogues.length; i++) {
    if (currentuser.id == dialogues[i].userA.id) {
      html += /*html*/ `
				<div onclick = 'openDialogue(${i})' class = 'dialogue-preview'><img src = '${
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
    }
  }
  return html;
}

function openDialogue(i) {
  htmldialogue = /*html*/ `
		<div>
			${messages(i)}
		
		</div>
	`;
  privateMsgView();
}

function messages(i) {
  let html = "";
  for (let j = 0; j < dialogues[i].messages.length; j++) {
    html += /*html*/ `<div class = 'message'>
	 
		</div>`;
  }
  return html;
}
