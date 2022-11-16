import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useNavigate } from 'react-router-dom'

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext)
    let navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/")
                setRestaurants(response.data.data.restaurants)
            } catch (err) {}
        }
       fetchData()
    // eslint-disable-next-line
    }, []) /* only runs when the component is mounted when have [] */

    const handleDelete = async (e, id) => {
        e.stopPropagation() //prevents further propagation of the current event 
        try {
            const response = await RestaurantFinder.delete(`/${id}`)
            /* validation for restaurant id and remove from UI */
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }))
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation()
        navigate(`/restaurants/${id}/update`)
    }

    const handleRestaurantSelect = (id) => {
        navigate(`/restaurants/${id}`)
    }

    const renderRating = (restaurant) => {
        if (!restaurant.count) {
            return <span className="test-warning ml-1">0 reviews</span>

        }
        return (
            <>
                <StarRating rating={restaurant.average_rating} />
                <span className="test-warning ml-1">({restaurant.count})</span>
            </>
        )
    }

    return (
        <div className="page_container list-group">
          <div className="container-fluid upp-styled-table">
            <table className="styled-table">
              <thead>
                <tr className="bg-dark">
                  <th scope="col">Restaurant</th>
                  <th scope="col">Location</th>
                  <th scope="col">Price range</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* if restaurant exist */}
                {restaurants &&
                  restaurants.map((restaurant) => {
                    return (
                      <tr
                        onClick={() => handleRestaurantSelect(restaurant.id)}
                        key={restaurant.id}
                        className="pointer"
                      >
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location}</td>
                        <td>{"$".repeat(restaurant.price_range)}</td>
                        <td>{renderRating(restaurant)}</td>
                        <td>
                          <button onClick={(e) => handleUpdate(e, restaurant.id)} className='btn btn-warning'>Update</button>
                        </td>
                        <td>
                          <button onClick={(e) => handleDelete(e, restaurant.id)} className='btn btn-danger'>Delete</button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    
    export default RestaurantList
