/*
Q6. Given the following script
    function checkCar() {
        var text;
        var favCar = prompt("What is your favorite car?");
        switch(favCar) {
            //Add code here
        }
    document.write( text);
    }
    checkCar();
    Finish the switch statement. Add the following
        cases: BMW, Ford and Peugeot.
    Set the value of the variable text to: 
        "German car" for BMW.
        "American car" for Ford. 
        "French car" for Peugeot.
    Also add a default case where the text value is "Unknown car name".
*/
function checkCar() 
{
    var text
    var favCar = prompt("What is your favorite car?",'BMW, FORD, PEUGEOT')
    favCar = favCar.toLocaleUpperCase()
    switch(favCar) 
    {
        case 'BMW':
            text = 'German Car'
            break
        case 'FORD':
            text = 'American Car'
            break
        case 'PEUGEOT':
            text = 'French Car'
            break
        default:
            text = 'Unknown Car'
            break
    }
    document.write(text)
}
checkCar()