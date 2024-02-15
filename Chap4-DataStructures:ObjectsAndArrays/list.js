/*
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

// Using recursion to convert to a list.
function arrayToList(array) {
  // Checking whether user has passed a non-empty array as an argument.
  if (!array.length) {
    return {};
  }

  // Create a node for the first element of the array.
  let list = {
    value: array[0],
  };

  // Base step: `array` only contains a single element.
  // It is both the HEAD & TAIL of the list.
  if (array.length == 1) {
    list.rest = null;
    return list;
  }

  // Recursive Step: Create a List with the remaining elements of `array`.
  list.rest = arrayToList(array.slice(1));

  return list;
}
function prepend(element, list) {
  // Return a single node List if `list` is an empty List i.e., {}.
  if (list !== null && !Object.keys(list).length) {
    return {
      value: element,
      rest: null,
    };
  }

  // Add the element to the front of (Linked) List, `list`.
  return {
    value: element,
    rest: list,
  };
}

//Shorter approach
function arrayToList(inputArray) {
  let list = {};
  if (inputArray.length > 0) {
    list = prepend(inputArray[0], arrayToList(inputArray.slice(1)));
  } else {
    return null;
  }
  return list;
}
function prepend(el, list) {
  return { value: el, rest: list };
}

//Iterative approach
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
    // list = prepend(arr[i], list); // We could use the prepend function for this too
  }
  return list;
}
function prepend(el, list) {
  return { value: el, rest: list };
}

//Recursive approach
// function listToArray(list) {
//   // Checking whether user has passed a non-empty array as an argument.
//   if (!Object.keys(list).length) {
//     return [];
//   }

//   let array = [list.value];

//   // Base Step: Node is the TAIL of the List.
//   if (list.rest === null) {
//     return array;
//   }

//   // Recursive Step: Concatenate the array returned by calling the function itself
//   // if the List node contains a reference to another List node via `rest` property.

//   // Note about concat() method of an Array
//   // The concat() method is immutable i.e., it does not alter `array`.
//   // It just creates a new array containing the elements of the two arrays.
//   return array.concat(listToArray(list.rest));
// }

//Shorter recursive approach
// function listToArray(inputList) {
//   currentArray = [inputList.value];
//   if (inputList.rest) {
//     currentArray = currentArray.concat(listToArray(inputList.rest));
//   }
//   return currentArray;
// }

//Iterative approach
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

//First approach
// function nth(list, index) {
//   // Return undefined if `list` is an empty List i.e., {}.
//   if (!Object.keys(list).length) {
//     return undefined;
//   }

//   // Create a helper arrow function to keep track of the current index
//   // (while moving deeper into the `list`) & get the value at `index` (if it exists).
//   const get_value = (list, index, current_index) => {
//     // Base Step 1: Current node is the HEAD of `list`.
//     if (list.rest === null) {
//       if (current_index == index) {
//         return list.value;
//       } else {
//         return undefined;
//       }
//     }

//     // Base Step 2: Current Node is at the index specified by `index`.
//     if (current_index == index) {
//       return list.value;
//     } else {
//       // Recursive Step: Invokes get_value() on the node referenced by `rest`
//       // with `current_index` being incremented by 1.

//       // Alternate Approach: If increment operator (++) operates on `current_index`,
//       // use the prefix version (`++current_index`) instead of the
//       // postfix version (`current_index++`).
//       return get_value(list.rest, index, (current_index += 1));
//     }
//   };

//   return get_value(list, index, 0);
// }

//Second approach
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

/*
The data structure you're describing above, where each object holds a reference to the next one forming a linked list, is indeed a linked list. Linked lists have several applications in computer science and software engineering due to their flexibility and efficiency in certain scenarios. Here are some common applications:

Dynamic Memory Allocation:
Linked lists are used in memory management systems to allocate memory dynamically. When a new block of memory is requested, a linked list of free memory blocks is traversed to find a suitable space.

Implementing Stacks and Queues:
Linked lists can be used to implement stack and queue data structures. In a stack, items are added and removed from the same end (LIFO - Last In, First Out), while in a queue, items are added at one end and removed from the other (FIFO - First In, First Out).

Sparse Arrays:
Linked lists are efficient for representing sparse arrays where most elements are empty. Instead of wasting memory to represent empty elements, linked lists only allocate memory for the elements that have values.

Undo Functionality:
Linked lists are used in applications that require undo functionality. Each operation performed is stored as a node in a linked list, allowing users to undo operations by traversing the list backward.

Symbol Tables:
Linked lists are used in symbol tables to represent a collection of key-value pairs, where each key-value pair is stored as a node in the list.

Polynomial Manipulation:
Linked lists can represent polynomials efficiently. Each node in the linked list represents a term in the polynomial, with pointers to the next term.

Hash Table Collision Handling:
In hash table implementations, linked lists are used to handle collisions. When two keys hash to the same index, a linked list of key-value pairs is maintained at that index.

Task Scheduling:
Linked lists are used in task scheduling algorithms, such as Round Robin scheduling, where each task is represented as a node in the list, and tasks are scheduled based on their priority or arrival time.

Graph Algorithms:
Linked lists are used to represent adjacency lists in graph algorithms. In an adjacency list representation, each vertex of the graph is stored as a node in the list, and the list contains references to its neighboring vertices.

File Systems:
Linked lists are used in file systems to maintain the directory structure. Each directory entry contains a reference to the next directory entry, forming a linked list of directory entries.
These are just a few examples of the many applications of linked lists in computer science and software engineering. They are particularly useful in situations where efficient insertion and deletion operations are required and the size of the data structure may change dynamically.

*/
