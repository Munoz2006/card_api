fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data =>{
    const character = data.results
    const container = document.querySelector('main')

    function createCard(character){
      const cards = document.createElement('div')
      cards.id = 'container'
      cards.classList.add('card')

      const imgCard = document.createElement('img')
      imgCard.classList.add('imgCard')
      imgCard.id = 'imgCard'
      imgCard.character.image
      imgCard.character.name

      const text_container = document.createElement('div')
      text_container.id = 'text_container'
      text_container.classList.add('txt')

      const nameContainer = document.createElement('h2')
      nameContainer.id = 'nameContainer'
      nameContainer.classList.add('name')
      nameContainer.textContent = `Name: ${character.name}`

      const status = document.createElement('h3')
      status.id = 'statusContainer'
      status.classList.add('status')

      const specieContainer = document.createElement('h4')
      specieContainer.id = 'specieContainer'
      specieContainer.classList.add('specie')
      specieContainer.textContent= character.species

      cards.appendChild(imgCard)
      cards.appendChild(text_container)

      text_container.appendChild(nameContainer)
      text_container.appendChild(status)
      text_container.appendChild(specieContainer)

      container.appendChild(cards)
    }

    function makeCard(){
        character.forEach(character => {
          createCard(character)
        });
    }
    makeCard()
    
  })
  .catch(err => console.error(err));