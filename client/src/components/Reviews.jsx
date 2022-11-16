import React from 'react'
import StarRating from './StarRating'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Reviews = ({ reviews }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <div className="w-100 px-2">
              <div
                key={review.id}
                className="card text-white bg-dark mb-3 mr-4 w-100"
              >
                <div className="card-header d-flex justify-content-between">
                  <span className="fw-bold">{review.name}</span>
                  <span>
                    <StarRating rating={review.rating} />
                  </span>
                </div>
                <div className="card-body">
                  <p className="card-text">{review.review}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  )
}

export default Reviews
