/*
Q20. Write a program to create the following patterns in your browser. Take number of 
    lines as an input. 
*/

var i, j
var num_of_line = parseInt(prompt("Enter number of line you want."))

// a.  ***** 
//     ***** 
//     ***** 
//     ***** 
document.write("<b>a.</b><br>")
for(i=1; i<=num_of_line; i++)
{
    for(j=num_of_line; j>=1; j--)
    {
        document.write('*')
    }
    document.write('<br>')
}

// b.  * 
//     ** 
//     *** 
//     **** 
//     ***** 
document.write("<br><b>b.</b><br>")
for(i=1; i<=num_of_line; i++)
{
    for(j=1; j<=i; j++)
    {
        document.write('*')
    }
    document.write('<br>')
}


// c.  ***** 
//     **** 
//     *** 
//     ** 
//     * 
document.write("<br><b>c.</b><br>")
for(i=num_of_line; i>=1; i--)
{
    for(j=1; j<=i; j++)
    {
        document.write('*')
    }
    document.write('<br>')
}