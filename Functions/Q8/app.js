/*
Q8. Write a function that take start and end number as inputs & display counting in your 
    browser.
*/

counting()

function counting()
{
    var start = parseInt(prompt('Enter Starting number'))
    var end = parseInt(prompt('Enter Ending number'))
    document.write('Counting from '+ start +' to '+ end +'<br >')
    for(var i=start; i<=end; i++)
    {
        document.write(i + '<br>')
    }
}