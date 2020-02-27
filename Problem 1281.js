/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    //First convert the number to a string so we can iterate over the number
    var n_str = n.toString(10);
    var product = 0;
    var sum = 0;
    
    //For each of the numbers in the string, parse as an individual number and
    //calculate the product and sum, then return the difference between them
    for(i=0; i<n_str.length; i++)
    {
        var num = parseInt(n_str[i]);
        if(i==0)
        {
            product += num;
            sum += num;
        }
        else
        {
            product *= num;
            sum += num;
        }
    }
    return product - sum;
};
