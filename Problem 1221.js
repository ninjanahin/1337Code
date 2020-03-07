/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    //While it's not the end of the string, check character by character
    //The first character sets a flag for the initiating letter (L or R)
    //It then counts the number of them until the other character is encountered. 
    //Then it counts that until they are of the same count (aka. balanced)
    //Once a balanced string is encountered, the flag is reset for the next character
    //the balanced_counter incrememnts and the process repeats.
    
    var l_counter = 0; //The L/R counters
    var r_counter = 0;
    var flag = ''; //Flag for determining leading character 
    var balanced_counter = 0; //Counter for balanced strings
    
    for(i=0; i<s.length; i++)
    {
        //If it's the first instance, or if a balanced string has just been found
        //It's time to determine the Flag (Based on the leading character)
        if(i==0 || (l_counter == 0 && r_counter == 0))
        {
            if(s[i] == 'R')
            {
                //Set the R flag (R is the 1st letter found)
                flag = 'R'
                r_counter++;
            }
            else
            {
                //Set the L flag (L is the 1st letter found)
                flag = 'L'
                l_counter++;
            }
        }
        else
        {
            //Once a flag is determined, check to see if the next character matches the flag
            //If it does, add it to the appropriate counter
            if(s[i] == flag)
            {
                if(flag == 'R')
                {
                    r_counter++;
                }
                else
                {
                    l_counter++;
                }
            }
            
            //If it doesn't match the flag, then add to the opposite counter (if flag ='L' , opp. = 'R')
            //If the L and R counters are equal, a balanced string has been found
            //Reset the counters, and the flag and increment the balanced string counter
            else if (s[i] != flag)
            {
                if(flag == 'R' && l_counter < r_counter)
                {
                    l_counter++;
                }
                else if(flag == 'L' && r_counter < l_counter)
                {
                    r_counter++;
                }
                if((flag == 'L' || flag == 'R') && r_counter == l_counter)
                {
                    balanced_counter++;
                    l_counter = 0;
                    r_counter = 0;
                    flag = '';
                }
            }
            
        }
        //console.log('Balanced Counter: ' + balanced_counter + ' S[i]= ' + s[i] + ' Flag: ' + flag + ' || L_Counter = ' + l_counter + ' R_Counter = ' + r_counter)
    }
    return balanced_counter;
};
