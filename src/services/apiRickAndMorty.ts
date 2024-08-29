import axios from 'axios'
import {Character, apiReturnRickandMorty} from '@interfaces/characters.interface'

const apiUrl = 'https://rickandmortyapi.com/api/character/'

export async function fetchCharacter() {
  try {
    const response: apiReturnRickandMorty = await axios.get(`${apiUrl}`)
    
    if (!response.data.results) {
      return []
    }

    const characters = response.data.results.forEach((character: Character) => ({
      id: character.id,
      name: character.name,
      species: character.species,
      image: character.image,
      location: character.location.name,
    }))

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
    
    const characters = response.data.results.forEach((character: Character) => ({
      id: character.id,
      name: character.name,
      species: character.species,
      image: character.image,
      location: character.location.name,
    }))

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