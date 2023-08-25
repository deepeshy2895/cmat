const questions = [
  {
    question: "Which word is most similar in meaning to 'abundant'?",
    options: ["Limited", "Scanty", "Scarce", "Plentiful"],
    correctAnswer: 3,
  },
  {
    question: "What is the synonym for 'conundrum'?",
    options: ["Puzzle", "Solution", "Explanation", "Answer"],
    correctAnswer: 0,
  },
  // Add more questions and options here...
  {
    question: "Which phrase is closest in meaning to 'in a nutshell'?",
    options: ["In a big box", "In a small space", "In a few words", "In a safe place"],
    correctAnswer: 2,
  },
  {
    question: "Select the word that means 'to calm down'?",
    options: ["Agitate", "Excite", "Soothe", "Provoke"],
    correctAnswer: 2,
  },
  {
    question: "Which term is most similar to 'vocabulary'?",
    options: ["Lexicon", "Concept", "Phenomenon", "Equation"],
    correctAnswer: 0,
  },
  // Add more questions and options here...
  {
    question: "What is the antonym for 'gregarious'?",
    options: ["Friendly", "Outgoing", "Sociable", "Solitary"],
    correctAnswer: 3,
  },
  {
    question: "Which word means 'to give up a position, right, or power'?",
    options: ["Abolish", "Surrender", "Conceal", "Claim"],
    correctAnswer: 1,
  },
  {
    question: "What is the synonym for 'ubiquitous'?",
    options: ["Scarce", "Rare", "Common", "Occasional"],
    correctAnswer: 2,
  },
  {
    question: "Which word is the odd one out?",
    options: ["Elephant","Giraffe","Lion","Turtle"],
    correctAnswer: 3,
  },
  {
    question: "If FRIEND is coded as HUMJGT, how is LOVE coded?",
    options: ["NQYG", "NQXG", "NRXG", "NRZI"],
    correctAnswer: 2,
  },

  // Add more questions and options here...
];

// Add more questions here...



const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;

function displayQuestion(question) {
  questionElement.textContent = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      ${option}
    `;
    optionsElement.appendChild(optionLabel);
  });
}

function showAnswer() {
  resultElement.textContent = `The correct answer is: ${
    questions[currentQuestionIndex].options[questions[currentQuestionIndex].correctAnswer]
  }`;
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect.";
    }
  } else {
    resultElement.textContent = "Please select an answer.";
  }
}

function nextQuestion() {
  resultElement.textContent = "";
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  displayQuestion(questions[currentQuestionIndex]);
}

displayQuestion(questions[currentQuestionIndex]);

answerButton.addEventListener("click", showAnswer);
optionsElement.addEventListener("change", checkAnswer);
nextButton.addEventListener("click", nextQuestion);
