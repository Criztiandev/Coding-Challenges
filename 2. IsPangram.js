/*
    * @Title: isPangram
    * @Author: Criztiandev
    * @Date:   8/14/2023
    
    * @Problem :
    A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

    * @Example:
    isPangram("The quick brown fox jumps over the lazy dog.") // true
*/

// Solution 1 (8/14/2023)
const sentence = "Thee quick brown fox jumps over the lazy dog.";

// Solution 1 (8/14/2023)
function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let letters of alphabet) {
    if (!string.toLowerCase().includes(letters)) {
      return false;
    }
  }

  const words = string
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .trim()
    .split(" ");

  // Step 2: Check if there is duplication
  const isDupplication = words.map((word, index) => {
    const letters = word.split("");

    // check if there is a occurance for each words
    return letters.some((letter, index) => letters.indexOf(letter) !== index);
  });

  // if there is true inside a single ement
  const isPangram = isDupplication.some((bool) => bool === true);

  // reverse it
  return isPangram === true ? false : true;
}
