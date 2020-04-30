function getattributes()
{
    var sample = document.getElementById('myLink')
    alert('href: '+ sample.getAttribute('href'))
    alert('hreflang: '+ sample.getAttribute('hreflang'))
    alert('rel: '+ sample.getAttribute('rel'))
    alert('target: '+ sample.getAttribute('target'))
    alert('type: '+ sample.getAttribute('target'))
}