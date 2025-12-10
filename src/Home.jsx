import React, { useState, useEffect } from 'react';
import { SLIDES } from './WebsiteData.jsx';
import { Link } from 'react-router-dom';

const LaCorteRosso = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [SLIDES.length]);

  return (
    <div className="min-h-screen bg-charcoal text-ivory font-manrope overflow-hidden">

      <div className="relative h-screen overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
              }}
            />

            <div className="absolute inset-0 bg-charcoal/30"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center z-20  font-Manrope">
          <div className="text-center">
            <div className="space-y-4 md:space-y-8 flex flex-col  lg:flex-row gap-10 md:gap-20 justify-center">
              <Link to='/gallery'><h2 className="font-bold font-playfair text-3xl md:text-4xl lg:text-5xl tracking-widest text-goldd hover:border-b-2 transition-colors duration-1000 cursor-pointer">
                GALLERY
              </h2></Link>

              <Link to='/menu'><h2 className="font-bold font-playfair text-3xl md:text-4xl lg:text-5xl tracking-widest text-goldd hover:border-b-2 transition-colors duration-1000 cursor-pointer">
                MENU
              </h2></Link>

              <Link to='/reserve'><h2 className="font-bold font-playfair text-3xl md:text-4xl lg:text-5xl tracking-widest text-goldd hover:border-b-2 transition-colors duration-1000 cursor-pointer">
                RESERVE
              </h2></Link>
            </div>
            <p className="text-lg md:text-xl font-light tracking-widest uppercase mt-8 md:mt-12 opacity-80 text-goldd">
              An evening reserved for royalty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaCorteRosso;