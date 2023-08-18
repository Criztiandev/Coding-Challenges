//#region

/*
    * @Title: Calculate the Unique numbers in the Array
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
        You are given an array of integers. Your task is to implement a function that calculates the count of unique elements in the array using the Set data structure.

        Write a function countUniqueElements(arr) that takes an array of integers as input and returns the count of unique elements present in the array.
    * @Example: 

        countUniqueElements([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
       

*/

//#endregion

//* Solution (8/15/2023)

const countUniqueElements = (arr) => [...new Set(arr)].length;

console.log(countUniqueElements([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
//* Notes (8/15/2023)
//#region
/*
    
 */
//#endregion
