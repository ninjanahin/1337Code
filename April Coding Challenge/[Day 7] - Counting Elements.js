/**
 * @param {number[]} arr
 * @return {number}
 */

/*
---------------------------------
 Problem Description:
 Given an integer array arr, count element x such that x + 1 is also in arr.
 If there're duplicates in arr, count them seperately.

 e.g. Input: arr = [1,2,3] --> Output: 2
    1 and 2 are counted because 2  and 3 are in arr

 e.g. Input: arr = [1,1,3,3,5,5,7,7] --> Output: 0
    No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

 e.g. Input: arr = [1,3,2,3,5,0] --> Output: 3
    0,1 and 2 are counted because 1,2 and 3 are in arr.

 e.g. Input: arr = [1,1,2,2] --> Output: 2
    Two 1's are counted because 2 is in arr.

---------------------------------
*/

var countElements = function(arr) {
    
    //Declare a dictionary for counting elements
    var dict = {};
    var count = 0;
    
    //Run through the array and count the elements
    //If the element doesn't exist yet in the dictionary, add it
    for(i=0; i<arr.length; i++)
    {
        if(dict[arr[i]])
        {
            //console.log(arr[i] + ": " + dict[arr[i]]);
            dict[arr[i]] +=1;
        }
        else
        {
            dict[arr[i]] = 1;
            //console.log(arr[i] + ": " + dict[arr[i]])
        }
    }
    
    //If X+1 exists in the dictionary, add the count for X to the total count
    for (var key in dict)
    {
        
        //console.log("Key: " + key + ", X= " + (parseInt(key)+1));
        if (dict[parseInt(key)+1])
        {
           count += dict[key];
        }
    }
    
    return count;
};