const analyzer = {
  getWordCount: (text) =>{ //recuento de palabras de un texto.
    const palabras = text.trim().split(/\s+/);
    return palabras.length;
  },
  getCharacterCount: (text) => { //recuento de caracteres de un texto.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => { //recuento de caracteres excluyendo espacios y signos de puntuación de un texto.
    return text.replace(/[^a-zA-Z0-9]/g,'').length;
  },
  getAverageWordLength: (text) => { //longitud media de las palabras en un texto.
    const words= text.split(/\s+/);
    // const wordLengths = words.length;
    const caracteresTotales = words.join('').length;
    if (text.length === 0){
      return 0;
    }
    let mediaDePalabras = caracteresTotales/words.length; 
    return parseFloat(mediaDePalabras.toFixed(2))
  },
  getNumberCount: (text) => { //contar cúantos números hay en un texto
    const numbers = text.match(/[-+]?\b\d+(\.\d+)?\b/g);
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => { // suma longitud media de los números en un texto.
    const numbers = text.match(/[-+]?\b\d+(\.\d+)?\b/g);
    const sumaDeNumero = numbers ? numbers.reduce((sum, num) => sum + parseFloat(num), 0) : 0;
    return parseFloat(sumaDeNumero.toFixed(2))
  }
};

export default analyzer;