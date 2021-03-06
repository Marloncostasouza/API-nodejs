const PORT = 8000;

const fastify = require("fastify")({logger: true});

const starServer = async () => {
    try {
        await fastify.listen(PORT)
    }catch (error){
        fastify.log.error(error);
        process.exit(1);
    }
};

fastify.register(require("./routes/books"));



starServer();