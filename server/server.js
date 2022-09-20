// entry point into backend/express app

require("dotenv").config(); // for creating env var and keep it from public

const express = require("express")
const morgan = require("morgan")
const db = require("./db")

const app = express()

// middleware
app.use(morgan("dev"))
app.use(express.json())

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants")
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurant: results.rows,
            }
        })
    } catch (err) {
        console.log(err)
    }
}) 

// get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(`SELECT * FROM restaurants where id = ${req.params.id}`)
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }
})

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data: {
            restaurant: req.body.name,
        }
    })
})

// update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        }
    })
})

// delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    })
})

const port = process.env.PORT || 3001 
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
})

// node server.js to run and crtl + c to stop