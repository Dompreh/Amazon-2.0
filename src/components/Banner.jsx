import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
            <div>
                <img loading='lazy' src="https://m.media-amazon.com/images/I/715Hmi-5iSL._SX3000_.jpg" alt="banner" />
            </div>
            <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="banner" />
            </div>
            <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="banner" />
            </div>
        </Carousel>
    </div>
  )
}

export default Banner
