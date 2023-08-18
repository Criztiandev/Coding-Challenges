//#region

/*
    * @Title: Summation
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
    Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

    * @Example: 
    2 -> 3 (1 + 2)
    8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
       

*/

//#endregion

//* Solution (8/17/2023)

const summation = (num) => {
  return [...Array(num).keys()].reduce((prev, curr) => prev + (curr + 1), 0);
};

//* Notes (8/15/2023)
//#region
/*
    I have learn how to use Araay.keys() to create an array of numbers from 0 to n-1
    the keys method return a object with interations based on the Array length.

    I also learn the if you init Array() and put a number in it, it will generate an empty items inside the array

    I also learn that you can adjust the reduce method starting point by adding a second parameter to the reduce method.

    and adjusting the curr value to curr + 1 to avoid the 0 value in the array.
 */
//#endregion
