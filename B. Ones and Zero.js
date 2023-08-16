//#region

/*
    * @Title: Ones and Zeros
    * @Author: Criztiandev
    * @Date:   8/16/2023
    
    * @Problem :

    Given an array of ones and zeroes, convert the equivalent binary value to an integer.

    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
    * @Example:
    Testing: [0, 0, 0, 1] ==> 1
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 0, 1] ==> 5
    Testing: [1, 0, 0, 1] ==> 9
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 1, 0] ==> 6
    Testing: [1, 1, 1, 1] ==> 15
    Testing: [1, 0, 1, 1] ==> 11

*/

//#endregion

// Solution (8/16/2023)

const OneAndZero = (arr) => {
  let binary = arr.join("");
  return parseInt(binary, 2);
};

// By Using the parseInt() method, we can convert the binary number to a decimal number.
