//#region

/*
    * @Title: Fake Binary
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
        Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

    * @Example: 
        fakeBin('45385593107843568') // '01011110001100111'
*/

//#endregion

//* Solution (8/17/2023)

const fakeBin = (x) =>
  x
    .split("")
    .map((digit) => (digit >= 5 ? "1" : "0"))
    .join("");
