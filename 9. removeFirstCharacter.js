//#region

/*
    * @Title:  Remove the First and Last Character
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

    * @Exampe:
        "Wordle"
        "ordl"

*/

//#endregion

//* Solution (8/15/2023)
const removeChar = (str) => str.slice(1, str.length - 1);

//* Notes (8/15/2023)
//#region
/*
    I just use the slice() method that gives starting and ending point
    since the counting is zero based, if I want to remove the first and last character, Just need to pass the first and last index of the string      
*/
//#endregion
