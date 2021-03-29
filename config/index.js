const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  db: {
    url: process.env.DB_URL,
  },
  dbPg: {
    connectionString: process.env.PG_CONN_STRING
  }
};
