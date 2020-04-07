/*
Q15. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
Wonder no more. 
    a. Store your favorite snack into a variable 
    b. Store your current age into a variable. 
    c. Store a maximum age into a variable. 
    d. Store an estimated amount per day (as a number). 
    e. Calculate how many would you eat total for the rest of your life. 
    Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
*/

var snack = "Oreo Biscuits"
var age = 15
var max_age = 85
var amount_of_snacks = 2

var rest_age= max_age - age
var more_snacks = (rest_age * 365) * amount_of_snacks


document.write("<b>The Lifetime Supply Calculator</b>")
document.write("<br><br><br>")
document.write("Favorite Snack : "+ snack)
document.write("<br>")
document.write("Current Age : "+age)
document.write("<br>")
document.write("Estimated Maximum Age : "+ max_age)
document.write("<br>")
document.write("Amount of snacks per day : "+amount_of_snacks)
document.write("<br><br>")
document.write("You will need "+ more_snacks +" "+ snack +" to last you untill the ripe old age of "+max_age)
