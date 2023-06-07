const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome", "Madrid"],
    correctAnswer: 0
  },
  // Add more questions here
];

const players = {
  player1: { score: 0 },
  player2: { score: 0 }
};

let currentQuestion = 0;

// Function to display question and choices
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const question = questions[currentQuestion];
  
  questionElement.textContent = question.question;
  choicesElement.innerHTML = "";
  
  question.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => checkAnswer(index));
    choicesElement.appendChild(li);
  });
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestion];
  const selectedChoice = question.choices[selectedIndex];
  
  if (selectedIndex === question.correctAnswer) {
    players.player1.score++;
    players.player2.score++;
    alert("Correct answer!");
  } else {
    alert(`Wrong answer! The correct answer is ${question.choices[question.correctAnswer]}`);
  }
  
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayScores();
  }
}

// Function to display scores
function displayScores() {
  const scoresElement = document.getElementById("scores");
  scoresElement.innerHTML = "";
  
  for (const player in players) {
    const li = document.createElement("li");
    li.textContent = `${player}: ${players[player].score}`;
    scoresElement.appendChild(li);
  }
}

// Start the game
displayQuestion();
