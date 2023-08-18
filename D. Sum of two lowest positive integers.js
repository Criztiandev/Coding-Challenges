//#region

/*
    * @Title: Sum of two lowest positive integers
    * @Author: Criztiandev
    * @Date:   8/18/2023
    
    * @Problem :
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

    * @Example: 
    [10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

//#endregion

//* Solution (8/18/2023)

const summationOfTwoLowestPositiveIntegers = (array) => {
  const [fist, second] = array.sort((start, end) => start - end);
  return fist + second;
};

//* Notes (8/18/2023)
//#region

/*
    I have learn that sort default works diffrently, it work with string, it detect the first letter of the string and sort it example (1,12,23,224,23,33,333) but if we pass a function to the sort method by minusing the start and end, it will sort it to the lowest number to the highest number.

    by using destructuring we can get the first and second item of the array and return the sum of it.
*/

//#endregion
