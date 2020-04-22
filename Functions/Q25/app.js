/*
Q25. Write a JavaScript function that accepts two arguments, a string and a letter and 
    the function will count the number of occurrences of the specified letter within the 
    string. 
    Sample arguments : 'JSResourceS.com', 'o'
*/


string = 'JSResourceS.com'
letter = 'o'
alert(occurrence(string,letter))

function occurrence(str,let)
{
    var k = 0
    for(i=0; i<str.length; i++)
    {
        if(str[i] === let)
        {
            k++
        }
    }    
    return(k)
}