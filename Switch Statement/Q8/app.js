/*
Q8. Write a function that displays the marks range against a particular grade. 
    For example, if grade is “B”, then print Marks [ >= 60 and <70 ]
*/
var grade = prompt('Enter your grade')

switch(grade)
{
    case 'A+':
        alert('Your marks range:\n >=80 and <=100')
        break
    case 'A':
        alert('Your marks range:\n >=70 and <80')
        break
    case 'B':
        alert('Your marks range:\n >=60 and <70')
        break
    case 'C':
        alert('Your marks range:\n >=50 and <60')
        break
    case 'D':
        alert('Your marks range:\n >=40 and <50')
        break
    case 'E':
        alert('Your marks range:\n >=33 and <40')
        break
    case 'F':
        alert('Your marks range:\n >=0 and <33')
        break
    default:
        alert('Invalid Grade')
        break
}