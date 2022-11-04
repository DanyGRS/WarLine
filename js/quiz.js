const quizData = [
    {
        question: "Sabemos que alguns países da Europa se juntaram numa Aliança Militar, quais foram eles e quais eram os nomes dos grupos?",
        a: "Tríplice Entente: formada por Rússia, Grã-Bretanha e França; e Tríplice Aliança: formada por Alemanha, Áustria-Hungria, Império Otomano e Itália.",
        b: "União Européia: formada por Alemanha, Estados Unidos e Espanha; e União Comunista: formada pela Rússia, Áustria-Hunria e Grã-Bretanha.",
        c: "Aliança Exterior: formada por Rússia, Grã-Bretanha e Itália; e Aliança Sencionalista: formada por Alemanha, Áustria-Hungria, Império Otomano e França.",
        d: "Tríplice Entente: formada por Alemanha, Áustria-Hungria, Império Otomano e Itália; e Tríplice Aliança: formada por Rússia, Grã-Bretanha e França.",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
function loadQuiz() {
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você acertou um total de ${score}/${quizData.length} questões</h2>
 
                <button onclick="location.reload()">Fazer novamente</button>
            `
        }
    }
})