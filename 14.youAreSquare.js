//#region

/*
    * @Title: You're a square!
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem :Given an integral number, determine if it's a square number:

    * In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

    * The tests will always use some integral number, so don't worry about that in dynamic typed languages.

    * @Exampe: time = -1  =>  false
       

*/

//#endregion

//* Solution (8/15/2023)

// Senior should be 55 year old
// Handicap should be greater than 7 and the range from -2 to +26
// better player the lower handicap

function openOrSenior(data) {
  return data.map((category) => {
    const [age, handicap] = category;
    return age >= 55 && handicap > 7 ? "Senior" : "Open";
  });
}

openOrSenior(data);

//* Notes (8/15/2023)
//#region
/*
 */
//#endregion
