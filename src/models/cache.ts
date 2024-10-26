import {prisma} from "@database/prismaCliente"

export class CacheModel{
    async createCache(userId: string, characterId: string, cachedData: object){
        return await prisma.cache.create({
            data:{
                userId,
                characterId,
                cachedData
            }
        })
    }

    async filterCache(userId: string, characterId: string){
        return await prisma.cache.findFirst({
            where: {userId, characterId}
        })
    }
}