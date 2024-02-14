/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step = 1) {
  let result = [];
  for (
    let count = start;
    step > 0 ? count <= end : count >= end; //The ternary operation was so that we would be able to return the range in descending order e.g range(5,2,-1) => [5,4,3,2]. If step is +ve, the check condition has to be count <= end and for -ve step it is supposed to be the reverse count >= end since the start would be bigger than the end
    count = count + step
  ) {
    result.push(count);
  }
  return result;
}

function sum(numbers) {
  let result = 0;
  //   for (let count = 0; count < numbers.length; count++) {
  //     result += numbers[count];
  //   }
  for (let number of numbers) {
    result += number;
  }

  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
