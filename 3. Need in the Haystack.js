/*
    * @Title: A Needle in the Haystack
    * @Author: Criztiandev
    * @Date:   8/15/2023
    
    * @Problem :
   Can you find the needle in the haystack?
  Write a function findNeedle() that takes an array full of junk but containing one "needle"

  After your function finds the needle it should return a message (as a string) that says:

"f  ound the needle at position " plus the index it found the needle, so:
    * @Example:
    findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
*/

// Solution 1
const haystack = ["hay", "junk", "hay", "hay", "needle"];

const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;
