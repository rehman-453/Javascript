/*
Q10. Write a function that writes variable length arguments list in your browser.
*/

sample('Sami Ur Rehman','Ali Nawaz','Shahid Sultan')

function sample(a,b,c)
{
    document.write('length of first argument: '+ a.length +'<br>')
    document.write('length of second argument: '+b.length +'<br>')
    document.write('length of third argument: '+c.length +'<br>')
}