//#region

/*
    * @Title: Counting Sheep
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
        Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



    * @Example: 

    For example,

    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
       

*/

//#endregion

//* Solution (8/17/2023)

const countSheep = (arr) => arr.filter((bool) => bool === true);
