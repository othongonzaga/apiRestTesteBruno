import {RickAndMortyService} from '@services/apiRickAndMorty'
import { FastifyReply, FastifyRequest } from 'fastify';

export class RickAndMortyController{
    private rickAndMortyService = new RickAndMortyService();

    async getCharacter(request: FastifyRequest, reply: FastifyReply,){
        const name = request.query

        if(!name){
            return reply.status(400).send({ error: 'Name parameter is required' })
        }

        if(name===String){
            return reply.status(400).send({ error: '' })
        }

        try {
            
        } catch (error) {
            
        }
    }
}