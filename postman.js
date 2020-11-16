const newman = require('newman');
 
newman.run({
    collection: require('./fastify.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});