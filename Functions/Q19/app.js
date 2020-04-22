/*
Q19. Write a JavaScript function that checks whether a passed string is palindrome or not? 
    A palindrome is word, phrase, or sequence that reads the same backward as forward, 
    e.g., madam.
*/

var string = prompt('Enter any string you want to check')

alert(palindrome(string))


function palindrome(str)
{
    S = reverse(str)
    if(S == str)
    {
        message = 'string is palindrome'
    }
    else
    {
        message = 'string is not palindrome'
    }
    return(message)
}

function reverse(str)
{
    let reversed = "";
    for(let char of str)
    {
        reversed = char + reversed;
    }
    return reversed;
}
