//Test 9: Javascript (1/20)
//Write a function that, when called, returns an array for which each element is a letter of the alphabet, from "A" to "Z" (exactly once, in order and upper case). Your code cannot contain the character ' (quote), " (double quote) or ` (back quote)
 
function getAZArray () {
    const result = []
    for (i = 65; i <= 90 ; i++){
        result.push(String.fromCharCode(i))
      }
      return result
 
    }
