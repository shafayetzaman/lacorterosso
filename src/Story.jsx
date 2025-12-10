import React, { useEffect, useRef, useState } from 'react';
import StoryHero from './StoryHero.jsx';

// ===== IMPORT ABOUT IMAGES =====
import cheese from '/src/assets/about/cheese.webp';
import spices from '/src/assets/about/spices.webp';
import chef from '/src/assets/about/chef.webp';
import restaurant from '/src/assets/about/restaurant.webp';

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef({});

  useEffect(() => {
    const observers = {};

    Object.keys(observerRefs.current).forEach(key => {
      const element = observerRefs.current[key];
      if (element) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        observers[key].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const fadeUpVariant = (isVisible, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  });

  const fadeScaleVariant = (isVisible, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.98)',
    transition: `all 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  });

  return (
    <>
      <StoryHero />
      <div className="bg-charcoal text-ivory font-manrope">
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-32 lg:py-40">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              ref={el => observerRefs.current['origin-img'] = el}
              style={fadeScaleVariant(isVisible['origin-img'])}
              className="order-2 md:order-1 overflow-hidden"
            >
              <img
                src={cheese}
                alt="Historic European dining room"
                className="w-full h-[500px] md:h-[600px] object-cover grayscale"
              />
            </div>

            <div
              ref={el => observerRefs.current['origin-text'] = el}
              style={fadeUpVariant(isVisible['origin-text'], 0.2)}
              className="order-1 md:order-2 space-y-8"
            >
              <div className="space-y-3">
                <p className="text-goldd tracking-[0.3em] uppercase text-xs font-light">Est. 1987</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-goldd font-playfair leading-tight">
                  A Legacy of<br />Refined Taste
                </h2>
              </div>

              <div className="space-y-6 text-ivory leading-relaxed text-base md:text-lg font-light">
                <p>
                  In the heart of Piedmont, where rolling vineyards meet centuries-old architecture, La Corte Rosso was born from a singular vision: to honor the timeless traditions of Italian gastronomy while embracing the poetry of seasonal change.
                </p>
                <p>
                  Founded by the Rosselli family in 1987, our restaurant occupies a meticulously restored 18th-century palazzo. Each stone, each archway, whispers stories of the artisans and merchants who once gathered here.
                </p>
                <p>
                  Today, we continue that legacy—not as preservationists frozen in time, but as storytellers who understand that true luxury lies in the careful balance between heritage and evolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              ref={el => observerRefs.current['philosophy-text'] = el}
              style={fadeUpVariant(isVisible['philosophy-text'], 0.2)}
              className="space-y-8"
            >
              <div className="space-y-3">
                <p className="text-goldd tracking-[0.3em] uppercase text-xs font-light">Philosophy</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-goldd font-playfair leading-tight">
                  Ingredients<br />as Poetry
                </h2>
              </div>

              <div className="space-y-6 text-ivory leading-relaxed text-base md:text-lg font-light">
                <p>
                  We source exclusively from artisans who share our reverence for craft. Our white truffles arrive from the forests of Alba. Our olive oil is pressed by hand in groves tended for generations.
                </p>
                <p>
                  Every element on your plate has been chosen not merely for flavor, but for its story—the soil it grew in, the hands that harvested it, the journey it took to reach our kitchen.
                </p>
                <p>
                  This is not farm-to-table dining. This is an intimate conversation between land, maker, and guest—a dialogue conducted in the language of taste, texture, and time.
                </p>
              </div>
            </div>

            <div
              ref={el => observerRefs.current['philosophy-img'] = el}
              style={fadeScaleVariant(isVisible['philosophy-img'], 0.3)}
              className="overflow-hidden"
            >
              <img
                src={spices}
                alt="Spices and herbs"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div
              ref={el => observerRefs.current['chef-img'] = el}
              style={fadeScaleVariant(isVisible['chef-img'])}
              className="space-y-6"
            >
              <div className="overflow-hidden bg-stone-200">
                <img
                  src={chef}
                  alt="Chef Elena Rosselli"
                  className="w-full h-[600px] md:h-[700px] object-cover"
                />
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-2xl font-light text-goldd font-playfair">
                  Elena Rosselli
                </h3>
                <p className="text-sm tracking-wider uppercase text-ivory font-light">
                  Executive Chef
                </p>
              </div>
            </div>

            <div
              ref={el => observerRefs.current['ambience-img'] = el}
              style={fadeScaleVariant(isVisible['ambience-img'], 0.2)}
              className="space-y-6"
            >
              <div className="overflow-hidden bg-stone-200">
                <img
                  src={restaurant}
                  alt="Intimate table setting"
                  className="w-full h-[600px] md:h-[700px] object-cover"
                />
              </div>
              <div className="px-2">
                <p className="text-sm leading-relaxed text-ivory font-light">
                  Each evening, our dining room becomes an intimate sanctuary—crafted not for grandeur, but for timeless presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <div
            ref={el => observerRefs.current['closing'] = el}
            style={fadeUpVariant(isVisible['closing'])}
            className="space-y-8"
          >
            <div className="w-16 h-px bg-rosso mx-auto"></div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-goldd font-playfair leading-relaxed">
              "We do not serve meals.<br />We create moments that linger<br />long after the final course."
            </p>
            <p className="text-sm tracking-wider uppercase text-ivory font-light">
              — The Rosselli Family
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
