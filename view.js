fetchQuestions();
function startScreen() {
  if (questions.length == 0) {
    return;
  }

  app.innerHTML = /*html*/ `
        <h1>Your daily random quiz</h1>
        <button onclick = 'showQuestion()'>PLAY</button>
    `;
}



function showQuestion() {
  app.innerHTML = /*html*/ `
          <div class = 'topbar'><span>Points: ${points}</span> <div id = 'timer'> </div></div>
          
          <div class = 'question'>
          <p>Question ${numberOfQuestion}</p>

          ${questions[numberOfQuestion - 1].question}</div>

          <div class = 'answers'>
              ${showAnswers(numberOfQuestion - 1)}            
          </div>
      `;

  questTimeInterval = setInterval(() => {
      ranOutOfTime()
  }, "10000");
  
}

function showAnswers(ind) {
  let html = "";
  const amountOfAnswers = questions[ind].incorrect_answers.length + 1;
  let posOfRightAnswer = Math.floor(Math.random() * amountOfAnswers);

  for (let i = 0; i < amountOfAnswers; i++) {
    if (i === posOfRightAnswer) {
      html += /*html*/ ` 
              <span class = 'answer' onclick = 'correctAnswer("${questions[ind].correct_answer}", ${ind})'>!${questions[ind].correct_answer}</span>
            `;
    } else if (i < amountOfAnswers - 1) {
      html += /*html*/ ` 
              <span class = 'answer' onclick = 'correctAnswer("${questions[ind].incorrect_answers[i]}", ${ind})'>${questions[ind].incorrect_answers[i]}</span>
            `;
    } else {
      html += /*html*/ ` 
              <span class = 'answer' onclick = 'correctAnswer("${questions[ind].incorrect_answers[i]}", ${ind})'>${questions[ind].incorrect_answers[posOfRightAnswer]}</span>
            `;
    }
  }
  return html;
}

function showResults() {
  app.innerHTML = /*html*/ `
        <div>You got ${points}/10 right. Wanna play again?</div>
        <button onclick = 'location.reload()'>Yes</button>
    `;
}