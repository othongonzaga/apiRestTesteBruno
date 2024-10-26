import {fetchCharacter, searchCharacter} from "@services/apiRickAndMorty"
import {FastifyReply, FastifyRequest} from 'fastify'
import {CacheModel} from "@models/cache"

export class CharactersController{
    private cacheModel = new CacheModel()

    public async fetchCharacterController(request: FastifyRequest, reply: FastifyReply){
        const characters = await fetchCharacter()

        if(!characters){
          return reply.status(404).send({
            status: 404,
            errorCode: "FC - 01",
            errorMessage: "Characters not found",
          });
        }

        try {
          return reply.status(200).send(characters)     
        } catch (error) {
          return reply.status(500).send({
            status: 500,
            errorCode: "FC - TC",
            errorMessage: "Unexpected error, please try again later",
          });
        }


    }

    public async searchCharactersController(request: FastifyRequest, reply: FastifyReply){
        const {email} = request.headers as {email: string}
        const {name} = request.query as {name: string}

        if (!email) {
            return reply.status(400).send({
              status: 400,
              errorCode: "SCC - 01",
              errorMessage: "Email is required",
            });
        }        

        if (!name || typeof name !== 'string') {
            return reply.status(400).send({
              status: 400,
              errorCode: "SCC - 02",
              errorMessage: "Parameter 'name' is required and is of type string",
            });
        }

        try {
          const cachedCharacter = await this.cacheModel.filterCache(email, name)

          if(cachedCharacter){
            return reply.status(200).send(cachedCharacter.cachedData)
          }
          
          let characters = await searchCharacter(name)

          await this.cacheModel.createCache(email, name, characters)
          return reply.status(200).send(characters)

        } catch (error) {
          return reply.status(500).send({
            status: 500,
            errorCode: "SC - TC",
            errorMessage: "Unexpected error, please try again later",
          });
        }
        
        
    }
}