/*
Q19. Write a program that will write out a wedge of stars. The user will enter the 
initial number of stars, and the program will write out lines of stars where each line 
has one few star than the previous line. Initial number of stars: 7 
                ******* 
                ****** 
                ***** 
                **** 
                *** 
                ** 
                *
*/

var num_of_stars = parseInt(prompt("Enter initial number of stars you want."))
var i, j;
for(i=num_of_stars; i>=1; i--)
{
    for(j=1; j<=i; j++)
    {
        document.write('*');
    }
    document.write('<br>');
}