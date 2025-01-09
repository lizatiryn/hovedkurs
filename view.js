fetchQuestions()

function startScreen(){
    if (!data.results) {
         return
     }

    app.innerHTML = /*html*/ `
        <h1>Your daily random quiz</h1>
        <button onclick = 'showQuestion()'>PLAY</button>
    `
}

function showQuestion(){
            app.innerHTML = /*html*/ `
            <div class = 'topbar'><span>Points: ${points}</span> <div id = 'timer'> </div></div>
            
            <div class = 'question'>
            <p>Question ${numberOfQuestion}</p>

            ${data.results[numberOfQuestion-1].question}</div>

            <div class = 'answers'>
                ${showAnswers(numberOfQuestion - 1)}            
            </div>
        `
        setTimeout(()=>{    
            clicked = false
            if (!clicked){
                    ranOutOfTime()   }
    }, '10000')
}

function showAnswers(ind){
    let html = ''
    const quest = data.results[ind]
    const amountOfAnswers = quest.incorrect_answers.length + 1
    let posOfRightAnswer = Math.floor(Math.random() * amountOfAnswers)

    for(let i = 0; i < amountOfAnswers; i++){
        if (i === posOfRightAnswer){
            html += /*html*/ ` 
              <span class = 'answer' onclick = 'correctAnswer("corr")'>!!!!!!!${quest.correct_answer}</span>
            `
        } else if (i < amountOfAnswers - 1){
              html += /*html*/ ` 
              <span class = 'answer' onclick = 'correctAnswer("incorr")'>${quest.incorrect_answers[i]}</span>
            `
        } else {
            html += /*html*/ ` 
              <span class = 'answer' onclick = 'correctAnswer("incorr")'>${quest.incorrect_answers[posOfRightAnswer]}</span>
            `
        }
    }
    return html;
}

function showResults(){
    app.innerHTML = /*html*/ `
        <div>You got ${points}/10 right. Wanna play again?</div>
        <button onclick = 'fetchQuestions()'>Yes</button>
    `

}



//  {
//     "type": "multiple",
//     "difficulty": "medium",
//     "category": "Mythology",
//     "question": "Which of these Roman gods doesn&#039;t have a counterpart in Greek mythology?",
//     "correct_answer": "Janus",
//     "incorrect_answers": [
//         "Vulcan",
//         "Juno",
//         "Mars"
//     ]
// }