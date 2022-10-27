// entry point into backend/express app

require("dotenv").config(); // for creating env var and keep it from public

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./db")

const app = express()

// middleware
app.use(cors())
app.use(morgan("dev")) // log HTTP requests
app.use(express.json())

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM restaurants")
        const restaurantRatingData = await db.query("SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id;")

        res.status(200).json({
            status: "success",
            results: restaurantRatingData.rows.length,
            data: {
                restaurants: restaurantRatingData.rows,
            }
        })
    } catch (err) {
        console.log(err)
    }
}) 

// get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const restaurant = await db.query("SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1", [req.params.id])
        
        const reviews = await db.query("SELECT * FROM reviews where restaurant_id = $1", [req.params.id])
        
        res.status(200).json({
            status: "success",
            data: {
                restaurants: restaurant.rows[0],
                reviews: reviews.rows,
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

// update a restaurant
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

app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
    try {
        const newReview = await db.query("INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4);", 
        [req.params.id, req.body.name, req.body.review, req.body.rating])

        res.status(201).json({
            status: "success",
            data: {
                review: newReview.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }
})

const port = process.env.PORT || 3001 
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
})

// for API testing: node server.js to run and crtl + c to stop