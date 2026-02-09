let currentState = {
    currentSentenceIndex: 0,
    currentTestIndex: 0,
    correctAnswers: 0,
    showFurigana: true,
    showKanji: true,
    isTestMode: false
};

let flashcardState = {
    currentCardIndex: 0,
    cardOrder: [],
    isFlipped: false
};

// Writing mode o'zgaruvchilari
let writingIndex = 0;
let writeChars = Object.keys(kanjiData);
let writer, writerAnim;

// DOM elementlarini aniqlash
const readerView = document.getElementById('readerView');
const testView = document.getElementById('testView');
const flashcardView = document.getElementById('flashcardView');
const writingView = document.getElementById('writingView');

const readerModeBtn = document.getElementById('readerMode');
const testModeBtn = document.getElementById('testMode');
const flashcardModeBtn = document.getElementById('flashcardMode');
const writingModeBtn = document.getElementById('writingMode');

const sentenceText = document.getElementById('sentenceText');
const kanjiInfo = document.getElementById('kanjiInfo');
const prevSentenceBtn = document.getElementById('prevSentence');
const nextSentenceBtn = document.getElementById('nextSentence');
const toggleFuriganaBtn = document.getElementById('toggleFurigana');
const toggleKanjiBtn = document.getElementById('toggleKanji');
const kanjiModal = document.getElementById('kanjiModal');
const closeModal = document.querySelector('.close');

// Test mode elementlari
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
    
    // Writing mode elementlarini tekshirish
    if (!writingModeBtn) {
        console.warn('Writing mode tugmasi topilmadi');
    }
}

function setupEventListeners() {
    // Asosiy rejim tugmalari
    if (readerModeBtn) readerModeBtn.addEventListener('click', () => switchMode('reader'));
    if (testModeBtn) testModeBtn.addEventListener('click', () => switchMode('test'));
    if (flashcardModeBtn) flashcardModeBtn.addEventListener('click', () => switchMode('flashcard'));
    if (writingModeBtn) writingModeBtn.addEventListener('click', () => switchMode('writing'));
    
    // Reader mode elementlari
    if (prevSentenceBtn) prevSentenceBtn.addEventListener('click', showPreviousSentence);
    if (nextSentenceBtn) nextSentenceBtn.addEventListener('click', showNextSentence);
    if (toggleFuriganaBtn) toggleFuriganaBtn.addEventListener('click', toggleFurigana);
    if (toggleKanjiBtn) toggleKanjiBtn.addEventListener('click', toggleKanji);
    
    // Modal va test elementlari
    if (closeModal) closeModal.addEventListener('click', () => kanjiModal.style.display = 'none');
    if (nextTestBtn) nextTestBtn.addEventListener('click', nextTestQuestion);
    
    // Return to hub tugmasi
    const returnBtn = document.getElementById('returnToHub');
    if (returnBtn) {
        returnBtn.addEventListener('click', returnToMainHub);
    }
    
    // Modal tashqarisiga bosganda yopish
    window.addEventListener('click', (e) => {
        if (e.target === kanjiModal) {
            kanjiModal.style.display = 'none';
        }
    });
}

function switchMode(mode) {
    // Barcha view'larni yashirish
    [readerView, testView, flashcardView, writingView].forEach(view => {
        if (view) view.classList.remove('active');
    });
    
    // Barcha tugmalarni normal holatga keltirish
    [readerModeBtn, testModeBtn, flashcardModeBtn, writingModeBtn].forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    
    // Tanlangan rejimni faollashtirish
    switch(mode) {
        case 'reader':
            if (readerView) readerView.classList.add('active');
            if (readerModeBtn) readerModeBtn.classList.add('active');
            currentState.isTestMode = false;
            break;
        case 'test':
            if (testView) testView.classList.add('active');
            if (testModeBtn) testModeBtn.classList.add('active');
            currentState.isTestMode = true;
            startTest();
            break;
        case 'flashcard':
            if (flashcardView) flashcardView.classList.add('active');
            if (flashcardModeBtn) flashcardModeBtn.classList.add('active');
            currentState.isTestMode = false;
            initializeFlashcards();
            break;
        case 'writing':
            if (writingView) writingView.classList.add('active');
            if (writingModeBtn) writingModeBtn.classList.add('active');
            currentState.isTestMode = false;
            startWritingMode();
            break;
    }
}

function displayCurrentSentence() {
    const sentence = sentences[currentState.currentSentenceIndex];
    if (sentenceText) sentenceText.innerHTML = formatSentence(sentence.japanese);
    if (kanjiInfo) kanjiInfo.innerHTML = `<p>${sentence.english}</p>`;
}

function formatSentence(sentence) {
    let formatted = sentence;
    
    formatted = formatted.replace(/\{([^|]+)\|([^}]+)\}/g, 
        '<span class="kanji-word" data-kanji="$1" data-reading="$2">' + 
        (currentState.showKanji ? '$1' : '$2') +
        (currentState.showFurigana ? '<small> ($2)</small>' : '') +
        '</span>'
    );
    
    setTimeout(() => {
        document.querySelectorAll('.kanji-word').forEach(word => {
            word.addEventListener('click', (e) => {
                const kanji = e.target.closest('.kanji-word').dataset.kanji;
                showKanjiDetails(kanji);
            });
        });
    }, 0);
    
    return formatted;
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

function toggleFurigana() {
    currentState.showFurigana = !currentState.showFurigana;
    if (toggleFuriganaBtn) {
        toggleFuriganaBtn.textContent = currentState.showFurigana ? 'Talaffuzni Yashirish' : 'Talaffuzni Korsatish';
    }
    displayCurrentSentence();
}

function toggleKanji() {
    currentState.showKanji = !currentState.showKanji;
    if (toggleKanjiBtn) {
        toggleKanjiBtn.textContent = currentState.showKanji ? 'ひらがな' : 'かんじ';
    }
    displayCurrentSentence();
}

function showKanjiDetails(kanji) {
    const data = kanjiData[kanji];
    if (!data) return;
    
    const modalKanji = document.getElementById('modalKanji');
    const onyomi = document.getElementById('onyomi');
    const kunyomi = document.getElementById('kunyomi');
    const meaning = document.getElementById('meaning');
    const strokeContainer = document.getElementById('strokeAnimation');
    
    if (modalKanji) modalKanji.textContent = kanji;
    if (onyomi) onyomi.textContent = data.readings.onyomi.join('、');
    if (kunyomi) kunyomi.textContent = data.readings.kunyomi.join('、');
    if (meaning) meaning.textContent = data.meaning.join(', ');
    
    if (strokeContainer) {
        strokeContainer.innerHTML = `
            <div style="font-size: 80px; color: #2c3e50;">${kanji}</div>
            <div style="text-align: center; margin-top: 10px; color: #7f8c8d;">
                画数: ${data.strokeCount}
            </div>
        `;
    }
    
    if (kanjiModal) kanjiModal.style.display = 'block';
}

// Test Mode Functions
// Test Mode Functions - UPDATED WITH RANDOMIZATION
let currentTestQuestions = [];
let currentTestOrder = [];

function startTest() {
    currentState.currentTestIndex = 0;
    currentState.correctAnswers = 0;
    
    // Tasodifiy test savollarini tanlash
    currentTestQuestions = getRandomTestQuestions(50); // 50 ta tasodifiy savol
    currentTestOrder = [...Array(currentTestQuestions.length).keys()];
    
    // Savollarni aralashtirish
    shuffleArray(currentTestOrder);
    
    displayTestQuestion();
    updateTestProgress();
}

function getRandomTestQuestions(count) {
    // Barcha savollarni nusxalash
    const allQuestions = [...testSentences];
    
    // Agar kerakli savollar soni mavjud savollardan ko'p bo'lsa
    if (count >= allQuestions.length) {
        return allQuestions;
    }
    
    // Tasodifiy savollarni tanlash
    const shuffled = [...allQuestions];
    shuffleArray(shuffled);
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayTestQuestion() {
    if (currentState.currentTestIndex >= currentTestQuestions.length) {
        endTest();
        return;
    }
    
    const currentOrderIndex = currentTestOrder[currentState.currentTestIndex];
    const test = currentTestQuestions[currentOrderIndex];
    
    if (!test) return;
    
    testSentence.innerHTML = test.sentence.replace('__', '<span class="blank">_____</span>');
    testFeedback.textContent = '';
    nextTestBtn.classList.add('hidden');
    
    // Variantlarni ham aralashtirish
    const shuffledOptions = [...test.options];
    shuffleArray(shuffledOptions);
    
    optionsGrid.innerHTML = '';
    shuffledOptions.forEach(option => {
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
        testFeedback.textContent = 'Togri！ 🎉';
        testFeedback.style.color = '#27ae60';
    } else {
        testFeedback.textContent = `Xato! To'g'ri Javob「${correct}」`;
        testFeedback.style.color = '#e74c3c';
    }
    
    nextTestBtn.classList.remove('hidden');
    updateTestProgress();
}

function nextTestQuestion() {
    currentState.currentTestIndex++;
    if (currentState.currentTestIndex < currentTestQuestions.length) {
        displayTestQuestion();
        updateTestProgress();
    } else {
        endTest();
    }
}

function updateTestProgress() {
    currentQuestionSpan.textContent = currentState.currentTestIndex + 1;
    totalQuestionsSpan.textContent = currentTestQuestions.length;
    correctCountSpan.textContent = currentState.correctAnswers;
}

function endTest() {
    const percentage = Math.round((currentState.correctAnswers / currentTestQuestions.length) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = 'Ajoyib! Siz kanjilarni juda yaxshi bilasiz! 🎊';
    } else if (percentage >= 70) {
        message = 'Yaxshi! Yana bir oz mashq qilishingiz kerak. 👍';
    } else if (percentage >= 50) {
        message = 'Yaxshi boshlang! Davom eting! 💪';
    } else {
        message = 'Qaytadan urinib ko\'ring, siz buni uddalaysiz! 🔄';
    }
    
    testSentence.innerHTML = `
        <div style="text-align: center;">
            <h3>Test Tugadi！</h3>
            <p>Hisob: ${currentState.correctAnswers}/${currentTestQuestions.length} (${percentage}%)</p>
            <p>${message}</p>
            <button onclick="startTest()" class="nav-btn">Yana Test Qilish</button>
        </div>
    `;
    optionsGrid.innerHTML = '';
    testFeedback.textContent = '';
    nextTestBtn.classList.add('hidden');
}

function initializeFlashcards() {
    flashcardState.cardOrder = Object.keys(kanjiData);
    flashcardState.currentCardIndex = 0;
    flashcardState.isFlipped = false;
    
    setupFlashcardEvents();
    displayCurrentCard();
}

function setupFlashcardEvents() {
    const flashcard = document.getElementById('flashcard');
    const flipBtn = document.getElementById('flipCard');
    const prevBtn = document.getElementById('prevCard');
    const nextBtn = document.getElementById('nextCard');
    const shuffleBtn = document.getElementById('shuffleCards');
    
    if (flashcard) flashcard.addEventListener('click', flipCurrentCard);
    if (flipBtn) flipBtn.addEventListener('click', flipCurrentCard);
    if (prevBtn) prevBtn.addEventListener('click', showPreviousCard);
    if (nextBtn) nextBtn.addEventListener('click', showNextCard);
    if (shuffleBtn) shuffleBtn.addEventListener('click', shuffleCards);
}

function displayCurrentCard() {
    const kanji = flashcardState.cardOrder[flashcardState.currentCardIndex];
    const data = kanjiData[kanji];
    
    const flashcard = document.getElementById('flashcard');
    if (flashcard) flashcard.classList.remove('flipped');
    flashcardState.isFlipped = false;
    
    const flashcardKanji = document.getElementById('flashcardKanji');
    const backKanji = document.getElementById('backKanji');
    const backOnyomi = document.getElementById('backOnyomi');
    const backKunyomi = document.getElementById('backKunyomi');
    const backMeaning = document.getElementById('backMeaning');
    const currentCard = document.getElementById('currentCard');
    
    if (flashcardKanji) flashcardKanji.textContent = kanji;
    if (backKanji) backKanji.textContent = kanji;
    if (backOnyomi) backOnyomi.textContent = data.readings.onyomi.join('、');
    if (backKunyomi) backKunyomi.textContent = data.readings.kunyomi.join('、');
    if (backMeaning) backMeaning.textContent = data.meaning.join(', ');
    if (currentCard) currentCard.textContent = flashcardState.currentCardIndex + 1;
}

function flipCurrentCard() {
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcardState.isFlipped = !flashcardState.isFlipped;
        flashcard.classList.toggle('flipped');
    }
}

function showPreviousCard() {
    if (flashcardState.currentCardIndex > 0) {
        flashcardState.currentCardIndex--;
        displayCurrentCard();
    }
}

function showNextCard() {
    if (flashcardState.currentCardIndex < flashcardState.cardOrder.length - 1) {
        flashcardState.currentCardIndex++;
        displayCurrentCard();
    }
}

function shuffleCards() {
    for (let i = flashcardState.cardOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardState.cardOrder[i], flashcardState.cardOrder[j]] = [flashcardState.cardOrder[j], flashcardState.cardOrder[i]];
    }
    flashcardState.currentCardIndex = 0;
    displayCurrentCard();
}

// Writing Mode
function startWritingMode() {
    // Barcha kerakli elementlar mavjudligini tekshirish
    const elements = {
        prevBtn: document.getElementById("prevWriteKanji"),
        nextBtn: document.getElementById("nextWriteKanji"),
        playBtn: document.getElementById("playStrokeOrder"),
        clearBtn: document.getElementById("clearWriting"),
        hintBtn: document.getElementById("hintStroke"),
        strokeBox: document.getElementById("strokeBox"),
        writeBox: document.getElementById("writeBox"),
        label: document.getElementById("writeKanjiLabel")
    };
    
    // Agar elementlar topilmasa, xabar berish
    for (const [key, element] of Object.entries(elements)) {
        if (!element && key !== 'hintBtn') { // hintBtn ixtiyoriy
            console.error(`Writing mode elementi topilmadi: ${key}`);
            return;
        }
    }
    
    loadWritingKanji(writeChars[writingIndex]);

    elements.prevBtn.onclick = () => {
        if (writingIndex > 0) writingIndex--;
        loadWritingKanji(writeChars[writingIndex]);
    };

    elements.nextBtn.onclick = () => {
        if (writingIndex < writeChars.length - 1) writingIndex++;
        loadWritingKanji(writeChars[writingIndex]);
    };

    elements.playBtn.onclick = () => writerAnim?.animateCharacter();
    elements.clearBtn.onclick = () => loadWritingKanji(writeChars[writingIndex]);
    
    // Hint faqat mavjud bo'lsa
    if (elements.hintBtn) {
        elements.hintBtn.onclick = () => writer?._quiz?.showHint();
    }
}

function loadWritingKanji(kanji) {
    const label = document.getElementById("writeKanjiLabel");
    const strokeBox = document.getElementById("strokeBox");
    const writeBox = document.getElementById("writeBox");
    
    if (label) label.textContent = kanji;
    if (strokeBox) strokeBox.innerHTML = "";
    if (writeBox) writeBox.innerHTML = "";

    try {
        writerAnim = HanziWriter.create('strokeBox', kanji, {
            width: 200, height: 200, padding: 5
        });

        writer = HanziWriter.create('writeBox', kanji, {
            width: 200,
            height: 200,
            padding: 5,
            showOutline: true,
            showCharacter: false
        });

        writer.quiz({
            onMistake(strokeData) {
                console.log("Xato qilindi:", strokeData);
            },
            onCorrectStroke(strokeData) {
                console.log("To'g'ri stroke:", strokeData);
            },
            onComplete(data) {
                console.log("Kanji tugatildi!");
            }
        });
    } catch (error) {
        console.error("HanziWriter xatosi:", error);
    }
}

function returnToMainHub() {
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 200);
}

document.addEventListener('DOMContentLoaded', init);