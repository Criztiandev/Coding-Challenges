//#region

/*
    * @Title: Reverse Sequence
    * @Author: Criztiandev
    * @Date:   8/18/2023
    
    * @Problem :
    Build a function that returns an array of integers from n to 1 where n>0..

    * @Example: 
    n=5 --> [5,4,3,2,1]

*/

//#endregion

//* Solution (8/18/2023)

const reverseSequence = (range) =>
  Array.from({ length: range }, (_, i) => i + 1).reverse;

//* Notes (8/18/2023)
//#region

/*
   I have learn the diference of Array(10).keys() and Array.from()

   the Array(10).keys() generate a number with range of the number provided but It start on the 0 index which is not good

   but using the arrat.fror({length: range},(_,i) i + 1), this will generate number based on the range but it will start on 1 and can be change in to diffrent number
  */
//#endregion
