import {FastifyInstance, FastifyReply, FastifyRequest} from 'fastify'
import {CharactersController} from "@controllers/characters"
import {fetchCharactersSchema, searchCharactersSchema} from '@schemas/characters.schema'

export async function charactersRoutes(fastify: FastifyInstance){
    const controller = new CharactersController()

    fastify.get("/characters", fetchCharactersSchema, (request: FastifyRequest, reply: FastifyReply) => {
        controller.fetchCharacterController(request, reply)
    })

    fastify.get("/search",  searchCharactersSchema , (request: FastifyRequest, reply: FastifyReply) => {
        controller.searchCharactersController(request, reply)
    })
}