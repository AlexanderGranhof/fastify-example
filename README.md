# Fastify example

## How to run example
1. Start the fastify server by running `npm run fastify`
2. Run the postman collection by running `npm run postman`

The fastify instance should output the following error:
```
events.js:291
      throw er; // Unhandled 'error' event
      ^

Error: Unexpected end of multipart data
    at /home/alex/Documents/fastify-example/node_modules/dicer/lib/Dicer.js:61:28
    at processTicksAndRejections (internal/process/task_queues.js:75:11)
Emitted 'error' event on Busboy instance at:
    at Busboy.emit (/home/alex/Documents/fastify-example/node_modules/busboy/lib/main.js:37:33)
    at Dicer.<anonymous> (/home/alex/Documents/fastify-example/node_modules/busboy/lib/types/multipart.js:282:9)
    at Dicer.emit (events.js:314:20)
    at Dicer.emit (/home/alex/Documents/fastify-example/node_modules/dicer/lib/Dicer.js:79:35)
    at /home/alex/Documents/fastify-example/node_modules/dicer/lib/Dicer.js:61:14
    at processTicksAndRejections (internal/process/task_queues.js:75:11)
```

You can import the collection into postman aswell. Make sure you reselect the image file in the body tab, as the relative path will not work in the postman app.