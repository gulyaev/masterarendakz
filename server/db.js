const Pool = require('pg').Pool
const pool = new Pool({
    host: "db",
    port: 5432,
    user: "user123", //можно назвать как вам нравится
    password: "password123",//как вам нравится
    database: "db123"
})

module.exports = pool
