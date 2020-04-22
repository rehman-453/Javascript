/*
Q24. Write a JavaScript function to extract unique characters from a string. 
    EXAMPLE STRING : "thequickbrownfoxjumpsoverthelazydog" 
    EXPECTED OUTPUT :"thequickbrownfxjmpsvlazydg"
*/

string = "thequickbrownfoxjumpsoverthelazydog"
document.write('String: '+ string +'<br>')
document.write('Output: '+ unique_char(string) +'<br>')


function unique_char(str)
{
    var uni_char=""
    for (i=0; i<str.length; i++)
    {
        if(uni_char.indexOf(str.charAt(i)) == -1)
        {
            uni_char += str[i]  
        }
    }
    return uni_char  
} 