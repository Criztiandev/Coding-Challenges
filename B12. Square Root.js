//#region

/*
    * @Title: Squaroot of Sum
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem :  
      Find the square root and summation it

    * @Example: 
      
       

*/

//#endregion

//* Solution (8/15/2023)
function squareSum(numbers) {
  return numbers.reduce((prev, current) => prev + Math.pow(current, 2), 0);
}

//* Notes (8/15/2023)
//#region
/*
     Since its a summation that requires each number to be squared, I use the reduce and I make the current number to the power of 2 and add it to the previous number.
  */
//#endregion
