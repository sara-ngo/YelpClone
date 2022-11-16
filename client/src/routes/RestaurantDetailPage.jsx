import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../context/RestaurantsContext'
import Hero from '../components/Hero'

const RestaurantDetailPage = () => {
  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        setSelectedRestaurant(response.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {selectedRestaurant && (
        <>
          <Hero notHome="nothome">
            <h1 className='text-center display-2 fw-bold text-white'>{selectedRestaurant.restaurants.name}</h1>
            <div className="text-center mt-2 mt-md-4">
              <StarRating rating={selectedRestaurant.restaurants.average_rating}/>
              <span className="text-warning ml-1 fw-bold">
                {selectedRestaurant.restaurants.count ? `(${selectedRestaurant.restaurants.count})` : "(0)"}
              </span>
            </div>
          </Hero>
          <div className="page_container">
            <div className="container-fluid">
              <div className="mt-5">
                <Reviews reviews={selectedRestaurant.reviews} />
              </div>
              <AddReview />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default RestaurantDetailPage
