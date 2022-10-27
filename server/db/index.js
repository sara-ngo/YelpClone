// const { Pool } = require("pg")

// const pool = new Pool()

// // exports query to pq
// module.exports = {
//     query: (text, params) => pool.query(text, params)
// }


const { Client } = require('pg')

const client = new Client({
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DB_NAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
})

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// exports query to pq
module.exports = {
    query: (text, params) => client.query(text, params)
}