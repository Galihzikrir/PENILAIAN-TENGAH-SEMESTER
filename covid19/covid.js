const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {
        question : "Saya pergi keluar rumah",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya menggunakan transportasi umum: online, angkot, bus, taxi, kereta api",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya memakai masker pada saat berkumpul dengan orang lain",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya berjabat tangan dengan orang lain",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya membersihkan tangan dengan hand sanitizer/tissue basah sebelum pegang kemudi mobil/motor",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya menyentuh benda/uang yang juga disentuh orang lain",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya", 
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya menjaga jarak 1,5 meter dengan orang lain ketika : belanja, bekerja, belajar, ibadah",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya makan diluar rumah (warung / restaurant)",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya minum hangat & cuci tangan dengan sabun setelah tiba di tujuan",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya berada di wilayah kelurahan tempat pasien tertular",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya pasang hand sanitizer di depan pintu masuk, untuk bersihkan tangan sebelum pegang gagang (handle) pintu masuk rumah",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya mencuci tangan dengan sabun setelah tiba di rumah",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya menyediakan : tissue basah / antiseptic, masker, sabun antiseptic bagi keluarga di rumah",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya segera merendam baju & celana bekas pakai di luar rumah kedalam air panas / sabun",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya segera mandi keramas setelah saya tiba di rumah",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya mensosialisasikan check list penilaian resiko pribadi ini kepada keluarga dirumah",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya dalam sehari kena cahaya matahari minimal 15 menit",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya jalan kaki / berolah raga minimal 30 menit setiap hari",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya jarang minum vitamin C & E, kurang tidur",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Usia saya diatas 60 tahun",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya mempunyai penyakit : jantung/diabetes/gangguan pernapasan kronik",
        imgSrc : "img/corona.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor =  "#0f0";
}

function scoreRender(){
    scoreDiv.style.display = "block";
    
    const scorePerCent = Math.round(100 * score/questions.length);
    
    let img = (scorePerCent >= 70) ? "img/3.jpg" :
              (scorePerCent >= 40) ? "img/2.png" :
              "img/1.jpg";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}