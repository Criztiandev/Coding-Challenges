//#region

/*
    * @Title: Count Sheep
    * @Author: Criztiandev
    * @Date:   8/16/2023
    
    * @Problem :
    Task:
    Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


    * @Example:
   
       

*/

//#endregion

//* Solution (8/16/2023)
const countSheep = (count) =>
  count < 0
    ? ""
    : [...Array(count).keys()].map((x) => `${x + 1} sheep...`).join("");

//* Notes (8/16/2023)
//#region
/*
 */
//#endregion
