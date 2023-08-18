//#region

/*
    * @Title: Midnight Clock
    * @Author: Criztiandev
    * @Date:   8/18/2023
    
    * @Problem :
    Clock shows h hours, m minutes and s seconds after midnight.
    Your task is to write a function which returns the time since midnight in milliseconds.

    * @Example: 
    h = 0
    m = 1
    s = 1

    result = 61000

*/

//#endregion

//* Solution (8/18/2023)

// hour is 3,600,000 mil
// minute is 60,000 mil
// seconds is 1000 mil

const past = (hour, minute, seconds) =>
  hour * 3600000 + minute * 60000 + seconds * 1000;

//* Notes (8/18/2023)
//#region

/*
      I have learn that to convert hour to miliseconds, we need to multiply it by its base mil which is 3,600,000 mil, and to convert minute to miliseconds, we need to multiply it by its base mil which is 60,000 mil, and to convert seconds to miliseconds, we need to multiply it by its base mil which is 1000 mil.

      
  */

//#endregion
