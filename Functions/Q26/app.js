/*
Q26. The Age Calculator
    Forgot how old you are? Calculate it!
    • Write a function named calculateAge that:
        o takes 2 arguments: birth year, current year.
        o calculates the 2 possible ages based on those years.
        o outputs the result to the screen like so: "You are either NN or NN"
    • Call the function three times with different sets of values.
    • Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/
var year = new Date
var current_year = year.getFullYear()
var birth_year 

age_calculator(current_year,birth_year)
age_calculator(current_year,birth_year)
age_calculator(current_year,birth_year)

function age_calculator(c_year,b_year)
{
    b_year = parseInt(prompt('Enter Birth year'))
    var age = c_year - b_year
    document.write('<h3>The Age Calculator</h3>')
    document.write('Current Year: '+ c_year +'<br>')
    document.write('Birth Year: '+ b_year +'<br>')
    document.write('They are either '+ age +' or '+ ++age +' years old<br><br>')
}