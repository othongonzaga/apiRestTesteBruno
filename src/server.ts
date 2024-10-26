import Fastify from 'fastify'
import {charactersRoutes} from '@routes/characters'

const fastify = Fastify({
  logger: true
})

fastify.register(charactersRoutes)

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server is running`)
})