//#region

/*
    * @Title: Friends or Foe
    * @Author: Criztiandev
    * @Date:   8/18/2023
    
    * @Problem :
    Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

    * @Example: 
    invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    invert([]) == []
 

*/

//#endregion

//* Solution (8/18/2023)

const invertNumber = (number) => number.map((num) => num * -1);

//* Notes (8/18/2023)
//#region

/*
 */

//#endregion
