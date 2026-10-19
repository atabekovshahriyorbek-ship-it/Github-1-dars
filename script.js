const questions = [
  {
    question: "“Oltin qoida”ning asosiy mazmuni qaysi javobda to‘g‘ri ifodalangan?",
    answers: [
      "Boshqalarga o‘zing istagan munosabatda bo‘lish",
      "Har doim o‘z manfaatini birinchi o‘ringa qo‘yish",
      "Faqat do‘stlaringga yordam berish",
      "Boshqalarning fikriga quloq solmaslik"
    ],
    correct: 0,
    explanation: "Oltin qoida boshqalarga o‘zingizga qanday munosabatni istasangiz, shunday munosabatda bo‘lishni o‘rgatadi."
  },
  {
    question: "Sinfdoshingiz fikr bildirayotganida oltin qoidaga amal qilish uchun nima qilasiz?",
    answers: [
      "Gapini bo‘lib, o‘z fikringizni aytasiz",
      "Uni diqqat bilan tinglab, hurmat bilan javob berasiz",
      "Boshqalarga qarab kulasiz",
      "Uning fikrini darhol noto‘g‘ri deysiz"
    ],
    correct: 1,
    explanation: "Sizni ham tinglashlarini istasangiz, boshqalarning gapini ham diqqat va hurmat bilan tinglang."
  },
  {
    question: "Do‘stingiz xato qilib qo‘ydi. Eng to‘g‘ri yo‘l qaysi?",
    answers: [
      "Uni hammaning oldida masxara qilish",
      "Xatosini yashirincha tarqatish",
      "Muloyimlik bilan tushuntirib, yordam taklif qilish",
      "U bilan boshqa gaplashmaslik"
    ],
    correct: 2,
    explanation: "Xato qilganingizda sizga qanday munosabatda bo‘lishlarini istasangiz, do‘stingizga ham shunday munosabatda bo‘ling."
  },
  {
    question: "Oltin qoida kundalik hayotda qaysi fazilatni eng ko‘p mustahkamlaydi?",
    answers: [
      "Befarqlikni",
      "Raqobatni",
      "Kibrni",
      "Mehr-oqibat va hurmatni"
    ],
    correct: 3,
    explanation: "Oltin qoida boshqalarning hislarini tushunishga, mehribon va hurmatli bo‘lishga undaydi."
  },
  {
    question: "Tanaffusda yolg‘iz o‘tirgan o‘quvchini ko‘rdingiz. Oltin qoida asosida nima qilasiz?",
    answers: [
      "Hol-ahvol so‘rab, suhbatga taklif qilasiz",
      "Uni ko‘rmagandek o‘tib ketasiz",
      "Do‘stlaringiz bilan uni muhokama qilasiz",
      "Yolg‘iz o‘tirgani uchun ayblaysiz"
    ],
    correct: 0,
    explanation: "Yolg‘iz qolganingizda sizni suhbatga chorlasalar, xursand bo‘lishingiz mumkin. Boshqalarga ham shunday mehr ko‘rsating."
  },
  {
    question: "Birovning buyumidan foydalanmoqchisiz. Qanday yo‘l tutish to‘g‘ri?",
    answers: [
      "So‘ramasdan olib ishlatish",
      "Ruxsat so‘rab, ehtiyotkorlik bilan ishlatish",
      "Buyumni boshqalarga berib yuborish",
      "O‘zingizga kerak bo‘lsa, egasiga aytmaslik"
    ],
    correct: 1,
    explanation: "O‘zingizning buyumingizni ruxsatsiz olishlarini istamasangiz, boshqalarning buyumi uchun ham ruxsat so‘rang."
  },
  {
    question: "Oltin qoida faqat yaqin do‘stlarga nisbatan qo‘llanadimi?",
    answers: [
      "Ha, faqat do‘stlarga",
      "Faqat oila a’zolariga",
      "Yo‘q, barcha insonlarga",
      "Faqat kattalarga"
    ],
    correct: 2,
    explanation: "Oltin qoida do‘stlar, oila a’zolari, sinfdoshlar va boshqa barcha insonlarga nisbatan amal qiladi."
  },
  {
    question: "Kimdir siz bilan qo‘pol gaplashdi. Oltin qoidaga mos javob qaysi?",
    answers: [
      "Undan ham qo‘polroq javob qaytarish",
      "Uni darhol haqorat qilish",
      "Boshqalarga u haqida yomon gapirish",
      "O‘zingizni bosib, xotirjam va hurmat bilan gapirish"
    ],
    correct: 3,
    explanation: "Siz ham hurmat bilan gapirishlarini istaysiz. Vaziyatni keskinlashtirmasdan, xotirjam javob berishga harakat qiling."
  },
  {
    question: "Oltin qoida bo‘yicha qaror chiqarishda qaysi savol yordam beradi?",
    answers: [
      "Men shu ishni o‘zimga qilishlarini istarmidim?",
      "Bu ish menga qanday foyda beradi?",
      "Boshqalar buni bilib qolishadimi?",
      "Men bundan qanday qutulaman?"
    ],
    correct: 0,
    explanation: "O‘zingizni boshqa insonning o‘rniga qo‘yish va “Menga shunday qilishsa, qanday his qilardim?” deb o‘ylash foydali."
  },
  {
    question: "Guruh ishida bir o‘quvchining taklifini hech kim eshitmadi. Siz nima qilishingiz mumkin?",
    answers: [
      "Guruh ishini tashlab ketish",
      "Unga fikrini aytish uchun navbat berishni taklif qilish",
      "Taklifini e’tiborsiz qoldirish",
      "Faqat o‘z fikringizni qabul qildirish"
    ],
    correct: 1,
    explanation: "Sizning fikringizni eshitishlarini istasangiz, boshqalarga ham o‘z fikrini bildirish imkonini bering."
  },
  {
    question: "Oltin qoidaga amal qilish degani har doim boshqalarning barcha iltimoslariga rozi bo‘lishmi?",
    answers: [
      "Ha, hech qachon rad etib bo‘lmaydi",
      "Faqat do‘stlar so‘rasa",
      "Yo‘q, mehribon bo‘lish bilan birga odobli tarzda “yo‘q” deyish ham mumkin",
      "Ha, o‘z fikringiz bo‘lmasligi kerak"
    ],
    correct: 2,
    explanation: "Oltin qoida o‘zingizga zarar yetkazish yoki har qanday iltimosga rozi bo‘lish degani emas. Chegaralarni ham hurmat bilan bildirish mumkin."
  },
  {
    question: "Birov haqida tekshirilmagan xabar eshitdingiz. Eng mas’uliyatli yo‘l qaysi?",
    answers: [
      "Uni guruh chatiga yuborish",
      "Yana ko‘proq odamlarga aytish",
      "Xabarni hazil qilib tarqatish",
      "Tarqatmaslik va avval uning rostligini tekshirish"
    ],
    correct: 3,
    explanation: "Siz haqingizda asossiz gap tarqatishlarini istamasangiz, tekshirilmagan xabarni boshqalarga ham tarqatmang."
  },
  {
    question: "Xatoingiz sababli do‘stingizning ko‘nglini og‘ritdingiz. Qanday yo‘l tutasiz?",
    answers: [
      "Samimiy uzr so‘rab, vaziyatni tuzatishga harakat qilasiz",
      "Hech narsa bo‘lmagandek yurasiz",
      "Aybdorlikni do‘stingizga yuklaysiz",
      "Boshqalarga do‘stingizni ayblab gapirasiz"
    ],
    correct: 0,
    explanation: "Sizdan samimiy uzr kutishlarini istasangiz, xato qilganingizda ham samimiy uzr so‘rang."
  },
  {
    question: "Tabiatga va umumiy joylarga g‘amxo‘rlik qilish oltin qoida bilan qanday bog‘liq?",
    answers: [
      "Umumiy joylar hech kimga tegishli emas",
      "Boshqalar toza va xavfsiz joydan foydalanishini istasak, uni asrashimiz kerak",
      "Faqat kattalar tabiatni asraydi",
      "Faqat o‘z hovlimizni toza tutish kifoya"
    ],
    correct: 1,
    explanation: "Atrof-muhitdan boshqalar ham foydalanadi. Ularga toza va xavfsiz joy qoldirish hurmat va mas’uliyatdir."
  },
  {
    question: "Oltin qoidaga amal qilishni qachon boshlash kerak?",
    answers: [
      "Faqat bayramlarda",
      "Boshqalar birinchi bo‘lib yaxshilik qilgandan keyin",
      "Har kuni, oddiy kundalik vaziyatlardan",
      "Faqat maktabda"
    ],
    correct: 2,
    explanation: "Yaxshi munosabat kundalik kichik ishlardan — tinglash, yordam berish va hurmat ko‘rsatishdan boshlanadi."
  }
];

const introPanel = document.querySelector("#intro-panel");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const questionCounter = document.querySelector("#question-counter");
const scoreCounter = document.querySelector("#score-counter");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const answersContainer = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");

let currentIndex = 0;
let selections = Array(questions.length).fill(null);
let attemptActive = false;

function exitTest() {
  if (!attemptActive) return;

  attemptActive = false;
  currentIndex = 0;
  selections = Array(questions.length).fill(null);
  quizPanel.hidden = true;
  resultPanel.hidden = true;
  introPanel.hidden = false;
}

function getScore() {
  return selections.reduce((total, selected, index) => {
    return total + (selected === questions[index].correct ? 1 : 0);
  }, 0);
}

function renderQuestion() {
  const question = questions[currentIndex];
  const selected = selections[currentIndex];
  questionCounter.textContent = `${currentIndex + 1} / ${questions.length}-savol`;
  scoreCounter.textContent = `Hisob: ${getScore()}`;
  progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentIndex));
  questionText.textContent = question.question;
  answersContainer.replaceChildren();
  feedback.hidden = selected === null;
  feedback.className = "feedback";

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("aria-pressed", String(selected === answerIndex));

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = String.fromCharCode(65 + answerIndex);

    const label = document.createElement("span");
    label.textContent = answer;
    button.append(letter, label);

    if (selected !== null) {
      button.disabled = true;
      if (answerIndex === question.correct) {
        button.classList.add("correct");
      } else if (answerIndex === selected) {
        button.classList.add("incorrect");
      }
    } else if (selected === answerIndex) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      selections[currentIndex] = answerIndex;
      renderQuestion();
    });
    answersContainer.append(button);
  });

  if (selected !== null) {
    const isCorrect = selected === question.correct;
    feedback.textContent = `${isCorrect ? "To‘g‘ri!" : "Noto‘g‘ri."} ${question.explanation}`;
    feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
  }

  backButton.disabled = currentIndex === 0;
  nextButton.disabled = selected === null;
  nextButton.innerHTML = currentIndex === questions.length - 1
    ? "Natijani ko‘rish <span aria-hidden=\"true\">→</span>"
    : "Keyingi savol <span aria-hidden=\"true\">→</span>";
}

function showResults() {
  attemptActive = false;
  const score = getScore();
  const percentage = Math.round((score / questions.length) * 100);
  let title;
  let message;

  if (score >= 13) {
    title = "Ajoyib natija!";
    message = "Siz oltin qoidaning mazmunini juda yaxshi tushunasiz. Uni kundalik hayotda qo‘llashda davom eting!";
  } else if (score >= 9) {
    title = "Yaxshi natija!";
    message = "Asosiy g‘oyani yaxshi tushungansiz. Javoblarni eslab, oltin qoidani har kuni amalda qo‘llab ko‘ring.";
  } else {
    title = "Yana mashq qiling!";
    message = "Oltin qoida boshqalarga o‘zingiz istagan munosabatni ko‘rsatish haqida. Testni qayta ishlab, bilimingizni mustahkamlang.";
  }

  quizPanel.hidden = true;
  resultPanel.hidden = false;
  document.querySelector("#result-title").textContent = title;
  document.querySelector("#result-score").textContent = `${score} / ${questions.length} ta to‘g‘ri javob · ${percentage}%`;
  document.querySelector("#result-message").textContent = message;
  document.querySelector("#result-fill").style.width = `${percentage}%`;
  document.querySelector("#result-icon").textContent = score >= 9 ? "✦" : "↗";
  document.querySelector("#restart-button").focus();
}

document.querySelector("#start-button").addEventListener("click", () => {
  attemptActive = true;
  introPanel.hidden = true;
  quizPanel.hidden = false;
  renderQuestion();
  questionText.focus();
});

backButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
    questionText.focus();
  }
});

nextButton.addEventListener("click", () => {
  if (selections[currentIndex] === null) return;
  if (currentIndex === questions.length - 1) {
    showResults();
    return;
  }
  currentIndex += 1;
  renderQuestion();
  questionText.focus();
});

document.querySelector("#restart-button").addEventListener("click", () => {
  currentIndex = 0;
  selections = Array(questions.length).fill(null);
  attemptActive = true;
  resultPanel.hidden = true;
  quizPanel.hidden = false;
  renderQuestion();
  questionText.focus();
});

window.addEventListener("pagehide", exitTest);
