//#region

/*
    * @Title: Beginner Series #1 School Paperwork
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem : Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0

    * @Exampe:
        n= 5, m=5: 25
        n=-5, m=5:  0

*/

//#endregion

//* Solution (8/15/2023)

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

//* Notes (8/15/2023)
//#region
/*
    The problem ask if the number of pages and classmates are less than 0 return 0
    else return the number of pages * number of classmates

 */
//#endregion
