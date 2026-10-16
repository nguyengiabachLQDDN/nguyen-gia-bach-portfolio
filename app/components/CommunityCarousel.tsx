'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

interface CommunityCarouselProps {
  images: CarouselImage[];
  campaignTitle: string;
}

export default function CommunityCarousel({ images, campaignTitle }: CommunityCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevImage, nextImage]);

  if (!images || images.length === 0) return null;

  const currentPhoto = images[currentIndex];

  return (
    <div className="community-carousel" aria-roledescription="carousel" aria-label={`${campaignTitle} photo gallery`}>
      <div className="community-carousel-viewport">
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt || `${campaignTitle} - photo ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
          priority={currentIndex === 0}
          className="community-carousel-image"
        />

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={prevImage}
          className="carousel-nav-btn carousel-prev-btn"
          aria-label="Previous photo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="carousel-nav-btn carousel-next-btn"
          aria-label="Next photo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Counter badge overlay */}
        <div className="carousel-counter-pill" aria-live="polite">
          <span>{String(currentIndex + 1).padStart(2, '0')}</span> / {String(images.length).padStart(2, '0')}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="carousel-pagination" role="tablist" aria-label="Photo dots">
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to photo ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
