function correctAnswer(answer, ind) {
  questions[numberOfQuestion - 1].answered = "answered";
  clearInterval(questTimeInterval)
  if (answer === questions[ind].correct_answer) {
    points++;
    numberOfQuestion++;
    correct = true;
  } else {
    numberOfQuestion++;
    correct = false;
  }
  
  showRightAnswer(ind, correct)
}

function ranOutOfTime() {
    app.innerHTML = /*html*/ `<div>You ran out of time</div>`;
    ++numberOfQuestion
    setTimeout(() => {
      clearInterval(questTimeInterval)
      if (numberOfQuestion - 1 < questions.length) {
        showQuestion();
      } else showResults();
    }, "2000");

}

function showRightAnswer(ind, correct){
  app.innerHTML = /*html*/ `
        <div class= 'show-correct' style = '${bkgColor(correct)}' >Correct answer is : <br> ${questions[ind].correct_answer}</div>
    `;
    setTimeout(()=>{
    if (numberOfQuestion - 1 < questions.length) {
      showQuestion();
    } else showResults();}, '2000')
}

function bkgColor(correct){
  if(correct){
    return 'background-color: rgb(97, 180, 97);'
  } else return 'background-color: rgb(210, 48, 48);'
}