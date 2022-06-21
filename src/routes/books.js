const {getBookSchemas, getBooksSchemas, updateBookSchema,} = require("../controllers/schemas/books");
const {getBookHandler, getBooksHandler, updateBookHandler,} = require("../controllers/handlers/books");

const getBookOpts = {
    schema: getBookSchemas,
    handler: getBookHandler,
};


const getBooksOpts = {
    schema: getBooksSchemas,
    handler: getBooksHandler,
};

const updateBooksOpts = {
    schema: updateBookSchema,
    handler: updateBookHandler,
};

const bookRoutes = (fastify, options, done) => {
    fastify.get("/api/books", getBooksOpts);
    fastify.get("/api/books/:id", getBookOpts );
    fastify.put("/api/books/edit/:id", updateBooksOpts);

    done();
};

module.exports = bookRoutes;