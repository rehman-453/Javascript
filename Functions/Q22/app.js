/*
Q22. Write a JavaScript function that accepts a string as a parameter and counts the 
    number of vowels within the string. 
    EXAMPLE STRING : 'The quick brown fox' 
    EXPECTED OUTPUT : 5
*/

string = 'The quick brown fox'
alert(vowel(string))

function vowel(str)
{
    var k = 0
    for(i=0; i<str.length; i++)
    {
        if(str[i] == 'a'|| str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u')
        {
            k++
        }
    }    
    return(k)
}
