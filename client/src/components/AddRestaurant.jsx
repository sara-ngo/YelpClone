import React , {useContext, useState} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import Hero from '../components/Hero'

const AddRestaurant = () => { /* get user inputs and update accordingly*/
    const { addRestaurants } = useContext(RestaurantsContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault() /* prevent reloading the page */
        console.log("add is hit")
        try {
            const response = await RestaurantFinder.post("/", {
                name: name,
                location: location,
                price_range: priceRange
            })
            addRestaurants(response.data.data.restaurant)
        } catch (err) {
            console.log(err)
        }
    }

    return (
      <Hero>
        <form className="row gy-4">
          <div className="col-6">
            <input value={name}
              onChange={
                  e => setName(e.target.value)
                }
              type="text"
              className="form-control w-100"
              placeholder="Name"/>
          </div>
          <div className="col-6">
            <input value={location}
              onChange={
                  e => setLocation(e.target.value)
                }
              type="text"
              className="form-control w-100"
              placeholder="Location"/>
          </div>
          <div className="col-12">
            <select
              defaultValue={'DEFAULT'}
              onChange={
                  e => setPriceRange(e.target.value)
                }
              className="form-select w-100">
              <option value="DEFAULT" disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-4 mx-auto">
            <button onClick={handleSubmit}type="submit" className="btn btn-warning w-100">Add</button>
          </div>
        </form>
      </Hero>
    )
  }
  
  export default AddRestaurant
  