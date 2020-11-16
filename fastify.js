const createFastify = require('fastify')
const fastifyMultiPart = require('fastify-multipart')

const fastify = createFastify()

fastify.register(fastifyMultiPart)

fastify.post('/', async (req, rep) => {
    await req.file()
    rep.send('OK')
})

fastify.listen(8080)