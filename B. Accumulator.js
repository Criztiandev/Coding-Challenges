//#region

/*
    * @Title: Text Accumolator
    * @Author: Criztiandev
    * @Date:   8/16/2023
    
    * @Problem :

    This time no story, no theory. The examples below show you how to write function accum:

    The parameter of accum is a string which includes only letters from a..z and A..Z.

    * @Example:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

//#endregion

// Solution (8/16/2023)

const accumulator = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i].upperCase() + str[i].repeat(i).toLowerCase());
  }

  return result.join("-");
};

// I have learn to use the repeat method, and the upperCase method
