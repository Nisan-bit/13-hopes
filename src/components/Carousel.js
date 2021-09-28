import React from 'react'

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleFade" class="carousel slide carousel-fade mt-2" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./img/109879_slice.jpg" class="d-block w-100" alt="..." style={{ height: '550px' }} />
          </div>
          <div class="carousel-item">
            <img src="./img/104587_slice.jpg" class="d-block w-100" alt="..." style={{ height: '550px' }} />
          </div>

          <div class="carousel-item">
            <img src="./img/britishgurkha.jpg" class="d-block w-100" alt="..." style={{ height: '550px' }} />
          </div>
          <div class="carousel-item">
            <img src="./img/4684858121_05613b6b08_z.jpg" class="d-block w-100" alt="..." style={{ height: '550px' }} />
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
