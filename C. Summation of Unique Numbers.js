//#region

/*
    * @Title: Summation of all unique numbers
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
        Get all the unique numbers and sum all of the
    * @Example: 

        summation([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 42
       

*/

//#endregion

//* Solution (8/17/2023)

const summation = (arr) =>
  [...new Set(arr)].reduce((prev, curr) => prev + curr, 0);

console.log(summation([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
//* Notes (8/17/2023)
//#region
/*
    
 */
//#endregion
