import { client } from "./client.js";
import { config } from "./config.js";

const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const questionContainer = document.querySelector(".question-container");
const answersList = document.querySelector(".answers");
const quizResults = document.querySelector(".quiz-results");

let currentQuestionIndex = 0;
let questions = [];
let score = 0;

const getQuestions = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/questions?${queryString}`);
  questions = data; // Lưu dsach câu hỏi
  render(data);
};
getQuestions();

const loadQuestions = async (data) => {
  try {
    const response = await client.get("/questions");
    if (response.ok) {
      questions = response.data;
      showNextQuestion();
    } else {
      console.error("Failed to load questions.");
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};

const startQuiz = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
  loadQuestions();
};

const exitQuiz = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  currentQuestionIndex = 0;
};

const continueQuiz = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

const showNextQuestion = () => {
  continueQuiz();
  showNextQuestion();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    questionContainer.querySelector(".question").textContent =
      question.question;

    answersList.innerHTML = "";

    question.answers.forEach((answer, index) => {
      const answerItem = document.createElement("li");
      answerItem.textContent = answer;
      answerItem.addEventListener("click", () =>
        checkAnswer(index, question.correct_answer)
      );
      answersList.appendChild(answerItem);
    });
  } else {
    showResults();
  }
};

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  showNextQuestion();
}

function showResults() {
  quizResults.textContent = `You scored ${score} out of ${questions.length}`;
}

startBtn.addEventListener("click", startQuiz);
exitBtn.addEventListener("click", exitQuiz);
continueBtn.addEventListener("click", showNextQuestion);
