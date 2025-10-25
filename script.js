
let currentState = {
    currentSentenceIndex: 0,
    currentTestIndex: 0,
    correctAnswers: 0,
    showFurigana: true,
    showKanji: true,
    isTestMode: false
};


const readerView = document.getElementById('readerView');
const testView = document.getElementById('testView');
const readerModeBtn = document.getElementById('readerMode');
const testModeBtn = document.getElementById('testMode');
const sentenceText = document.getElementById('sentenceText');
const kanjiInfo = document.getElementById('kanjiInfo');
const prevSentenceBtn = document.getElementById('prevSentence');
const nextSentenceBtn = document.getElementById('nextSentence');
const toggleFuriganaBtn = document.getElementById('toggleFurigana');
const toggleKanjiBtn = document.getElementById('toggleKanji');
const kanjiModal = document.getElementById('kanjiModal');
const closeModal = document.querySelector('.close');


const testSentence = document.getElementById('testSentence');
const optionsGrid = document.getElementById('optionsGrid');
const testFeedback = document.getElementById('testFeedback');
const nextTestBtn = document.getElementById('nextTest');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const correctCountSpan = document.getElementById('correctCount');


function init() {
    setupEventListeners();
    displayCurrentSentence();
    updateTestProgress();
}


function setupEventListeners() {
    readerModeBtn.addEventListener('click', () => switchMode('reader'));
    testModeBtn.addEventListener('click', () => switchMode('test'));
    prevSentenceBtn.addEventListener('click', showPreviousSentence);
    nextSentenceBtn.addEventListener('click', showNextSentence);
    toggleFuriganaBtn.addEventListener('click', toggleFurigana);
    toggleKanjiBtn.addEventListener('click', toggleKanji);
    closeModal.addEventListener('click', () => kanjiModal.style.display = 'none');
    nextTestBtn.addEventListener('click', nextTestQuestion);
    
    
    window.addEventListener('click', (e) => {
        if (e.target === kanjiModal) {
            kanjiModal.style.display = 'none';
        }
    });
}

// Birbalo
function switchMode(mode) {
    if (mode === 'reader') {
        readerView.classList.add('active');
        testView.classList.remove('active');
        readerModeBtn.classList.add('active');
        testModeBtn.classList.remove('active');
        currentState.isTestMode = false;
    } else {
        readerView.classList.remove('active');
        testView.classList.add('active');
        readerModeBtn.classList.remove('active');
        testModeBtn.classList.add('active');
        currentState.isTestMode = true;
        startTest();
    }
}

// DAvom et shottan
function displayCurrentSentence() {
    const sentence = sentences[currentState.currentSentenceIndex];
    sentenceText.innerHTML = formatSentence(sentence.japanese);
    kanjiInfo.innerHTML = `<p>${sentence.english}</p>`;
}

function formatSentence(sentence) {
    let formatted = sentence;
    
    
    formatted = formatted.replace(/\{([^|]+)\|([^}]+)\}/g, 
        '<span class="kanji-word" data-kanji="$1" data-reading="$2">' + 
        (currentState.showKanji ? '$1' : '$2') +
        (currentState.showFurigana ? '<small> ($2)</small>' : '') +
        '</span>'
    );
    
    return formatted;
    
   
    setTimeout(() => {
        document.querySelectorAll('.kanji-word').forEach(word => {
            word.addEventListener('click', (e) => {
                const kanji = e.target.closest('.kanji-word').dataset.kanji;
                showKanjiDetails(kanji);
            });
        });
    }, 0);
}


function showPreviousSentence() {
    if (currentState.currentSentenceIndex > 0) {
        currentState.currentSentenceIndex--;
        displayCurrentSentence();
    }
}

function showNextSentence() {
    if (currentState.currentSentenceIndex < sentences.length - 1) {
        currentState.currentSentenceIndex++;
        displayCurrentSentence();
    }
}

// AZOB 
function toggleFurigana() {
    currentState.showFurigana = !currentState.showFurigana;
    toggleFuriganaBtn.textContent = currentState.showFurigana ? 'Hide Spelling' : 'Show Spelling';
    displayCurrentSentence();
}

function toggleKanji() {
    currentState.showKanji = !currentState.showKanji;
    toggleKanjiBtn.textContent = currentState.showKanji ? 'ひらがな' : 'かんじ';
    displayCurrentSentence();
}


function showKanjiDetails(kanji) {
    const data = kanjiData[kanji];
    if (!data) return;
    
    document.getElementById('modalKanji').textContent = kanji;
    document.getElementById('onyomi').textContent = data.readings.onyomi.join('、');
    document.getElementById('kunyomi').textContent = data.readings.kunyomi.join('、');
    document.getElementById('meaning').textContent = data.meaning.join(', ');
    
   
    const strokeContainer = document.getElementById('strokeAnimation');
    strokeContainer.innerHTML = `
        <div style="font-size: 80px; color: #2c3e50;">${kanji}</div>
        <div style="text-align: center; margin-top: 10px; color: #7f8c8d;">
            画数: ${data.strokeCount}
        </div>
    `;
    
    kanjiModal.style.display = 'block';
}

// Test 
function startTest() {
    currentState.currentTestIndex = 0;
    currentState.correctAnswers = 0;
    displayTestQuestion();
    updateTestProgress();
}

function displayTestQuestion() {
    const test = testSentences[currentState.currentTestIndex];
    if (!test) return;
    
    testSentence.innerHTML = test.sentence.replace('__', '<span class="blank">_____</span>');
    testFeedback.textContent = '';
    nextTestBtn.classList.add('hidden');
    
   
    optionsGrid.innerHTML = '';
    test.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, test.correct));
        optionsGrid.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        option.disabled = true;
        if (option.textContent === correct) {
            option.classList.add('correct');
        } else if (option.textContent === selected && selected !== correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        currentState.correctAnswers++;
        testFeedback.textContent = 'Correct！ 🎉';
        testFeedback.style.color = '#27ae60';
    } else {
        testFeedback.textContent = `Incorrect. The answer is「${correct}」`;
        testFeedback.style.color = '#e74c3c';
    }
    
    nextTestBtn.classList.remove('hidden');
    updateTestProgress();
}

function nextTestQuestion() {
    currentState.currentTestIndex++;
    if (currentState.currentTestIndex < testSentences.length) {
        displayTestQuestion();
        updateTestProgress();
    } else {
        endTest();
    }
}

function updateTestProgress() {
    currentQuestionSpan.textContent = currentState.currentTestIndex + 1;
    totalQuestionsSpan.textContent = testSentences.length;
    correctCountSpan.textContent = currentState.correctAnswers;
}

function endTest() {
    const percentage = Math.round((currentState.correctAnswers / testSentences.length) * 100);
    testSentence.innerHTML = `
        <div style="text-align: center;">
            <h3>Completed！</h3>
            <p>Score: ${currentState.correctAnswers}/${testSentences.length} (${percentage}%)</p>
            <button onclick="startTest()" class="nav-btn">Again</button>
        </div>
    `;
    optionsGrid.innerHTML = '';
    testFeedback.textContent = '';
    nextTestBtn.classList.add('hidden');
}

// Initialize the app when loaded
document.addEventListener('DOMContentLoaded', init);