//#region

/*
    * @Title: Odd Or Even
    * @Author: Criztiandev
    * @Date:   8/16/2023
    
    * @Problem :
    Task:
    Given a list of integers, determine whether the sum of its elements is odd or even.

    Give your answer as a string matching "odd" or "even".

    If the input array is empty consider it as: [0] (array with a zero).


    * @Example:
    Input: [0]
    Output: "even"

    Input: [0, 1, 4]
    Output: "odd"

    Input: [0, -1, -5]
    Output: "even"
       

*/

//#endregion

//* Solution (8/16/2023)

const oddOrEven = (array) =>
  array.reduce((prev, acc) => prev + acc, 0) % 2 == 0 ? "even" : "odd";

//* Notes (8/16/2023)
//#region
/*
 */
//#endregion
