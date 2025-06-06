document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ປະເທດ ສປປ ລາວ ມີຈັກແຂວງ?",
            options: [
                "15 ແຂວງ",
                "16 ແຂວງ",
                "17 ແຂວງ",
                "18 ແຂວງ"
            ],
            answer: "17 ແຂວງ",
            explanation: "ສປປ ລາວ ມີ 17 ແຂວງ."
        },
        {
            question: "ເມືອງຫຼວງຂອງ ສປປ ລາວ ແມ່ນນະຄອນໃດ?",
            options: [
                "ປາກເຊ",
                "ສະຫວັນນະເຂດ",
                "ນະຄອນຫຼວງວຽງຈັນ",
                "ຫຼວງພະບາງ"
            ],
            answer: "ນະຄອນຫຼວງວຽງຈັນ",
            explanation: "ນະຄອນຫຼວງວຽງຈັນ ເປັນເມືອງຫຼວງຂອງ ສປປ ລາວ."
        },
        {
            question: "ຫົວໜ່ວຍການປົກຄອງໃດທີ່ເປັນສູນກາງທາງດ້ານການເມືອງ, ເສດຖະກິດ, ແລະ ວັດທະນະທຳຂອງປະເທດ?",
            options: [
                "ແຂວງຈຳປາສັກ",
                "ນະຄອນຫຼວງວຽງຈັນ",
                "ແຂວງຫຼວງພະບາງ",
                "ແຂວງສະຫວັນນະເຂດ"
            ],
            answer: "ນະຄອນຫຼວງວຽງຈັນ",
            explanation: "ນະຄອນຫຼວງວຽງຈັນ ແມ່ນສູນກາງຫຼັກຂອງປະເທດ."
        },
        {
            question: "ແຂວງໃດຕໍ່ໄປນີ້ແມ່ນໜຶ່ງໃນ 17 ແຂວງຂອງລາວ?",
            options: [
                "ແຂວງໜອງຄາຍ",
                "ແຂວງອຸດົມໄຊ",
                "ແຂວງສີສະເກດ",
                "ແຂວງຂອນແກ່ນ"
            ],
            answer: "ແຂວງອຸດົມໄຊ",
            explanation: "ແຂວງອຸດົມໄຊ ແມ່ນໜຶ່ງໃນ 17 ແຂວງຂອງ ສປປ ລາວ."
        },
        {
            question: "ນອກຈາກ 17 ແຂວງແລ້ວ, ສປປ ລາວຍັງມີຫົວໜ່ວຍການປົກຄອງພິເສດອີກ 1 ແຫ່ງແມ່ນຫຍັງ?",
            options: [
                "ເຂດພິເສດ",
                "ເມືອງເອກ",
                "ນະຄອນຫຼວງ",
                "ແຂວງອັດຕະປື"
            ],
            answer: "ນະຄອນຫຼວງ",
            explanation: "ປະເທດລາວມີ 17 ແຂວງ ແລະ 1 ນະຄອນຫຼວງ (ນະຄອນຫຼວງວຽງຈັນ)."
        },
        {
            question: "ຂໍ້ໃດບໍ່ແມ່ນແຂວງຂອງ ສປປ ລາວ?",
            options: [
                "ແຂວງບໍລິຄຳໄຊ",
                "ແຂວງຄຳມ່ວນ",
                "ແຂວງໜອງບົວລຳພູ",
                "ແຂວງຊຽງຂວາງ"
            ],
            answer: "ແຂວງໜອງບົວລຳພູ",
            explanation: "ແຂວງໜອງບົວລຳພູ ແມ່ນແຂວງໜຶ່ງຂອງປະເທດໄທ."
        },
        {
            question: "ແຂວງໃດທີ່ຕັ້ງຢູ່ພາກເໜືອຂອງລາວ?",
            options: [
                "ແຂວງຈຳປາສັກ",
                "ແຂວງສາລະວັນ",
                "ແຂວງຫຼວງນໍ້າທາ",
                "ແຂວງສະຫວັນນະເຂດ"
            ],
            answer: "ແຂວງຫຼວງນໍ້າທາ",
            explanation: "ແຂວງຫຼວງນໍ້າທາ ຕັ້ງຢູ່ພາກເໜືອຂອງລາວ."
        },
        {
            question: "ແຂວງໃດທີ່ເປັນທີ່ຮູ້ຈັກກັນໃນນາມ 'ໄຂ່ມຸກແຫ່ງຊຽງຂວາງ'?",
            options: [
                "ແຂວງຊຽງຂວາງ",
                "ແຂວງບໍລິຄຳໄຊ",
                "ແຂວງອຸດົມໄຊ",
                "ແຂວງຜົ້ງສາລີ"
            ],
            answer: "ແຂວງຊຽງຂວາງ",
            explanation: "ທົ່ງໄຫຫີນຢູ່ແຂວງຊຽງຂວາງ ເຮັດໃຫ້ແຂວງນີ້ເປັນທີ່ຮູ້ຈັກ."
        },
        {
            question: "ແຂວງໃດຕໍ່ໄປນີ້ຕັ້ງຢູ່ພາກໃຕ້ຂອງລາວ?",
            options: [
                "ແຂວງຫົວພັນ",
                "ແຂວງໄຊຍະບູລີ",
                "ແຂວງອັດຕະປື",
                "ແຂວງວຽງຈັນ"
            ],
            answer: "ແຂວງອັດຕະປື",
            explanation: "ແຂວງອັດຕະປື ຕັ້ງຢູ່ພາກໃຕ້ສຸດຂອງລາວ."
        },
        {
            question: "ຈຸດປະສົງຫຼັກຂອງການຈັດແບ່ງປະເທດເປັນແຂວງ ແລະ ນະຄອນຫຼວງແມ່ນຫຍັງ?",
            options: [
                "ເພື່ອໃຫ້ມີການປົກຄອງທີ່ສັບສົນ",
                "ເພື່ອແຍກແຍະຄົນອອກຈາກກັນ",
                "ເພື່ອສ້າງຕັ້ງລະບົບການປົກຄອງ ແລະ ການບໍລິຫານປະເທດ",
                "ເພື່ອໃຫ້ມີຫຼາຍຊື່"
            ],
            answer: "ເພື່ອສ້າງຕັ້ງລະບົບການປົກຄອງ ແລະ ການບໍລິຫານປະເທດ",
            explanation: "ການຈັດແບ່ງການປົກຄອງແມ່ນເພື່ອສ້າງຕັ້ງລະບົບການບໍລິຫານທີ່ເປັນລະບຽບ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
