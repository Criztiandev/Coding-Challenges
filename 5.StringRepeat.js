/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

// Solution (8/15/2023)

function repeatStr(n, s) {
  let res = [];

  // generate text based on the provided number
  for (let i = 0; i < n; i++) {
    res.push(s);
  }

  return res.join("");
}

// using Method
function repeatStrV2(n, s) {
  return s.repeat(n);
}
