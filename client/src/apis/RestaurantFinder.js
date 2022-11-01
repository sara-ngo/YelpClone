import axios from 'axios'

export default axios.create({
    baseURL: "https://grab-a-restaurant.herokuapp.com/api/v1/restaurants"
})