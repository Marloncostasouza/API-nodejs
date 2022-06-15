const {getBookSchemas, getBooksSchemas} = require("../controllers/schemas/books");
const {getBookHandler, getBooksHandler} = require("../controllers/handlers/books");

const getBookOpts = {
    schema: getBookSchemas,
    handler: getBookHandler,
};


const getBooksOpts = {
    schema: getBooksSchemas,
    handler: getBooksHandler,
};


const bookRoutes = (fastify, options, done) => {
    fastify.get("/api/books", getBooksOpts);
    fastify.get("/api/books/:id", getBookOpts );

    done();
};

module.exports = bookRoutes;