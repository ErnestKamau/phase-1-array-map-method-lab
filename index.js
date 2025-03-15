const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const specialWords = {
    "OO": "OO",
    "API": "API",
    "NAN": "NaN",   // key is uppercase version; value is desired output
    "JSONP": "JSONP"
  };

  // Regex to capture ending punctuation (one character: .,!?)
  const punctuationRegex = /[.,!?]$/;

  return tutorials.map(title =>
    title
      .split(" ")
      .map(word => {
        // If word ends with punctuation, separate it.
        let punctuation = "";
        let coreWord = word;
        if (punctuationRegex.test(word)) {
          punctuation = word[word.length - 1];
          coreWord = word.slice(0, -1);
        }
        
        // Check if the core word (in uppercase) is one of the special words.
        if (specialWords.hasOwnProperty(coreWord.toUpperCase())) {
          return specialWords[coreWord.toUpperCase()] + punctuation;
        }
        
        // For words that are not special, check if they are mixed case (camelCase)
        // by seeing if any letter after the first is uppercase.
        if (coreWord.slice(1) !== coreWord.slice(1).toLowerCase()) {
          // Capitalize the first letter and leave the rest unchanged.
          return coreWord.charAt(0).toUpperCase() + coreWord.slice(1) + punctuation;
        }
        
        // Otherwise, convert normally: first letter uppercase, rest lowercase.
        return coreWord.charAt(0).toUpperCase() + coreWord.slice(1).toLowerCase() + punctuation;
      })
      .join(" ")
  );
}
console.log(titleCased());
