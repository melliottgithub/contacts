module.exports = `
    type User { 
        name: String!
        email: String!
        password: String!
        date: String!
    }

    type Query { 
        getUsers : [User!]!
    }
`;