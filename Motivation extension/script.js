var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')

btn2.addEventListener('click', jokes)
function jokes() {
    fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text
        const jokeElement=document.getElementById('jokeElement')
        jokeElement.innerHTML = jokeText
        const author =document.getElementById('author')
        author.textContent = ' '
    })
}

btn1.addEventListener('click', motivation)
function motivation() {
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      const random = Math.floor(Math.random() * 1643)
      const jokeElement=document.getElementById('jokeElement')
      jokeElement.innerHTML = data[random].text

      const author =document.getElementById('author')
      const authorName = data[random].author
      if(authorName == "null"){
        author.innerHTML = " "
      }
      else{
        author.innerHTML = "By :-  " + authorName
      }
  });
}