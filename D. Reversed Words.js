//#region

/*
    * @Title: Reversed Words
    * @Author: Criztiandev
    * @Date:   8/18/2023
    
    * @Problem :
    Complete the solution so that it reverses all of the words within the string passed in.
    Words are separated by exactly one space and there are no leading or trailing spaces.

    * @Example: 
    Example(Input --> Output):

    "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

*/

//#endregion

//* Solution (8/18/2023)

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
//#region

/*
   I have learn the diference of Array(10).keys() and Array.from()

   the Array(10).keys() generate a number with range of the number provided but It start on the 0 index which is not good

   but using the arrat.fror({length: range},(_,i) i + 1), this will generate number based on the range but it will start on 1 and can be change in to diffrent number
  */
//#endregion
