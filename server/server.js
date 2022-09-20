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
        const results = await db.query("SELECT * FROM restaurants where id = $1", [req.params.id])
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
app.post("/api/v1/restaurants", async (req, res) => {
    console.log(req.body)
    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
         [req.body.name, req.body.location, req.body.price_range])
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

// update restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
         [req.body.name, req.body.location, req.body.price_range, req.params.id])
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

// delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants where id = $1", [req.params.id])
        res.status(204).json({
            status: "success"
        })
    } catch (err) {
        console.log(err)
    }
})

const port = process.env.PORT || 3001 
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
})

// node server.js to run and crtl + c to stop