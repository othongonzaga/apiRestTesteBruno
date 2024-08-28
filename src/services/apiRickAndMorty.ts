import axios from 'axios'
import {Character, apiReturnRickandMorty} from '@interfaces/characters.interface'

export class RickAndMortyService{
    private apiUrl = 'https://rickandmortyapi.com/api/character/'

    async searchCharacter(name: string){
        try {
            const response: apiReturnRickandMorty = await axios.get(`${this.apiUrl}?name=${name}`)

            const characters = response.data.results.map((character: Character) => ({
                id: character.id,
                name: character.name,
                species: character.species,
                image: character.image,
                location: character.location.name,
            }))

            return characters
        } catch (error) {
            console.log('Error in integration with api:', error)
        }
    }
}