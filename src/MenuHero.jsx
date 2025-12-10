import React from 'react';

export default function MenuHero() {
  return (
    <div className="relative min-h-screen bg-charcoal overflow-hidden font-manrope">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="./menuHero.webp"
            alt="Menu hero"
            loading="eager"
            className="w-full h-full object-cover animate-[fadeInScale_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="animate-[fadeInUp_1s_ease-out_0.3s_both]">
              <p className="text-goldd tracking-[0.3em] text-xs md:text-sm uppercase font-light mb-4">
                Culinary Excellence
              </p>
              <div className="w-16 h-px bg-gold mx-auto" />
            </div>

            <h1 className="text-goldd uppercase font-playfair text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight animate-[fadeInUp_1s_ease-out_0.5s_both]">
              Our Menu
            </h1>

            <p className="text-ivory text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light animate-[fadeInUp_1s_ease-out_0.7s_both]">
              Experience a journey through refined flavors and artisanal craftsmanship,
              where every dish tells a story of tradition and innovation
            </p>

            <div className="pt-8 animate-[fadeInUp_1s_ease-out_0.9s_both]">
              <a href="#menu">
                <button className="cursor-pointer rounded group relative px-10 py-4 bg-goldd border border-charcoal text-charcoal hover:bg-wine hover:text-ivory transition-all duration-500 tracking-widest text-sm uppercase font-light overflow-hidden">
                  <span className="relative z-10">Explore Menu</span>
                  <div className="absolute inset-0 bg-wine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
                </button>
              </a>
            </div>
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
