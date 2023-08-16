//#region

/*
    * @Title: Multiples of 3 or 5
    * @Author: Criztiandev
    * @Date:   8/16/2023
    
    * @Problem :
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

    Note: If the number is a multiple of both 3 and 5, only count it once.
    * @Example:
    input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
       

*/

//#endregion

//* Solution (8/16/2023)

const solution = (range) => {
  let sum = 0;
  if (range < 0) return 0;

  for (let i = 0; i < range; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
};

//* Notes (8/16/2023)
//#region
/*
 I have learn how to work with modulo, I really need to improve my reading comprehension skills, it very hard for me, it seems im so bad at it
*/
//#endregion
