const books = require("../../cloud/books");

const getBooksHandler =  (req, reply) => {
    return reply.send(books);
   };

   const getBookHandler = (req , reply) => {
    const {id} = req.params;

    const book = books.find((book) => book.id === id );

    if (book){
      return  reply.send(book);
    }

   return reply.status(404).send(new Error("Book not found"));
   };

   const updateBookHandler = (req, reply) => {
    const {id} = req.params;
    const {title, gender} = req.body;

    const book = books.find((book)=> book.id === id);
    if(book){
        book.title = title
        book.gender = gender
      return  reply.send(" Book update!");
    }

    return reply.status(404).send(new Error("Book not found"));
   };

   const addBookHandler = (req, reply) => {
    const {title, gender} = req.body;

    const id = books.length + 1;
    books.push({title, gender,id});

   return reply.send("Book added!");
   };

  
   const deleteBookHandler = (req, reply) => {
    const {id} = req.params;

    const bookIndex = books.findIndex((book)=> book.id === id);
    if (bookIndex === -1) {
      return  reply.status(404).send(new Error("Books not found!"));

    }

    books.splice(bookIndex, 1);

    reply.send("Book was Deleted!")
   };

   module.exports ={
    getBookHandler,
    getBooksHandler,
    updateBookHandler,
    addBookHandler,
    deleteBookHandler,
   }