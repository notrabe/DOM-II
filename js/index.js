// Your code goes here
const header = document.querySelector('header')
const nav1 = document.querySelector('nav a')
const nav2 = nav1.nextElementSibling
const nav3 = nav2.nextElementSibling
const nav4 = nav3.nextElementSibling
const logo = document.querySelector('.logo-heading')
const body = document.querySelector('body')
const img1 = document.querySelector('img:nth-of-type(1)')
const img2 = document.querySelector('.img-content:nth-of-type(1)')
const img3 = document.querySelector('.img-content:nth-of-type(2)')
const home = document.querySelector('.content-section')
const footer = document.querySelector('footer')









body.style.textAlign = 'center'
body.style.fontFamily = 'roboto'
body.style.color = 'yellow'
body.style.backgroundColor = 'black'
header.style.backgroundColor = 'black'
logo.textContent = 'FUNBUS'
nav1.style.color = 'yellow'
nav2.style.color = 'yellow'
nav3.style.color = 'yellow'
nav4.style.color = 'yellow'




nav1.addEventListener('mouseover', function(event){
    event.target.style.color = 'white';
})
nav1.addEventListener('mouseout', function(event){
    event.target.style.color = 'yellow';
})
nav2.addEventListener('mouseover', function(event){
    event.target.style.color = 'white';
})
nav2.addEventListener('mouseout', function(event){
    event.target.style.color = 'yellow';
})
nav3.addEventListener('mouseover', function(event){
    event.target.style.color = 'white';
})
nav3.addEventListener('mouseout', function(event){
    event.target.style.color = 'yellow';
})
nav4.addEventListener('mouseover', function(event){
    event.target.style.color = 'white';
})
nav4.addEventListener('mouseout', function(event){
    event.target.style.color = 'yellow';
})

img1.addEventListener('dblclick', function(){event.target.style.opacity = .75})

img2.addEventListener('dblclick', function(event){
    event.target.style.opacity = .75;
})

img3.addEventListener('dblclick', function(event){
    event.target.style.opacity = .75;
})

body.addEventListener('keydown', function(event){
    event.target.style.backgroundColor = '#006600'
})
body.addEventListener('keyup', function(event){
    event.target.style.backgroundColor = 'black'
})

header.addEventListener('click', function(){alert('WELCOME TO FUNBUS')})

img1.addEventListener('wheel', function(){img1.style.transform = 'scale(1.5)'})

document.addEventListener('scroll', function(event){alert('you are scrolling')})
