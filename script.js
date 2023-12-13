SUPERHERO_TOKEN = '1400373197224006'
BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
  .then(json => {
    
    const superHero = json
    ShowHeroInfo(superHero)
  })
}
const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const ShowHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200/>`
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
  }).join('')
                 
  heroImageDiv.innerHTML = `${name}${img}${stats}`
  
}

const getSearchedSuperHero = (name) => {
//   console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    ShowHeroInfo(hero)
  
  })
  
}

const randomHero = () => {
  const nunberOfHeroes = 732
  return Math.floor(Math.random() * nunberOfHeroes) + 1
}

newHeroButton.onclick = () => {  getSuperHero(randomHero())}

searchButton.onclick = () =>{ getSearchedSuperHero(searchInput.value)}


