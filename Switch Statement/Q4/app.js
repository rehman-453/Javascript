/*
Q4. The getDay() method returns the weekday as a number between 0 and 6. 
    (Sunday=0, Monday=1, Tuesday=2 …).
    Use the weekday number to calculate weekday name.
*/
var today = new Date()
var day = today.getDay()

switch(day)
{
    case 0:
        dayName = 'Sunday'
        break
    case 1:
        dayName = 'Monday'
        break
    case 2:
        dayName = 'Tuesday'
        break
    case 3:
        dayName = 'Wednesday'
        break
    case 4:
        dayName = 'Thursday'
        break
    case 5:
        dayName = 'Friday'
        break
    case 6:
        dayName = 'Saturday'
        break
}
alert('Today is '+ dayName)