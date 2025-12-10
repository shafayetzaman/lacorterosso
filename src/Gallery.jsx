import React, { useEffect, useRef, useState } from 'react';
import { GALLERY_IMAGES } from './WebsiteData.jsx';

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target);
            setVisibleImages((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  const getGridClasses = (size, aspect) => {
    let classes = 'relative overflow-hidden rounded-sm ';
    if (size === 'large') {
      classes += 'col-span-2 ';
    } else {
      classes += 'col-span-1 ';
    }

    if (size === 'large' && aspect === 'landscape') {
      classes += 'md:col-span-2 md:row-span-1 ';
    } else if (size === 'large' && aspect === 'portrait') {
      classes += 'md:col-span-1 md:row-span-2 ';
    } else if (size === 'large' && aspect === 'square') {
      classes += 'md:col-span-2 md:row-span-2 ';
    } else if (size === 'medium') {
      classes += 'md:col-span-1 md:row-span-1 ';
    } else {
      classes += 'md:col-span-1 md:row-span-1 ';
    }

    return classes;
  };

  const getAspectClasses = (aspect) => {
    switch (aspect) {
      case 'landscape':
        return 'aspect-[3/2]';
      case 'portrait':
        return 'aspect-[4/5]';
      case 'square':
        return 'aspect-square';
      default:
        return 'aspect-[3/2]';
    }
  };
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <div className='h-[20vh]'></div>
      <main className="px-4 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => (imageRefs.current[index] = el)}
              className={`${getGridClasses(image.size, image.aspect)} ${visibleImages.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${(index % 6) * 100}ms` }}
            >
              <div className="relative w-full h-full group">
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default Gallery;