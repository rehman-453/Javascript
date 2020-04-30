function set_background() 
{
    docBody = document.getElementsByTagName("body")[0]
    
    bodyElements = docBody.getElementsByTagName("p");
    
    myp1 = bodyElements[0];
    myp1.style.background = "rgb(255,220,250)";
}