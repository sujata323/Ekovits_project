import React from 'react';
import Slider from 'react-slick';
import './LogoSlider.css'; // custom styles

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4, // adjust for your layout
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="logo-slider-wrapper">
      <Slider {...settings}>
        <div className="logo-slide"><img src="/logoh1.png" alt="Client 1" /></div>
        <div className="logo-slide"><img src="/logo3.png" alt="Client 2" /></div>
        <div className="logo-slide"><img src="/logo4.png" alt="Client 3" /></div>
        <div className="logo-slide"><img src="/down.png" alt="Client 4" /></div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
