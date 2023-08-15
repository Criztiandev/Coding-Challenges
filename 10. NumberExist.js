//#region

/*
    * @Title: You only need one - Beginner
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem : 
    You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. 

    Array can contain numbers or strings. X can be either. 
    Return true if the array contains the value, false if not.

    * @Exampe: 
    check([66, 101], 66), true
       

*/

//#endregion

//* Solution (8/15/2023)
function check(a, x) {
  return a.includes(x) || false;
}

//* Notes (8/15/2023)
//#region
/*
   I used include to check if the item exist in the array and use the || if there is no item in the array it will return false     
*/
//#endregion
