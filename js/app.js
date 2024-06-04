const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const quizImg = document.querySelector(".quiz-img");
const quizImg2 = document.querySelector(".quiz-img2");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");

startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  quizSection.classList.add("active");
  quizBox.classList.add("active");
  quizImg.classList.add("active");
  quizImg2.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");

  showQuestions(0);
  showImage(0);
  showImage2(16);
  questionCounter(1);
  headerScore();
};

tryAgainBtn.onclick = () => {
  quizBox.classList.add("active");
  quizImg.classList.add("active");
  quizImg2.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  i = 0;
  end = 16;

  showQuestions(questionCount);
  showImage(i);
  showImage2(end);
  questionCounter(questionNumb);

  headerScore();
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestions(questionCount);
  showImage(i);
  showImage2(end);
  questionCounter(questionNumb);

  headerScore();
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let i = 0;
let end = 16;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    quizImg.classList.remove("active");
    quizImg2.classList.remove("active");
    quizBox.classList.remove("active");
    setTimeout(() => {
      quizImg.classList.add("active");
      quizImg2.classList.add("active");
    }, 500);
    setTimeout(() => {
      quizBox.classList.add("active");
    }, 100);

    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);
    nextBtn.classList.remove("active");
  } else {
    quizImg.classList.remove("active");
    quizImg2.classList.remove("active");
    quizBox.classList.remove("active");
    showResultBox();
  }
  if (i < imgTable.length) {
    i++;
    showImage(i);
  } else {
    i = 0;
    showImage(i);
    i++;
  }
  if (end > 0) {
    end--;
    showImage2(end);
  } else {
    end = 16;
    showImage2(end);
    end--;
  }
};

const optionList = document.querySelector(".option-list");

// recupérer les questions et les options du tableau

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
                   <div class="option"><span>${questions[index].options[1]}</span></div>
                   <div class="option"><span>${questions[index].options[2]}</span></div>
                   <div class="option"><span>${questions[index].options[3]}</span></div>`;
  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function showImage(index) {
  quizImg.innerHTML = `<img src ="${imgTable[index].img}" alt =""/>`;
}
function showImage2(index) {
  quizImg2.innerHTML = `<img src ="${imgTable[index].img}" alt =""/>`;
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("false");
    // Si la réponse est incorrecte, afficher la bonne réponse
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // Si une réponse a été sélectionnée, il n'y a plus moyen d'en sélectionner une autre
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
  nextBtn.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `Question ${index}/${questions.length}`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore}/${questions.length}`;
}
function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Ton score : ${userScore} sur ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");

  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    // console.log(progressStartValue);
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#4c1929 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
