import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivateDiningHero() {
  return (
    <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] bg-charcoal overflow-hidden font-manrope">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="./privateDiningHero.webp"
            alt="Contacts hero"
            loading="eager"
            className="w-full h-full object-cover animate-[fadeInScale_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className=" uppercase text-goldd font-playfair text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight animate-[fadeInUp_1s_ease-out_0.5s_both]">
              Private Dining
            </h1>
            <h1 className=" uppercase text-goldd font-playfair text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight animate-[fadeInUp_1s_ease-out_0.5s_both]">
              The Club Room
            </h1>

            <p className="text-ivory text-base text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light animate-[fadeInUp_1s_ease-out_0.7s_both]">
              Ideally suited to refined business gatherings, celebratory dinners, and distinguished private occasions, our exclusive Club Room gracefully accommodates up to thirty-two seated guests in an atmosphere of understated elegance.
            </p>
          </div>
        </div>

        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="w-12 h-12 md:w-16 md:h-16 border-l border-t border-goldd animate-[fadeInScale_1s_ease-out_0.2s_both]" />
        </div>
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <div className="w-12 h-12 md:w-16 md:h-16 border-r border-b border-goldd animate-[fadeInScale_1s_ease-out_0.2s_both]" />
        </div>
      </div>
    </div>
  );
};
