/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 ---------------------------------
 Problem Description: 
 Given a non-empty array of integers, every element appears twice except for one. Find that single one.

 E.g. Input: [2,2,1] --> Output: 1
----------------------------------
 */
var singleNumber = function(nums) {
    var xor_out;
    
    //We use the XOR operator (Exclusive OR)
    //As we traverse through the array, add nums[i] to the XOR expression
    //The result will be the only number that doesn't have a duplicate
    //This is because num XOR num = false/0 , but num XOR null = num
    for(i=0; i<nums.length; i++)
    {
        xor_out ^= nums[i]; //Add nums[i] to the XOR expression
    }
    
    return xor_out;
};