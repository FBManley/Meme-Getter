const BASE_URL = 'https://api.imgflip.com/get_memes'
 
document.addEventListener('DOMContentLoaded', () => {
renderHome();
})

function renderHome(){
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data) 
      memes = data 
    displayMemes()
    }) 
}  

function displayMemes(){
    const ul = document.getElementById("memelistpage")
    memes.data.memes.forEach(meme => {
        const li = document.createElement('li')
        ul.appendChild(li)
        const x = document.createElement('a')
        x.innerText = meme.name 
        x.id = meme.id
        li.appendChild(x)
    })
    ul.addEventListener('click', displayMeme)
   
}

function displayMeme(event){
  console.log(event.target.id)
  const ul = document.getElementById("memelistpage")
  ul.innerHTML = ''
  const info = document.getElementById('info')
  const memez = memes.data.memes.find(value => value.id === event.target.id)
  console.log(memez)
  info.innerHTML = `<h3>URL:${memez.url}</h3>
  <button  id = "look">Look Up</button>
  <button  id = "back">Back To Home</button>`
  document.getElementById('homepagelink').addEventListener('click', displayMemes)
  lookUp()
}

function lookUp(){
    document.querySelector("#look").addEventListener('dblclick', runRed)
    document.querySelector("#look").addEventListener('click', runBlue)
    document.querySelector('#back').addEventListener('click', backButton)
}
function runRed(){
    document.getElementById('info').style.color = '#F00'
}
function runBlue(){
    document.getElementById('info').style.color = '#101010'
}

function backButton(){
    document.getElementById('info').innerHTML = ''
    renderHome()
}