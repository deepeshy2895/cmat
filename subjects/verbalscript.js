const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: 1,
    },
]
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const answerButton = document.getElementById("answer-button");
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