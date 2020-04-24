/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*
---------------------------------
 Problem Description:
 Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 e.g. Input: [0,1,0,3,12] --> Output: [1,3,12,0,0]
 	In Place, No copying the array.

---------------------------------
 */
var moveZeroes = function(nums) {
    var current_pos = 0;
    var end_pos = nums.length;
    var num_zeros = 0;
    
    //Determine the start and end of the array, then starting from the beginning of the array
    //Check if the first element is 0, if it is, add to the 0's count, otherwise,
    //move the element to the end of the array by shifting and pushing.
    //When you reach the end of the end, everything is in order
    //All that's left is to add the 0's again, which is done with a for loop and the 0's count.
    while(current_pos != end_pos)
    {
        //console.log("Nums: " + nums);
        if(nums[0] != 0)
        {
            nums.push(nums[0]);
        }
        else
        {
            num_zeros++;
        }
        nums.shift();
        current_pos++;
    }
    
    for(i=0; i<num_zeros; i++)
    {
        //Add the zeros
        nums.push(0);
    }
    
};