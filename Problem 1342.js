/**
 * @param {number} num
 * @return {number}
 */
 
// Return the total number of steps required to reach given a number (num)
// At each step determine if odd/even , if odd -> divide by 2, if even -> minus by 1
// e.g. 14 -> 14/2 = 7 [s=1] -> 7 -1 = 6 [s=2] -> 6/2 = 3 [s=3] -> 3-1 = 2 [s=4] -> 2/2 = 1 [s=5] -> 1-1 = 0 [s=6]. Total steps [s]: 6
var numberOfSteps  = function(num) 
{
    var steps = 0;
    
    while (num != 0)
    {
        // Determine if number is even or odd
        
        if (num %2 == 0)
        {
            //Number is even --> Divide by 2
            
            num /= 2;
            steps++;
        }
        else
        {
            //Number is odd --> Minus 1
 
            num -=1;
            steps++;
        }
    }
    
    return steps;
};
