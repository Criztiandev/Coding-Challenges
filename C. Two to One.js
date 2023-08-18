//#region

/*
    * @Title: Two to One
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
   Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

    * @Example: 
    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"

    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
       

*/

//#endregion

//* Solution (8/17/2023)

const longest = (string1, string2) => {
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(string1) || !regex.test(string2)) return;
  const concat = (string1 + string2).split("").sort();
  return [...new Set(concat)].join("");
};

//* Notes (8/15/2023)
//#region
/*
     I have two ways to check if there is duplicated items

     1. method is using filter and indexOf, but using this has two purpose
        - to get all the duplicated letter 
            ((letter,index) => indexOf(letter) !== index)

        - to get all the not duplicated letter
             ((letter,index) => indexOf(letter) === index)

    2. method that is using the set contructor, this is a new one to but it do its purpose. the set cottroctor will remove all the duplicated letter or item inside the array and return a new array with no duplicated items.

    example
    const arr = [1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5]
    const set = new Set(arr)
    console.log(set) // [1,2,3,4,5]

    in this case i use the spread operator to access the new Constructor and return a new array with no duplicated items.

    this is amazing one
   */
//#endregion
