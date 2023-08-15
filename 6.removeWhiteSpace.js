//#region

/*
    * @Title: Remove White Spaces 
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem : Write a function that removes the spaces from the string, then return the resultant string.
    * @Exampe: "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd" 

*/

//#endregion

//* Solution 1

// to remove the white space, I use Regular expression to remove everything
// Note I need to learn this stupid regular expression to use it in the future

const noSpace = (x) => x.replace(/\s/g, "");
