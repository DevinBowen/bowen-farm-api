import { FastifyPluginAsync } from 'fastify'

export const Files: FastifyPluginAsync = async (fastify) => {

    fastify.get('/test', async (req, res) => {
        return console.log('Test route working.')
    })

}

export default Files