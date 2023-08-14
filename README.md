# DONT JUDGE MY CODE IM A BEGINNER

## Higher Order functions

#### Foreach

This function allows you to iterate over the elements of an array, applying a callback function to each element. It's used for executing a particular action or operation on each element in the array, but it doesn't return a new array. It's mainly used for its side effects (like updating values outside the loop) rather than generating a new array.

```js
// Print all the numbers
const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach((numbers) => {
  console.log(`Number : ${numbers}`);
});

//Output
/*
 Number 1
 Number 2
 Number 3
 Number 4
 Number 5
*/
```

### Map

The map function transforms each element of an array based on a provided callback function. It creates a new array where each element corresponds to the result of the callback function applied to the original element. This function is great for creating a modified version of the original array without changing the original array itself.

```js
const originalArr = [1, 2, 3, 4, 5];

const newArr = originalArr.map((elements) => {
  return elements * 2;
});

// Output: [2, 4, 6, 8, 10]
```

### Filter

The filter function creates a new array containing all the elements from the original array that meet a specified condition. It uses a callback function to determine whether each element should be included in the new array or not. The result is an array of elements that satisfy the given condition.

```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((number) => {
  return number % 2 === 0;
});

// Output: [2, 4]
```

### Some

The some function <span style="background:#FFB800; color:black">checks if at least one element in the array meets a specified condition</span> <span style="background:#FA7605; color:black"> It uses a callback function that returns a boolean value. </span> If the callback returns true for any element, some returns true; otherwise, it returns false. It's useful when you want to know if at least one element in the array satisfies a certain condition.

```js
// Example: Check if any element in an array is greater than 10.
const numbers = [5, 8, 15, 2, 6];
const checkNumber = numbers.some((number) => {
  return number > 10;
});

// Output: true
```

### Every

The every function checks if all elements in the array meet a specified condition. It uses a callback function that returns a boolean value. If the callback returns true for every element in the array, every returns true; otherwise, it returns false. It's useful when you want to determine if all elements in the array satisfy a certain condition.

```js
// Example: Check if all elements in an array are greater than 0.
const numbers = [5, 8, 15, 2, 6];
const areAllGreaterThan0 = numbers.every((element) => {
  return element > 0;
});
// Output: true
```

### Reduce

The reduce function takes an array and reduces it to a single value. It does this by repeatedly applying a callback function that takes two arguments (an accumulator and the current element), accumulating a result. The callback function can perform any operation, and the accumulated result is returned as the final output.

```js
// Example: Sum of elements in an array using reduce.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);
console.log(sum); // Output: 15
```
