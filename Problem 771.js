/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var dict = {}; //Dictionary we will use for counting (Key/No. of seen)
    counter = 0; //Counter for determining no. of stones that are jewels
    
    //Cycle through and count the number of each character
    for(i=0; i< S.length; i++)
    {
        if(S[i] in dict)
        {
            //If the key exists in the dictionary add 1 to the number seen
            dict[S[i]] += 1; //Increment the counter by 1
        }
        else
        {
            //The key doesn't exist, create key with number seen at 1
            dict[S[i]] = 1;
        }
    }
    
    for(i=0; i< J.length; i++)
    {
        if(J[i] in dict)
        {
            //If the key exists in the dictionary
            //then add the no. of stones that are jewels 
            counter += dict[J[i]]
        }
    }
    
    return counter;
    
};
