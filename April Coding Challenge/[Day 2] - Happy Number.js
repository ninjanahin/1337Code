/**
 * @param {number} n
 * @return {boolean}
 */

 /*
 ---------------------------------
 Problem Description:

 Write an algorithm to determine if a number n is "happy".
 A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 Return True if n is a happy number, and False if not.

 E.g. Input: 19 --> Output: True
    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1
 ---------------------------------
*/
var isHappy = function(n) {
    var digits = Array.from(String(n), Number);; //array of digits
    
    //The first step is to convert N to an array of digits
    //If the digits array has a length of 1, and the digit is 1 or 7, they can produce a singular value of 1,
    //otherwise they can't
    //With that in mind, while the length of the digits aren't one, calculate the powers, add them together
    //and loop again until the length is 1. Once done, check if the result is 1, if it is, return true, else false
    while(digits.length!= 1 || (digits.length == 1 & digits[0] == 7))
    {    
        n = 0; //reset n
        for(i=0; i<digits.length; i++)
        {
            n+= Math.pow(digits[i], 2);
        }
        //console.log("Calculated N: " + n);
        
        //console.log("Calculated N: " + n);
        //Reset digits array
        digits = Array.from(String(n), Number);
    } 
        
    
    return digits[0] == 1 ? true : false;
};