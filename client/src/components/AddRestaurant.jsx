import React , {useContext, useState} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

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
        <div className="m-4">
            <form className="row">
                <div className="col">
                    <input value={name}
                        onChange={
                            e => setName(e.target.value)
                        }
                        type="text"
                        className="form-control"
                        placeholder="Name"/>
                </div>
                <div className="col">
                    <input value={location}
                        onChange={
                            e => setLocation(e.target.value)
                        }
                        type="text"
                        className="form-control"
                        placeholder="Location"/>
                </div>
                <div className="col">
                    <select 
                        defaultValue={'DEFAULT'}
                        onChange={
                            e => setPriceRange(e.target.value)
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
                <div className="col">
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary col">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
