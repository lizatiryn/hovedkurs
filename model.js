const app = document.getElementById("app");

let points = 0;
let data;
let numberOfQuestion = 1;
let timeLeft = 10;
let correct = true;
let questions = []
let questTimeInterval 

async function fetchQuestions(){
  try{
  const res = await fetch('https://opentdb.com/api.php?amount=10')
  const loadedQuestions = await res.json();
  
  questions = loadedQuestions.results.map(loadedQuestion => {
    const formatedQuestion = {
    question: loadedQuestion.question,
    correct_answer: loadedQuestion.correct_answer,
    incorrect_answers: [],
    answered: 'unanswered'
    }
    for(i = 0; i < loadedQuestion.incorrect_answers.length; i++){
        formatedQuestion.incorrect_answers[i] = loadedQuestion.incorrect_answers[i]
    }
    return formatedQuestion;
  })
  startScreen()
  }catch(err){
    console.error(err)
  }
}