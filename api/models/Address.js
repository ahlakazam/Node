module.exports = {
    attributes: {
        city: {
            type: 'string'
        },
        street: {
            type: 'string'
        },
        number: {
             type: 'integer'
        },
        codePoste: {
            type: 'integer'
        },
        owner: {
            model: 'user'
        }
    }
};
