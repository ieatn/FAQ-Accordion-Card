const answer = document.querySelectorAll('.answer')
const question = document.querySelectorAll('.question')
// for each question, add a showanswer click event, pass in that specific question
question.forEach(q => q.addEventListener('click', () => {
    q.addEventListener('click', showAnswer(q))
}))
// 
const showAnswer = (q) => {
    // bold the question
    q.style.color = 'red'
    // toggle active on answer
    answer.forEach(ans => ans.classList.toggle('active'))
}
