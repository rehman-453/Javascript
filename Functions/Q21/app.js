/*
Q21. Write a JavaScript function that accepts a string as a parameter and find the longest 
    word within the string. 
    EXAMPLE STRING : 'Web Development Tutorial' 
    EXPECTED OUTPUT : 'Development'
*/

string = 'Web Development Tutorial'
document.write('String: '+ string +'<br>')
document.write('Output: '+ longest_word(string))

function longest_word(str)
{
    str = string.split(' ')
    for(i=1; i<str.length; i++)
    {
        if(str[i].length>str[i-1].length)
        {
            a = str[i]
        }
    }
    return(a)
}



// LEN = null
// for(i=0; i<str.length; i++)
// {
//     console.log(str[i].length)
//     if(str[i].length>LEN)
//     {
//         LEN=i
//     }
//     // console.log(LEN)

// }
// alert(str[LEN])