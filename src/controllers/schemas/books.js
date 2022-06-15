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

    module.exports = { getBookSchemas, getBooksSchemas };
