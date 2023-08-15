//#region

/*
    * @Title: DropCaps
    * @Author: Criztiandev
    * @Date: 8/15/2023
    
    * @Problem :
    DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

    But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

    should work also on Leading and Trailing Spaces and caps.  

    * @Exampe: 
    "apple of banana"  => "Apple of Banana"

*/

//#endregion

//* Solution (8/15/2023)
const dropCap = (input) => {
  const words = input.split(" ");
  return words.map((word) => {
    if (word.length > 2) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
  });
};

//* Notes (8/15/2023)
//#region
/*
        Mistake: Make sure to read the instruction carefully
    */
//#endregion
