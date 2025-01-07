startScreen()

function startScreen(){
    app.innerHTML = /*html*/ `
        <button onclick = 'showQuestion()'>PLAY</button>
    `
}

function showQuestion(){

        if(numberOfQuestion-1 <= data.results.length){
            // timeLeft = 10;
            app.innerHTML = /*html*/ `
            <div class = 'topbar'><span>Points: ${points}</span> <div id = 'timer'> </div></div>
            <div class = 'question'>${data.results[numberOfQuestion-1].question}</div>

            <div class = 'answers'>
                ${showAnswers(numberOfQuestion - 1)}            
               </div>
        `
        setTimeout(()=>{
            if(timeLeft == -1){
                numberOfQuestion++
                showQuestion()
            }
            else{
                ranOutOfTime()
                // setTimeout(showQuestion(), '1000')
            }
        }, '10000')
            }
        else return;
    showResults()
}

function ranOutOfTime(){
    app.innerHTML = /*html*/ `<div>You ran out of time</div>`
    numberOfQuestion++
}

function showAnswers(ind){
    let html = ''
    const quest = data.results[ind]
    const amountOfAnswers = quest.incorrect_answers.length + 1

    let posOfRightAnswer = Math.floor(Math.random() * amountOfAnswers)

    for(let i = 0; i < amountOfAnswers; i++){
        if (i === posOfRightAnswer){
            html += /*html*/ ` 
              <span onclick = 'correctAnswer("corr")'>${quest.correct_answer}</span>
            `
        } else if (i < amountOfAnswers - 1){
              html += /*html*/ ` 
              <span onclick = 'correctAnswer("incorr")'>${quest.incorrect_answers[i]}</span>
            `
        } else {
            html += /*html*/ ` 
              <span onclick = 'correctAnswer("incorr")'>${quest.incorrect_answers[posOfRightAnswer]}</span>
            `
        }
    }
    return html;
}


function showResults(){

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