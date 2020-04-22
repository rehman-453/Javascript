/*
Q20. Write a JavaScript function that accepts a string as a parameter and converts the 
    first letter of each word of the string in upper case.
    EXAMPLE STRING : 'the quick brown fox' 
    EXPECTED OUTPUT : 'The Quick Brown Fox'
*/

var string = prompt('Enter any string you want to check')

document.write('String: '+ string +'<br>')
document.write('Output: '+ capitalize(string))

function capitalize(str)
{
    str = string.split(' ')
    for (i = 0; i < str.length;  i++) 
    {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    }
    return(str.join(' '))
}