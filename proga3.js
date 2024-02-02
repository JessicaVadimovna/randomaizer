document.addEventListener('DOMContentLoaded', () => {
    const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let alphabet = englishAlphabet; // По умолчанию используется английский алфавит

    const alphabetRadios = document.querySelectorAll('input[name="alphabet"]');
    const randomButton = document.querySelector('.btn_random');
    const wordInput = document.querySelector('input[type="text"]');

    // Функция для генерации случайного индекса
    const getRandomIndex = (max) => Math.floor(Math.random() * max);

    // Функция для генерации случайного слова
    const generateRandomWord = () => {
        let randomWord = '';
        for (let i = 0; i < 4; i++) {
            randomWord += alphabet[getRandomIndex(alphabet.length)];
        }
        return randomWord;
    };

    // Функция для обработки выбора алфавита
    const handleAlphabetChange = (event) => {
        if (event.target.value === 'russian') {
            alphabet = russianAlphabet;
        } else {
            alphabet = englishAlphabet;
        }
    };

    // Функция для генерации и вывода случайного слова при нажатии на кнопку "Составить"
    const handleRandomButtonClick = () => {
        const randomWord = generateRandomWord();
        wordInput.value = randomWord;
    };

    // Слушатель события для изменения выбора алфавита
    alphabetRadios.forEach(radio => {
        radio.addEventListener('change', handleAlphabetChange);
    });

    // Слушатель события для кнопки "Составить"
    randomButton.addEventListener('click', handleRandomButtonClick);
});

