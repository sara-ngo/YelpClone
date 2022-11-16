import React from 'react'
import UpdateRestaurant from '../components/UpdateRestaurant'
import Hero from '../components/Hero'

const UpdatePage = () => {
  return (
    <>
      <Hero notHome="nothome">
        <h1 className="text-center text-white">
          <span className="fw-bold text-warning">Update</span>{" "}
          Restaurant
        </h1>
      </Hero>
      <div className="page_container">
        <div className="container-fluid">
          <div className="mt-5">
            <UpdateRestaurant />
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatePage
