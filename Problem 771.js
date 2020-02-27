/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var dict = {}; //Dictionary we will use for key checking
    counter = 0; //Counter for determining no. of stones that are jewels
    
    //Create a dictionary key for each Jewel (so we can use 'in')
    for(i=0; i< J.length; i++)
    {
        dict[J[i]] = 0;
    }
    
    for(i=0; i< S.length; i++)
    {
        if(S[i] in dict)
        {
            //If the stone matches the Jewel key, increase the global counter by 1
            counter ++;
        }
    }
    
    return counter;
    
};
