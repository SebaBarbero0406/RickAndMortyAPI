let url = "https://rickandmortyapi.com/api/character"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    crearCard(data.results)
  });

let container = document.getElementById("container")

function crearCard(data) {

  let cardsHTML = ""

  for (let i = 0; i < data.length; i++) {
    
    cardsHTML += `
    <div class="card">
      <p class="nombre_card">${data[i].name}</p>
      <div class="containerimg">
        <img class = "imgRickandMorty" src="${data[i].image}" alt="">
      </div>
    </div>
    `
  }
  container.innerHTML = cardsHTML
}
