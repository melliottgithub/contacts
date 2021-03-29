const users = require("./models/users");


module.exports = { 
    Query :  {
        getUsers : () => users.getAllUsers()
    }
}