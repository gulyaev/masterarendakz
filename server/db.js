const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres", //можно назвать как вам нравится
    password: "password123",//как вам нравится
    host: "db",
    port: 5432,
    database: "masterarendakz"
})

module.exports = pool
