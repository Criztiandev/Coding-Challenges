/*
## Instruction
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */

// Solution 1 (8/14/2023)

const comment = "This website is for losers LOL!";

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O"];

  // Step 1: trim the string and split it into array of words
  const words = str.trim().split(" ");

  // Step 2: Check thru the array of words and split each words into a letters
  const result = words.map((word) => {
    const letters = word.split("");

    // Step 3: Filter the array of letters and return only the letters that is not a vowel
    const filteredLetters = letters.filter(
      (letter) => !vowels.includes(letter)
    );

    // Step 4: Join the array of letters into a word and return it
    return filteredLetters.join("");
  });

  // Step 5: Join the array of words into a string and return it
  return result.join(" ");
}
