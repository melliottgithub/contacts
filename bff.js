const express = require('express');
const router = require('./routes');
const { graphiqlExpress , graphqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = 'graphql-tools';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/graphiql', graphiqlExpress({
    endpointURL : '/graphql'
}))

app.use('/api/users', router.users);
app.use('/api/contacts', router.contacts);
app.use('/api/auth', router.auth);


app.get('/', (req, res, next) => res.send('Hi'));

app.listen(PORT, () => console.log(`Server works on Port: ${PORT}`));
