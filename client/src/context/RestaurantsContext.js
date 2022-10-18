import React, { useState, createContext } from 'react'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = props => {
    /* store array of restaurants */
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    /* pass the new created restaurant and add it to the existed array*/
    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant }}>
            {props.children} {/* pass props */}
        </RestaurantsContext.Provider>
    )
}