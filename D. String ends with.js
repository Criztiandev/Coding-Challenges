//#region

/*
    * @Title: String Ends with
    * @Author: Criztiandev
    * @Date:   8/18/2023
    
    * @Problem :
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string

    * @Example: 
    Examples:

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false

*/

//#endregion

//* Solution (8/18/2023)

const endsWith = (str, ends) =>
  str.slice(str.lastIndexOf(ends), str.length) === ends;

//#region

/*
    I have learn how to get the last word without relaying on the endsWith method
    */
//#endregion
