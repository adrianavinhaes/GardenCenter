// Get elements
const plantContainers = document.querySelectorAll('.plant-container');
const answerButtons = document.querySelectorAll('.answer');
const feedback = document.querySelector('.feedback');
const question = document.querySelector('.question');
const quizImage = document.querySelector('.quiz-image');

let currentPlantType = '';
const correctAnswer = 'Perennial'; 

plantContainers.forEach(container => {
  container.addEventListener('click', () => {
    currentPlantType = container.querySelector('.our-plants-caption').textContent;
    const plantImage = container.querySelector('.our-plants-image').src;
    setQuizImage(plantImage);
    resetQuizState();
  });
});

answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedAnswer = button.textContent;
    checkAnswer(selectedAnswer);
  });
});

function setQuizImage(imageSrc) {
  quizImage.src = imageSrc;
  question.textContent = `What type of plant is this?`;
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === correctAnswer) {
    feedback.textContent = 'Correct!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Incorrect. Try again!';
    feedback.style.color = 'red';
  }
  answerButtons.forEach(button => (button.disabled = true));

  setTimeout(resetQuizState, 1500); 
}

function resetQuizState() {
  feedback.textContent = '';
  answerButtons.forEach(button => (button.disabled = false));
  feedback.style.color = 'black';
}
