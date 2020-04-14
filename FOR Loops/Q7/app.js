/* 
Q7. Generate the following series in your browser. See example output. 
*/

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
document.write("<h4>Counting:</h4>")
for(var a=1; a<=15; a++)
{
    document.write(a +", ")
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
document.write("<h4>Reverse counting:</h4>")
for(var b=10; b>=1; b--)
{
    document.write(b +", ")
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
document.write("<h4>Even:</h4>")
for(var c=0; c<=20;  )
{
    document.write(c +", ")
    c = c+2
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write("<h4>Odd:</h4>")
for(var d=1; d<=19;  )
{
    document.write(d +", ")
    d = d+2
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
document.write("<h4>Series:</h4>")
for(var e=2; e<=20;  )
{
    document.write(e +"k, ")
    e = e+2
}