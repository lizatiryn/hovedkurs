function correctAnswer(answer){
    if (answer === 'corr'){
        points++
        numberOfQuestion++
        clicked = true
        if(numberOfQuestion-1 < data.results.length){
            showQuestion() 
        } else showResults()
    } else if (answer === 'incorr'){
        numberOfQuestion++
        clicked = true
        if(numberOfQuestion-1 < data.results.length){
            showQuestion() 
        } else showResults()
    }
}

function ranOutOfTime(){
    app.innerHTML = /*html*/ `<div>You ran out of time</div>`
    setTimeout(()=> {
        ++numberOfQuestion
        if(numberOfQuestion-1 < data.results.length){
            showQuestion() 
        } else showResults()
    }, '2000')
    
}