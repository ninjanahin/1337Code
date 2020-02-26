/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var decompressRLElist = function(nums) {
    decom_list = [] //This will be the decompressed list

    var index_1 = 0; //Index to track the Frequency (Every 0/2/4 etc. number in original list)
    var index_2 = 1; //Index to track the Value (Every 1/3/5 etc. number in original list)
    var array_len = nums.length; //This is to avoid a separate function call every time the while loop is called

    //While the list hasn't reached the end, push the value (tracked by index_2) X number of times into the new list (decom_list)
    //Where X is the frequency (tracked by index_1)
    while (index_2 < array_len)
    {
        for(i=0; i< nums[index_1]; i++)
        {
            decom_list.push(nums[index_2])
        }

        //Increment the indexes
        index_1 +=2;
        index_2 +=2;
    }

    return decom_list
};
