/**
 * @param {number[]} nums
 * @return {number}
 */

/*
---------------------------------
 Problem Description: 
 Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

e.g. Input: [-2,1,-3,4,-1,2,1,-5,4] --> Output: 6
    [4, -1, 2, 1] has the largest sum = 6
---------------------------------
*/

var maxSubArray = function(nums) {
    //This is using Kadane's Algorithm (geeksforgeeks.org/largest-sum-contiguous-subarray)
    var max_so_far = 0;
    var max_ending_here = 0;
    var only_negatives = true;
    var max_num;
    
    for(i=0; i<nums.length; i++)
    {
        max_ending_here += nums[i];
        
        //Check to see if the array contains only negatives using our flag operator 'only_negatives'
        if(nums[i] > 0)
        {
            only_negatives = false;
        }
        
        //In case the array contains only negative numbers, just return the highest value 'Max_num'
        if(nums[i] > max_num || max_num == null)
        {
            max_num = nums[i];
        }
        
        // In other cases keep track of the max ending at the current nums[i]
        //If it's 0 or less than zero, reset the max to 0
        //Otherwise, check if it's larger than the max so far and update it if it is.
        if(max_ending_here < 0)
        {
            max_ending_here = 0;
        }
        if(max_so_far < max_ending_here)
        {
            max_so_far = max_ending_here;
        }
        
    }    
    
    //If the array contains only negatives, return the max number in the array
    //Otherwise, return the calculated max so far
    return only_negatives == true ? max_num : max_so_far;
};