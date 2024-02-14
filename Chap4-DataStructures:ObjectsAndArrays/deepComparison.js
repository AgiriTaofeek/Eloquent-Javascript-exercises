/*
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

// Your code here.

function deepEqual(obj1, obj2) {
  // Return true if both `obj1` & `obj2` contain reference to the same object.
  if (obj1 === obj2) {
    return true;
  }

  // Check whether a given argument is an non-null "object".
  const isObject = (object) => typeof object == "object" && object != null;

  // Perform deep comparison if both `obj1` & `obj2` are objects.
  if (isObject(obj1) && isObject(obj2)) {
    // Test 1: Both objects contain the same number of properties.
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    }

    // Iterate over the properties of `obj1` and compare it with properties
    // of `obj2`.
    for (let property of Object.keys(obj1)) {
      // Test 2: Check whether a given `property` also exists in `obj2`.
      if (!obj2.hasOwnProperty(property)) {
        return false;
      }

      // Test 3: Check whether a common property have identical values.

      // If both the properties contain "object" as their values,
      // call deepEqual with the properties passed as arguments.
      // Otherwise, perform a non-coercive equality check on a given `property`.
      if (isObject(obj1[property]) && isObject(obj2[property])) {
        // Using square notation in case "objects" are arrays.
        if (!deepEqual(obj1[property], obj2[property])) {
          return false;
        }
      } else {
        if (obj1[property] !== obj2[property]) {
          return false;
        }
      }
    }

    // Return true only after passing all the deep comparison tests.
    return true;
  }
  // Perform a regular non-coercive equality check via '==='.
  else {
    return obj1 === obj2;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(deepEqual(1, "1"));
// → false
console.log(deepEqual(1, [1]));
// → false
console.log(deepEqual(12, 12.1));
// → false
console.log(deepEqual(null, undefined));
// → false
console.log(deepEqual("null", null));
// → false
console.log(deepEqual(undefined, undefined));
// → true
console.log(deepEqual(null, null));
// → true
console.log(deepEqual([1, 1, 1], [1, 1, 2]));
// → false
console.log(deepEqual([1, 2, 3], [1, 2, 3]));
// → true
console.log(
  deepEqual([1, 2, [1, { obj: "abc" }]], [1, 2, [1, { obj: "abc" }]])
);
// → true
console.log(
  deepEqual(
    [1, 2, [1, { obj: "abc" }]],
    [1, 2, [1, { obj: "abc", obj2: "def" }]]
  )
);
// → false

//Shorter solution
function deepEqual(first, second, indentation = "") {
  if (typeof first === typeof second) {
    if (typeof first === "object") {
      if (first !== null) {
        firstKeys = Object.keys(first);
        secondKeys = Object.keys(second);
        if (firstKeys.length == secondKeys.length) {
          trackInequalities = [];
          for (i = 0; i <= firstKeys.length - 1; i++) {
            trackInequalities.push(
              deepEqual(first[firstKeys[i]], second[secondKeys[i]], "    ")
            );
          }
          return !trackInequalities.includes(false);
        } else {
          // Different amount of keys
          return false;
        }
      } else {
        // Both are null
        return true;
      }
    } else {
      return first === second;
    }
  } else {
    return false;
  }
}
function test(assertion, expected, actual) {
  console.log(assertion, expected === actual ? "OK" : "FAILED");
}

test(
  "Shallow deepEqual with same identities should yield true",
  true,
  deepEqual(1, 1)
);
test(
  "Shallow deepEqual with different identities should yield false",
  false,
  deepEqual(1, 2)
);
test(
  "Deep deepEqual with same identities should yield true",
  true,
  deepEqual(
    { value: "test", rest: { value: "test2", rest: null } },
    { value: "test", rest: { value: "test2", rest: null } }
  )
);
test(
  "Deep deepEqual with different identities should yield false",
  false,
  deepEqual(
    { value: "test", rest: { value: "test2", rest: null } },
    { value: "test", rest: { value: "diff", rest: null } }
  )
);
test(
  "Deep deepEqual with identical objects containing arrays should yield true",
  true,
  deepEqual(
    { value: "test", rest: ["test", "test2", "test3"] },
    { value: "test", rest: ["test", "test2", "test3"] }
  )
);
