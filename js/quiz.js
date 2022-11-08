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
        question: "Quanto tempo durou a Segunda Guerra Mundial?",
        a: "Ela teve a duração de 5 anos, sendo de 1917 até 1922.",
        b: "A guerra ocorreu entre 1939 e 1945.",
        c: "Aconteceu somente em 1929",
        d: "Ocorreu em 1964 e foi até 1968",
        correct: "b",
    },
    {
        question: "Sobre as Conquistas Mongóis, o que incentivou esse império a invadir e conquistar outros territórios?",
        a: "Eles eram atraídos por jóias e tudo que aparentava riqueza.",
        b: "Com o aumento da população, eles tiveram que conquistar mais mantimentos.",
        c: "Tudo era realizado por vontade de vingança contra o império Romano",
        d: "Eles queriam mais guerreiros.",
        correct: "a",
    },
    {
        question: "A Segunda Guerra Sino-Japonesa foi do Japão contra:",
        a: "Estados Unidos",
        b: "China",
        c: "Coréia do Norte",
        d: "Rússia",
        correct: "b",
    },
    {
        question: "Qual foi a principal causa da Rebelião de Taiping?",
        a: "A fome, eles precisavam encontrar alimentos para o crescimento de guerreiros.",
        b: "Eles queriam mais territórios e guerreiros.",
        c: "A sede por vingança contra seus inimigos.",
        d: "O cristianismo, eles acreditavam que era a única religião digna de esperança.",
        correct: "d",
    },
    {
        question: "Quais foram as consequências que a Guerra dos 30 anos deixou?",
        a: "A fome e a miséria.",
        b: "A conquista do território da Rússia.",
        c: "A independência dos Países Baixos e o uso da diplaomacia e do direito internacional.",
        d: "A independência dos Países Baixos e mais de 40 milhões de mortos de fome.",
        correct: "c",
    },
    {
        question: "Qual era o principal motivo das guerras de Napoleão?",
        a: "Ele queria ouros e jóias.",
        b: "Acabar com a monarquia absolutista.",
        c: "Conquistar terrritórios para governar.",
        d: "Liderar o maior exército do mundo.",
        correct: "b",
    },
    {
        question: "A Guerra Civil Americana foi realizada de quem contra quem?",
        a: "Brasil contra Paraguai.",
        b: "México contra contra Argentina.",
        c: "Estados Unidos contra Irã.",
        d: "Estados do Sul contra os do Norte dos Estados Unidos.",
        correct: "d",
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