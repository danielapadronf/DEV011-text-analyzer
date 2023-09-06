import analyzer from './analyzer.js';

const textarea = document.querySelector("textarea[name='user-input']");
const button = document.getElementById("reset-button");
const listItems = {
  wordCount: document.querySelector('[data-testid="word-count"]'),
  characterCount: document.querySelector('[data-testid="character-count"]'),
  characterNoSpacesCount: document.querySelector('[data-testid="character-no-spaces-count"]'),
  numberCount: document.querySelector('[data-testid="number-count"]'),
  numberSum: document.querySelector('[data-testid="number-sum"]'),
  wordLengthAverage: document.querySelector('[data-testid="word-length-average"]')
};

textarea.addEventListener('keyup', () => {
  const text = textarea.value;
  const words = analyzer.getWordCount(text);
  const characterCount = analyzer.getCharacterCount(text);
  const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const wordLengthAverage = analyzer.getAverageWordLength(text);


  listItems.wordCount.textContent = `Total de palabras: ${words}`;
  listItems.characterCount.textContent = `Total de caracteres: ${characterCount}`;
  listItems.characterNoSpacesCount.textContent = `Caracteres (sin espacios): ${characterNoSpacesCount}`;
  listItems.numberCount.textContent = `Recuento de números: ${numberCount}`;
  listItems.numberSum.textContent = `Suma de números: ${numberSum}`;
  listItems.wordLengthAverage.textContent = `Longitud media de palabras: ${wordLengthAverage.toFixed(2)}`;
});

button.addEventListener("click", () => {
  location.reload();
});

//CONTADOR DE PALABRAS