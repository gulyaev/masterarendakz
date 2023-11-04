const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres", //можно назвать как вам нравится
    password: "root",//как вам нравится
    host: "127.0.0.1",
    port: 5432,
    database: "masterarendakz"
})

module.exports = pool
