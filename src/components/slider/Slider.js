import React from 'react';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';
import './Slider.css';


function Slider() {
  return <div className="carousel-container">
    <div className="carousel-title">
      <h2>My Project</h2>
    </div>
    <Carousel

      plugins={
        [
          'centered',
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2
            }
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            }
          },


        ]}

      animationSpeed={200}
      
      slides={Slides}


      breakpoints={{

        960: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              }
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              }
            },
            
            'centered',
            'infinite',
            
          ]
        }
      }}

    />
  </div>;
}

export default Slider;
