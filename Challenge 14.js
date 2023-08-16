//#region

/*
    * @Title: You're a square!
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem :
    Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

    he tests will always use some integral number, so don't worry about that in dynamic typed languages.

    * @Example: 
    time = -1  =>  false
       

*/

//#endregion

//* Solution (8/15/2023)

const isSquare = (number) => {
  return n >= 0 ? Math.sqrt(number) % 1 === 0 : false;
};

//* Notes (8/15/2023)
//#region
/*
 */
//#endregion
