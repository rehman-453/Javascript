/*
Q2. Write a function that displays current date & time in your browser.
*/

var rightNow = new Date()

time(rightNow)
date(rightNow)

function time(a)
{   
    document.write('<b>Current Time:</b> '+a.toLocaleTimeString()+'<br><br>')
}

function date(b)
{
    document.write('<b>Current Date:</b> '+ b.toLocaleDateString() +'<br><br>')
}