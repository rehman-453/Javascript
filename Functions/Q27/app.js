/*
Q27. The Lifetime Supply Calculator
    Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
    • Write a function named calculateSupply that:
        o takes 2 arguments: age, amount per day.
        o calculates the amount consumed for rest of the life (based on a constant max age).
        o outputs the result to the screen like so: "You will need NN to last you until the ripe 
          old age of X"
    • Call that function three times, passing in different values each time.
    • Bonus: Accept floating point values for amount per day, and round the result to a round
      number.
*/

calculateSupply(15,2)
calculateSupply(20,2.5)
calculateSupply(25,3)

function calculateSupply(age,amount_of_snacks)
{
  var snack = "Oreo Biscuits"
  var max_age = 85
  
  var rest_age= max_age - age
  var more_snacks = (rest_age * 365) * amount_of_snacks

  document.write("<h3>The Lifetime Supply Calculator</h3>")
  document.write("Favorite Snack : "+ snack +"<br>")
  document.write("Current Age : "+age +"<br>")
  document.write("Estimated Maximum Age : "+ max_age +"<br>")
  document.write("Amount of snacks per day : "+amount_of_snacks +"<br><br>")
  document.write("You will need "+ more_snacks +" "+ snack +" to last you untill the ripe old age of "+max_age +"<br><br>")
}