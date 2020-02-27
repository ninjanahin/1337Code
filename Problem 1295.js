/**
 * @param {number[]} nums
 * @return {number}
 */
//The counter keeps track of the total number of even digit numbers found
//Essentially, convert the numbers to a string, then count the length of the string. If the length is divisible by 2 then it's even
var findNumbers = function(nums) {
    var counter=0;
    for (i=0; i< nums.length; i++)
    {
        if(nums[i].toString(10).length %2 == 0)
        {
            counter++;
        }
    }
    return counter;
};
