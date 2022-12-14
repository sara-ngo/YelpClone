import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const UpdateRestaurant = (props) => {
    const { id } = useParams()
    let navigation = useNavigate()
    const { restaurants } = useContext(RestaurantsContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async() => { // retrieve data
            const response = await RestaurantFinder(`/${id}`)
            setName(response.data.data.restaurants.name)
            setLocation(response.data.data.restaurants.location)
            setPriceRange(response.data.data.restaurants.price_range)
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        })
        alert('Update successful!')
        navigation('/home')
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <form action="" className="row gy-3">
              <div className="col-12 col-md-6 form-group">
                <label htmlFor="name">Name</label>
                <input value={name}
                  onChange={
                      (e) => setName(e.target.value)
                    }
                  type="text"
                  id="name"
                  className='form-control'/>
              </div>
              <div className="col-12 col-md-6 form-group">
                <label htmlFor="location">Location</label>
                <input value={location}
                  onChange={
                    (e) => setLocation(e.target.value)
                  }
                  type="text"
                  id="location"
                  className='form-control'
                />
              </div>
              <div className="form-group">
                <label htmlFor="price_range">Price Range</label>
                <select defaultValue={'DEFAULT'}
                  onChange={
                    (e) => setPriceRange(e.target.value)
                  }
                  className="form-select">
                  <option value="DEFAULT" disabled>Price Range</option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                  <option value="5">$$$$$</option>
                </select>
              </div>
              <div className="col-12 col-md-4 mx-auto">
                <button
                  onClick={handleSubmit} type='submit'
                  className="btn btn-primary mt-3 w-100 bg-warning border-0 py-2 text-dark"
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default UpdateRestaurant