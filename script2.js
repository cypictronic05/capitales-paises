// Datos del juego: solo países, capitales y banderas.
const countries = [
  { country: "Australia", capital: "Canberra", flag: "🇦🇺" },
  { country: "Chile", capital: "Santiago", flag: "🇨🇱" },
  { country: "Francia", capital: "París", flag: "🇫🇷" },
  { country: "Japón", capital: "Tokio", flag: "🇯🇵" },
  { country: "Canadá", capital: "Ottawa", flag: "🇨🇦" },
  { country: "Brasil", capital: "Brasilia", flag: "🇧🇷" },
  { country: "Egipto", capital: "El Cairo", flag: "🇪🇬" },
  { country: "Italia", capital: "Roma", flag: "🇮🇹" },
  { country: "Alemania", capital: "Berlín", flag: "🇩🇪" },
  { country: "México", capital: "Ciudad de México", flag: "🇲🇽" },
  { country: "Argentina", capital: "Buenos Aires", flag: "🇦🇷" },
  { country: "Perú", capital: "Lima", flag: "🇵🇪" },
  { country: "Colombia", capital: "Bogotá", flag: "🇨🇴" },
  { country: "España", capital: "Madrid", flag: "🇪🇸" },
  { country: "Reino Unido", capital: "Londres", flag: "🇬🇧" },
  { country: "Estados Unidos", capital: "Washington D. C.", flag: "🇺🇸" },
  { country: "China", capital: "Pekín", flag: "🇨🇳" },
  { country: "India", capital: "Nueva Delhi", flag: "🇮🇳" },
  { country: "Sudáfrica", capital: "Pretoria", flag: "🇿🇦" },
  { country: "Marruecos", capital: "Rabat", flag: "🇲🇦" },
  { country: "Corea del Sur", capital: "Seúl", flag: "🇰🇷" },
  { country: "Tailandia", capital: "Bangkok", flag: "🇹🇭" },
  { country: "Turquía", capital: "Ankara", flag: "🇹🇷" },
  { country: "Grecia", capital: "Atenas", flag: "🇬🇷" },
  { country: "Noruega", capital: "Oslo", flag: "🇳🇴" },
  { country: "Suecia", capital: "Estocolmo", flag: "🇸🇪" },
  { country: "Nueva Zelanda", capital: "Wellington", flag: "🇳🇿" },
  { country: "Portugal", capital: "Lisboa", flag: "🇵🇹" },
  { country: "Suiza", capital: "Berna", flag: "🇨🇭" },
  { country: "Kenia", capital: "Nairobi", flag: "🇰🇪" },
  { country: "Indonesia", capital: "Yakarta", flag: "🇮🇩" },
  { country: "Irlanda", capital: "Dublín", flag: "🇮🇪" }
];

const totalQuestions = countries.length;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let answered = false;

const gameCard = document.getElementById("gameCard");
const resultCard = document.getElementById("resultCard");
const flagElement = document.getElementById("flag");
const countryNameElement = document.getElementById("countryName");
const optionsGrid = document.getElementById("optionsGrid");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const playAgainButton = document.getElementById("playAgainButton");
const scoreElement = document.getElementById("score");
const questionNumberElement = document.getElementById("questionNumber");
const totalQuestionsElement = document.getElementById("totalQuestions");
const streakElement = document.getElementById("streak");
const progressBar = document.getElementById("progressBar");
const resultTitle = document.getElementById("resultTitle");
const finalScore = document.getElementById("finalScore");
const correctAnswersElement = document.getElementById("correctAnswers");
const wrongAnswersElement = document.getElementById("wrongAnswers");

function shuffleOptions(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

// Crea 4 opciones únicas: la correcta y 3 capitales tomadas de otros países.
function generateOptions(currentCountry) {
  const incorrectCapitals = countries
    .filter((item) => item.capital !== currentCountry.capital)
    .map((item) => item.capital);

  const selectedIncorrect = shuffleOptions(incorrectCapitals).slice(0, 3);
  return shuffleOptions([currentCountry.capital, ...selectedIncorrect]);
}

function loadQuestion() {
  answered = false;
  const currentCountry = questions[currentQuestionIndex];
  const options = generateOptions(currentCountry);

  flagElement.textContent = currentCountry.flag;
  countryNameElement.textContent = currentCountry.country;
  questionNumberElement.textContent = currentQuestionIndex + 1;
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";
  nextButton.classList.add("hidden");
  optionsGrid.innerHTML = "";

  options.forEach((capital) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.textContent = capital;
    button.addEventListener("click", () => validateAnswer(button, capital, currentCountry.capital));
    optionsGrid.appendChild(button);
  });

  updateScore();
  gameCard.classList.remove("is-changing");
  window.requestAnimationFrame(() => gameCard.classList.add("is-changing"));
}

function validateAnswer(selectedButton, selectedCapital, correctCapital) {
  if (answered) {
    return;
  }

  answered = true;
  const isCorrect = selectedCapital === correctCapital;
  const optionButtons = document.querySelectorAll(".option-button");

  optionButtons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === correctCapital) {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    score += 1;
    streak += 1;
    correctAnswers += 1;
    feedbackElement.textContent = `¡Correcto! ${correctCapital} es la capital.`;
    feedbackElement.classList.add("good");
    playSound("correct");
  } else {
    score -= 2;
    streak = 0;
    wrongAnswers += 1;
    selectedButton.classList.add("wrong");
    feedbackElement.textContent = `Casi. La respuesta correcta era ${correctCapital}.`;
    feedbackElement.classList.add("bad");
    playSound("wrong");
  }

  updateScore();
  progressBar.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
  nextButton.classList.remove("hidden");
}

function updateScore() {
  scoreElement.textContent = score;
  streakElement.textContent = streak;
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
}

function showFinalResult() {
  gameCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  progressBar.style.width = "100%";

  const percentage = (correctAnswers / totalQuestions) * 100;
  let message = "Puedes mejorar";

  if (percentage >= 80) {
    message = "Excelente";
  } else if (percentage >= 55) {
    message = "Muy bien";
  }

  resultTitle.textContent = message;
  finalScore.textContent = `${score} puntos`;
  correctAnswersElement.textContent = correctAnswers;
  wrongAnswersElement.textContent = wrongAnswers;
}

// Avanza pregunta a pregunta hasta cerrar con la pantalla final.
function nextQuestion() {
  currentQuestionIndex += 1;

  if (currentQuestionIndex >= totalQuestions) {
    showFinalResult();
    return;
  }

  loadQuestion();
}

function restartGame() {
  questions = shuffleOptions(countries);
  currentQuestionIndex = 0;
  score = 0;
  streak = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  answered = false;
  gameCard.classList.remove("hidden");
  resultCard.classList.add("hidden");
  loadQuestion();
}

function playSound(type) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return;
  }

  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = type === "correct" ? 760 : 180;
  gain.gain.setValueAtTime(0.08, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.18);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.18);
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartGame);
playAgainButton.addEventListener("click", restartGame);

totalQuestionsElement.textContent = totalQuestions;
restartGame();
