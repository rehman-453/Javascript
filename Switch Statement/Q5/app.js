/*
Q5. The getDay() method returns the weekday as a number between 0 and 6. 
    (Sunday=0, Monday=1, Tuesday=2 ...).
    If today is neither Saturday (6) nor Sunday (0), write a default message:
*/
var today = new Date()
var day = today.getDay()

switch(day)
{
    case 0 || 6:
        message = 'Weekend'
        break
    default:
        message = 'Weekdays'
        break
}
alert(message)