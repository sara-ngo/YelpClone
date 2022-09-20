const { Pool } = require("pg")

const pool = new Pool()

// exports query to pq
module.exports = {
    query: (text, params) => pool.query(text, params)
}