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
function litres(time) {
  return Math.floor(0.5 * time);
}

//* Notes (8/15/2023)
//#region
/*
    So the fomula for this problem is 0.5 litres multiplied by the time in hours.
    why 0.5? because Nathan drinks 0.5 litres of water per hour of cycling.
    if it says per hour means it should be multiplied by the time in hours.    
*/
//#endregion
