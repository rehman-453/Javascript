/*
Q9. Use a switch statement to rewrite the following JavaScript code. Prompt the user for the 
    number of a month rather than setting it to 8:
*/
var month = parseInt(prompt("Enter month number"))

switch (month)
{
    case 1:
        alert('January')
        break
    case 2:
        alert('Feburary')
        break
    case 3:
        alert('March')
        break
    case 4:
        alert('April')
        break
    case 5:
        alert('May')
        break
    case 6:
        alert('June')
        break
    case 7:
        alert('July')
        break
    case 8:
        alert('August')
        break
    case 9:
        alert('September')
        break
    case 10:
        alert('October')
        break
    case 11:
        alert('November')
        break
    case 12:
        alert('December')
        break
    default:
        alert('Invalid month')
        break
}