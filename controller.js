function correctAnswer(answer) {
  questions[numberOfQuestion - 1].answered = "answered";
  if (answer === "corr") {
    points++;
    numberOfQuestion++;
    clicked = true;
    if (numberOfQuestion - 1 < questions.length) {
      showQuestion();
    } else showResults();
  } else if (answer === "incorr") {
    numberOfQuestion++;
    clicked = true;
    if (numberOfQuestion - 1 < questions.length) {
      showQuestion();
    } else showResults();
  }
}

function ranOutOfTime() {
    app.innerHTML = /*html*/ `<div>You ran out of time</div>`;
    setTimeout(() => {
      if (numberOfQuestion - 1 < questions.length) {
        showQuestion();
      } else showResults();
    }, "2000");

}
