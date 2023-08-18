//#region

/*
    * @Title: Rock Paper Scissor
    * @Author: Criztiandev
    * @Date:   8/17/2023
    
    * @Problem :
    Rock Paper Scissors
    Let's play! You have to return which player won! In case of a draw return Draw!.

    * @Example: 
    Examples(Input1, Input2 --> Output):

    "scissors", "paper" --> "Player 1 won!"
    "scissors", "rock" --> "Player 2 won!"
    "paper", "paper" --> "Draw!"
*/

//#endregion

//* Solution (8/17/2023)

const compBrain = () =>
  ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

const determineWinner = (p1, p2) => {
  const pos = { rock: "scissors", scissors: "paper", paper: "rock" };
  return p1 === p2 ? "Draw" : pos[p1] === p2 ? "Player 1 Won" : "Player 2 Won";
};

//* Notes (8/15/2023)
//#region
/*
       
     */
//#endregion
