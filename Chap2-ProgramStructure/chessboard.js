/*
3. Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

//Simple approach
let chessboard = ""; //We are declared the chessboard binding outside the loop because we want the totally concatenated strings after all the iterations
let size = 8;
//Outer loop for rows
for (let r = 0; r < size; r++) {
  //Inner loop for cols in each row
  for (let c = 0; c < size; c++) {
    if ((r + c) % 2 == 0) {
      //This is the trick, if the sum of the row and col is divisible by 2, make it blank space (" ") and otherwise an hash ("#") which would represent white and black pattern of a real chess board. at row 1 X col 1,  1+1 = 2 => " ". at row 1 X col 2, 1+2 = 3 => "#"
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n"; // This line is important so that after the inner loop iteration is over and it goes back to the outer loop to start running another batch of 8 iterations the concatenated string to this binding will start on a new line
}

console.log(chessboard);

//Not so simple approach
/*
let size = 8;
let nextLetter = ' ';  // Represents topmost left square
let string = '';

// Create a string of length (size^2 + size) characters depicting a chessboard pattern.
for (let n = 1; n <= (size * size); n++) {
	string += nextLetter;

	// If a string has become `size` chars long, move to the new row;
	// Otherwise, alternate between ' ' & '#' based on the current value of nextLetter.
	if (n % size == 0) {
		string += '\n';

      	// Perform another alternation of the value of nextLetter if size is an odd number,
        // to ensure that the new row starts with the letter opposite to the one in current row.
      	// This is not required when size's value is an even number.
      	if (size % 2 == 1) {
      		nextLetter = (nextLetter == ' ')? '#': ' ';
        }
	}
	else {
		nextLetter = (nextLetter == ' ')? '#': ' ';
	}
}

console.log(string);
*/
