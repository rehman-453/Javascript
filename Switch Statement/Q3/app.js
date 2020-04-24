/*
Q3. Write a program to create a calculator for +, -, *, /, % using switch case statements. 
    (number1, number2 and operator will be input)
*/
var number1 = parseInt(prompt('Enter first number'))
var number2 = parseInt(prompt('Enter second number'))
var operator = prompt('Enter operator you want to perform between number1 and number 2')
var ans
switch(operator)
{
    case '+':
        ans = number1 + number2
        alert(number1 +' + '+ number2 +' = '+ ans)
        break
    case '-':
        ans = number1 - number2
        alert(number1 +' - '+ number2 +' = '+ ans)
        break        
    case '*':
        ans = number1 * number2
        alert(number1 +' * '+ number2 +' = '+ ans)
        break
    case '/':
        ans = number1 / number2
        alert(number1 +' / '+ number2 +' = '+ ans)
        break
    default:
        alert('Invalid operator')
}