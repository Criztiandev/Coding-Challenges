//#region

/*
    * @Title: Friends or Foe
    * @Author: Criztiandev
    * @Date:   8/18/2023
    
    * @Problem :
    Make a program that filters a list of strings and returns a list with only your friends name in it.
    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
    Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

    * @Example: 
        friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
 

*/

//#endregion

//* Solution (8/18/2023)

function friend(friends) {
  return friends.filter((names) => names.length === 4);
}

//* Notes (8/18/2023)
//#region

/*
 */

//#endregion
