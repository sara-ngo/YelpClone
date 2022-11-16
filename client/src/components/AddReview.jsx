import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddReview = () => {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("Rating")

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating
            })
        window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <form action="" className="row gy-3 align-items-end">
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="name">Name</label>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    id="name"
                    placeholder="Type your name"
                    type="text"
                    className='form-control'/>
                </div>
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="rating">Rating</label>
                  <select
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    id="rating"
                    className="form-select"
                  >
                    <option disabled>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
    
                <div className="form-group">
                  <label htmlFor="review">Review</label>
                  <textarea
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                    id="review"
                    className="form-control"
                    rows={5}
                  ></textarea>
                </div>
                <div className="col-12 col-md-3 mx-auto">
                  <button
                    type="submit" onClick={handleSubmitReview}
                    className="btn btn-primary w-100 bg-warning border-0 py-2 text-dark">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
    
    export default AddReview
    