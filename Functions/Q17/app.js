/*
Q17. Write a function that simulates a dice & returns a random dice value.
*/

alert('Roll Dice: \n'+rollDice())

function rollDice() 
{
    return Math.ceil(Math.random()*6)
}