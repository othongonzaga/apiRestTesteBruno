import axios from 'axios'
import {Character, apiReturnRickandMorty} from '@interfaces/characters.interface'

const apiUrl = 'https://rickandmortyapi.com/api/character/'

async function filterCharacters(response:apiReturnRickandMorty) {
    let characters:Character[] = []

    const filteredCharacters = await response.data.results.forEach((character: Character) => {characters.push({
        id: character.id,
        name: character.name,
        species: character.species,
        image: character.image,
        location: {name: character.location.name},
    })
        
    })
      
    return characters
}

export async function fetchCharacter() {
  try {
    const response: apiReturnRickandMorty = await axios.get(`${apiUrl}`)
    
    if (!response.data.results) {
      return []
    }

    const characters = await filterCharacters(response)

    return characters
  } catch (error) {
    console.error('Error in integration with API:', error)
    return{
        status: 500,
        errorCode: "FC - 01",
        errorMessage: "Unexpected error in public provider",
    }
  }
}

export async function searchCharacter(name: string) {
  if (!name) {
    console.log('Parameter name is required')
  }

  try {
    const response: apiReturnRickandMorty = await axios.get(`${apiUrl}?name=${name}`)
    
    const characters = await filterCharacters(response)

    return characters
  } catch (error) {
    console.error('Erro integration with API:', error)
    return{
        status: 500,
        errorCode: "SC - 01",
        errorMessage: "Unexpected error in public provider",
    }
  }
}