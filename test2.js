/* Test 2: Any language (3/20)
Solve the game "Guess a number", find a secret integer between 1 and 1000000
in less than 50 guesses. Write a function that solves the game without user input and returns the
solution by using the function verify() which is defined with the following
specification:
function verify(guess: integer) -> integer
Argument:
guess (integer) the number to verify
Returns:
0 if the guess is the solution, your program won
-1 if the solution is smaller than the guess parameter
1 if the solution is bigger than the guess parameter

Warning: You are not allowed to call verify() more that 50 times or you loose. */
//

let guess = 500000;
let highest = 1000000;
let lowest = 0;
let random = randomInt(1, 1000000);

console.log(random);
trouvnumber(random);

// functions

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verify(guess) {
  if (guess == random) {
    return 0;
  } else if (guess > random) {
    return 1;
  } else {
    return -1;
  }
}

function trouvnumber(random) {
  for (i = 0; i <= 51; i++) {
    if (i == 51) {
      console.log("You lost CONputer");
    } else {
      console.log("Try number :" + i);
      guess = parseInt((lowest + highest) / 2);
      console.log("Computer said : My guess is ... " + guess + "!!!");
      let state = verify(guess);
      if (state == 1) {
        highest = guess;
      } else if (state == -1) {
        lowest = guess;
      } else {
        console.log("Computer said : I've won, it was :" + guess + ":)");
        break;
      }
    }
  }
}