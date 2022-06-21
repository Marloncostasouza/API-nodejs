const typeString = {
    type:"string",
};
const typeNumber = {
    type: "number",
};

const book = {
    type:"object",
    properties:{
        id: typeNumber,
        title: typeString,
        gender: typeString,
    },
}

const getBookSchemas ={
    params:{
        id: typeNumber,
    },
    response: {
        200: book,
    },
};

const getBooksSchemas = {
        response:{
            200:{
                type:"array",
                items: book,
            
            },
        },
    }

    const updateBookSchema = {
        body: {
            type: "object",
            required: ["title" , "gender"],
            properties: {
                title: typeString,
                gender: typeString,
            },
           
        },
        params:{
            id: typeNumber,
        },
        response: {
            200: typeString,
        },
    };

    module.exports = { getBookSchemas, getBooksSchemas, updateBookSchema };
