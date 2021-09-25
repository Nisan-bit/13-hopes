import React from 'react'
import Slider from "react-slick";
import './trending.css'
const Trending = () => {


    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 700,
        autoplaySpeed:5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className="container-fluid shadow mt-4 mb-3 py-5">


        <Slider {...settings}>
          <div>
          <img src="./images/Image (400).jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/Image (382).jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/sailor.gif" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/Ronin.gif" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/SwordDraw.gif" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/Fight.gif" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/GarbageDemon.gif" className="img-fluid custom-slide" alt=""/>
          </div>
        </Slider>
                </div>


        </>
    )
}

export default Trending
