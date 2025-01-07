const app = document.getElementById('app')

let points = 0
let data
let numberOfQuestion = 1
let timeLeft = 10


fetchQuestions()
async function fetchQuestions() {
    try{
        const response = await fetch('https://opentdb.com/api.php?amount=10')

        if (!response.ok){
            throw new Error('Could not fetch resource')
        }

        data = await response.json()
    }
    catch(err){
        console.error(err)
    }
    
}



