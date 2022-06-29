const {getBookSchemas, getBooksSchemas, updateBookSchema, addBookSchemas,deleteBookSchema,} = require("../controllers/schemas/books");
const {getBookHandler, getBooksHandler, updateBookHandler, addBookHandler,deleteBookHandler,} = require("../controllers/handlers/books");

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

const addBookOpts = {
    schema: addBookSchemas,
    handler: addBookHandler,
};

const deleteBookOpts = {
    schema: deleteBookSchema,
    handler: deleteBookHandler,
};

const bookRoutes = (fastify, options, done) => {
    fastify.get("/api/books", getBooksOpts);
    fastify.get("/api/books/:id", getBookOpts );
    fastify.put("/api/books/edit/:id", updateBooksOpts);
    fastify.post("/api/books/new", addBookOpts);
    fastify.delete("/api/books/:id", deleteBookOpts );

    done();
};

module.exports = bookRoutes;