//#region

/*
    * @Title: Counting Vowel
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
        Return the number (count) of vowels in the given string.
        We will consider a, e, i, o, u as vowels for this Kata (but not y).
        The input string will only consist of lower case letters and/or spaces.

    * @Example: 
        count([abracadabra]) // 5
*/

//#endregion

//* Solution (8/17/2023)

const vowels = (string) =>
  string.split("").filter((letter) => "aeiou".includes(letter)).length;
