//#region

/*
    * @Title: Remove White Spaces 
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem : Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

    * @Exampe:
        Input: [1, 5.2, 4, 0, -1]
        Output: 9.2

        Input: []
        Output: 0

        Input: [-2.398]
        Output: -2.398

*/

//#endregion

//* Solution 1

// Sum Numbers
function sum(numbers) {
  "use strict";
  if (numbers.length <= 0) return 0;
  return numbers.reduce((prev, current) => prev + current, 0);
}

//* Notes
//#region

/*
I use reducer beucase it function its to take all the value from the array and sum them up, the reducer has two parameter reducer(callback(prev,current),initialValue)

    - the callback provide the logic to sum the numbers
    - the initialValue is the starting point value
*/

//#endregion
