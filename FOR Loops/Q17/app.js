/*
Q17. The even/odd reporter 
    Write a for loop that will iterate from 0 to 20. For each iteration, it will check 
    if the current number is even or odd, and report that to the screen 
    (e.g. "2 is even"). 
*/

for(i=0; i<=20; i++)
{
    var ans = i%2
    if(ans == 0)
    {
        document.write(i +' is even<br>')
    }
    else
    {
        document.write(i +' is odd<br>')
    }
}