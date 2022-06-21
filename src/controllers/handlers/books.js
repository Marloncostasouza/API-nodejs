const books = require("../../cloud/books");

const getBooksHandler =  (req, reply) => {
    reply.send(books);
   };

   const getBookHandler = (req , reply) => {
    const {id} = req.params;

    const book = books.find((book) => book.id === id );

    if (book){
        reply.send(book);
    }

    reply.status(404).send(new Error("Book not found"));
   };

   const updateBookHandler = (req, reply) => {
    const {id} = req.params;
    const {title, gender} = req.body;

    const book = books.find((book)=> book.id === id);
    if(book){
        book.title = title
        book.gender = gender
        reply.send(" Book update!");
    }

    reply.status(404).send(new Error("Book not found"));
   };

   module.exports ={
    getBookHandler,
    getBooksHandler,
    updateBookHandler,
   }