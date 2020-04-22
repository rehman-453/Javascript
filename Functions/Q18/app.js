/*
Q18. Write a JavaScript function that reverse a number. 
    Example x = 32243; 
    EXPECTED OUTPUT : 34223
*/

var x = 32243
document.write('x = '+ x +'<br>')
s = x.toString()
document.write('Output = '+ reverse(s) +'<br>')


function reverse(str)
{
    let reversed = "";
    for(let char of str)
    {
        reversed = char + reversed;
    }
    return reversed;
  }