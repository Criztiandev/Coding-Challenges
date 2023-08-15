//#region

/*
    * @Title: Keep Hydrated!
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem : Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

    * You get given the time in hours and you need to return the number of litres * Nathan will drink, rounded to the smallest value.

    * @Exampe: time = 3 ----> litres = 1
       

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
