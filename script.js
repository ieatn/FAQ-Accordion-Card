// OH MY GOD CHATGPT IS INCREDIBLE! ASTOUNDING! 
// copied all this code from chatgpt and it works perfectly the future is now
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', () => {
    // Inside the event listener, use the nextElementSibling property to find the next sibling element of the question element, which should be the answer element:
    const answer = question.nextElementSibling;
    answer.classList.toggle('hidden');
    // red color for question when clicked
    question.classList.toggle('active')
  });
});