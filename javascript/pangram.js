// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lettersToFind = alphabet.split("");
  let lString = string.toLowerCase();

  for (let char of lString) {
    // every element of the string here will be used as a variable char
    if (alphabet.includes(char)) {
      // yes, it's a letter!
      let index = lettersToFind.indexOf(char);
      if (index !== -1) {
        // 1 means "not found"
        lettersToFind.splice(index, 1);
      }
    }
  }

  return lettersToFind.length === 0;
}

/*
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Should be true
console.log(isPangram("This is not a pangram.")); // Should be false
console.log(isPangram("Pack my box with five dozen liquor jugs.")); // Should be true
console.log(isPangram("")); // Should be false
console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); // Should be true
console.log(isPangram("Abcdefghijkl mnopqrstuvwxyz")); // Should be true (handles spaces)
console.log(isPangram("Detect Pangram")); // Should be false
/*

