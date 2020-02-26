/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    //Use Regex with JS replace function to search and replace all periods in IP
    //Regex: /[.]/g searches for all instances of the period in the pattern
    
    return address.replace(/[.]/g, '[.]');
};
