function correctAnswer(answer){
    if (answer === 'corr'){
        points++
        timeLeft = -1;
        return true
    } else if (answer === 'incorr'){
        timeLeft = -1;
        return false
    }
}