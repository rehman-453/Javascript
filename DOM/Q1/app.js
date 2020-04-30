//b.Change the body style so it has a font-family of "Arial, sans-serif"
document.body.style.fontFamily = 'Arial, sans-serif'

//c. Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('nickname').innerHTML = 'Sami Ur Rehman'
document.getElementById('favorities').innerHTML = '27'
document.getElementById('hometown').innerHTML = 'Karachi, PK'

//d. Add a style tag that sets a rule for "listitem" to make the color red. Iterate through each li and change the class to "listitem".
var items = document.getElementsByTagName('li')
for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem'
}

//e. Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var photo = document.createElement('img')
photo.width = '180'
photo.height = '200'
photo.src = 'images/i1.jpg'
document.body.appendChild(photo)