/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

//First approach
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    //We basically loop from the last element in the array to the first in turn reversing the array
    result.push(arr[i]);
  }
  return result;
}

//Second approach
// function reverseArray(arr) {
//   let result = [];

//   for (let element of arr) {
//     result.unshift(element); //The unshift method adds elements to the beginning of an array.
//   }

//   return result;
// }

//First approach
//This reverseArrayInPlace function is not supposed to return a new array but just modify the existing array unlike the reverseArray that returns a new array
// function reverseArrayInPlace(array) {
//   const lastIndex = array.length - 1;

//   for (let index = 0; index < Math.floor(array.length / 2); index++) {
//     // Swap elements of first & last elements, then second & second-last elements and so on...
//     let firstValue = array[index];
//     array[index] = array[lastIndex - index];
//     array[lastIndex - index] = firstValue; // This last line is important for it to work properly
//   }
// }

//clever solution
function reverseArrayInPlace(array) {
  for (let index = 0; index < array.length; index++) {
    let lastValue = array.pop();
    // Without removing any existing element, insert the
    // popped out element at ith position of array.
    array.splice(index, 0, lastValue); //The splice function doesn't return a new array, it just modifies an array. The 1st parameter specifies the index of the array we want to modify, 2nd parameter specifies if we want to replace an element at the index of 1st parameter but since it is (0), we don't want to replace any element and finally the 3rd parameter is the element we want to insert at the index of the 1st parameter.
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
