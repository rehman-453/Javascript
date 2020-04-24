/*
Q7. Fix the following switch statement:
    function checkFruit() {
        var text;
        var fruits = prompt("Enter a fruit name");
        switch(fruits) {
            case "Banana"
                text = "Banana is good!";
            case "Orange"
                text = "I am not a fan of orange.";
            case "Apple"
                text = "How you like them apples?";
            default
                text = "I have never heard of that fruit.";
        }
        document.write( text);
    }
    checkFruit();
*/

function checkFruit() 
{
    var text
    var fruits = prompt("Enter a fruit name")
    fruits = fruits.toLowerCase()
    switch(fruits) {
        case "banana":
            text = "Banana is good!"
            break
        case "orange":
            text = "I am not a fan of orange."
            break
        case "apple":
            text = "How you like them apples?"
            break
        default:
            text = "I have never heard of that fruit."
            break
    }
    document.write( text)
}
checkFruit()