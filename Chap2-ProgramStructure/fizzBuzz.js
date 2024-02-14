/*
2. FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

//Simple solution
for (let count = 1; count <= 100; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
    //This comes first because the fizzBuzz would never be logged to the console if it comes last in the if/else chain. The reason for this is that as soon a number like 15 which is both divisible by 3 and 5 gets into the conditional of numbers divisible by 3 for example, it would never get to the conditional that checks for it being divisible by the two number i.e 3 and 5
    console.log(count, "FizzBuzz");
  } else if (count % 5 == 0) {
    console.log(count, "Buzz");
  } else if (count % 3 == 0) {
    console.log(count, "Fizz");
  } else {
    console.log(count);
  }
}

//Clever solution
for (let count = 1; count <= 100; count++) {
  let output = ""; //This must be declared and initialized in the loop block because we only an empty string to concatenate with during every iteration and since it is declared in the loop block the value of the output binding would always reset during each iteration to an empty which we would concatenate with

  if (count % 3 == 0) {
    output += "Fizz"; // Once we get to the iteration number that is divisible by 3, we concatenate "fizz" to the empty string ("")
  }

  if (count % 5 == 0) {
    output += "Buzz"; // Once we get to the iteration number that is divisible by 3, we concatenate "Buzz" to the empty string ("")
  }

  //NB :- The conditionals for numbers that are divisible by 3 and 5 works in this clever solution because we have two different if statements that would executed independently and the output binding would be concatenated accordingly if both conditionals expression is true. An explanation for this below
  console.log(output || count);
}

/*
In JavaScript, both if/else statements and two separate if statements can be used to control the flow of a program based on conditions. However, there are differences in behavior depending on the specific scenario.

Using if/else statement:
let num = 10;

if (num > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is less than or equal to 5");
}
In this example, if num is greater than 5, the first block of code inside the if statement will be executed. If num is not greater than 5, the code inside the else block will be executed. This ensures that only one block of code is executed based on the condition.

Using two separate if statements:
let num = 10;

if (num > 5) {
    console.log("Number is greater than 5");
}

if (num <= 5) {
    console.log("Number is less than or equal to 5");
}
In this example, both if statements are evaluated independently of each other. If num is greater than 5, the first if block will be executed, and if num is less than or equal to 5, the second if block will be executed. Both blocks could potentially be executed depending on the value of num.

The key difference between the two approaches is that if/else ensures that only one block of code is executed based on the condition, while using two separate if statements allows both blocks to potentially be executed if both conditions are true.

*/
