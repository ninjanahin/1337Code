/**
 * @param {string[]} strs
 * @return {string[][]}
 */

  /*
---------------------------------
Problem Description:
Given an array of strings, group anagrams together.

e.g. Input: [eat, tea, tan, ate, nat, bat]
     Output: [
                [ate, eat, tea],
                [nat, tan],
                [bat]
             ]
---------------------------------
*/
var groupAnagrams = function(strs) {
    var dict = {} //Key-value =  Sorted String: Array of strings
    var output_array = [];
    
    for(i=0; i<strs.length; i++)
    {
        ///The first step is to convert to array and sort the letters
        var sorted_string = Array.from(strs[i]).sort();
        
        //Place string in respective category in dictionary based on its sorted letters
        //Each anagram will have the same letters, so the sorted letters will produce the same key
        if(dict[sorted_string])
        {
            dict[sorted_string].push(strs[i]);
        }
        else
        {
            dict[sorted_string] = [strs[i]];
        }
    
    }
    
    //For each array in the dictionary, push it into an output array containing the grouped anagrams
    for(key in dict)
        {
            console.log("Dict[" + key + "]: " + dict[key]);
            output_array.push(dict[key]);
        }
        
        return output_array;
};