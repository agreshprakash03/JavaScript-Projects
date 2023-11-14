const quizData = [
    {
        question: 'India is a federal union comprising twenty-eight states and how many union territories?',
        a: '6',
        b: '7',
        c: '8',
        d: '9',
        correct: 'c'

    },
    {
        question: 'Which of the following is the capital of Arunachal Pradesh?',
        a: 'Itanagar',
        b: 'Dispur',
        c: 'Imphal',
        d: 'Panaji',
        correct: 'a'
    },
    {
        question: 'In which of the following state, the main language is Khasi?',
        a: 'Mizoram',
        b: 'Nagaland',
        c: 'Meghalaya',
        d: 'Tripura',
        correct: 'c'
    },
    {
        question: 'Which is the largest coffee-producing state of India?',
        a: 'Kerala',
        b: 'Tamil Nadu',
        c: 'Karnataka',
        d: 'Arunachal Pradesh',
        correct: 'c'
    },
    {
        question: 'In what state is Elephant Falls located?',
        a: 'Mizoram',
        b: 'Orissa',
        c: 'Manipur',
        d: 'Meghalaya',
        correct: 'd'

    }
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('btn');
const quiz = document.getElementById('quiz');
const btnContainer = document.getElementById("btn-container");

let quizCount = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselect();
    const quizValue = quizData[quizCount];

    questionEl.innerText = quizValue.question;
    a_text.innerText = quizValue.a;
    b_text.innerText = quizValue.b;
    c_text.innerText = quizValue.c;
    d_text.innerText = quizValue.d;
}

function getAnswer() {
    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
        answer = answerEl.id;}
    })

    return answer;
}

function deselect() {
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submitbtn.addEventListener('click',() => {
    const answer = getAnswer();
    
    if(answer){

        if(answer === quizData[quizCount].correct){
            score++;
        }
        quizCount++;

        if(quizCount < quizData.length){
        loadQuiz();}
        else {
            quiz.innerHTML = `<h2>
                            You answered correctly ${score}/${quizData.length} questions
                            </h2>`;

            btnContainer.innerHTML = `<button onclick="location.reload()">
                                        Restart Quiz
                                        <button>`
        }
    }

   
});


