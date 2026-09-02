'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import type { MediaAsset, ProjectVariant } from '../content';

type MediaCarouselProps = {
  assets: MediaAsset[];
  title: string;
  label: string;
  mode: 'project' | 'achievement';
  variant?: ProjectVariant;
  sizes: string;
  preloadFirst?: boolean;
};

export default function MediaCarousel({
  assets,
  title,
  label,
  mode,
  variant,
  sizes,
  preloadFirst = false,
}: MediaCarouselProps) {
  const availableMedia = assets.filter(
    (asset): asset is MediaAsset & { src: string } => Boolean(asset.src),
  );
  const [activeImage, setActiveImage] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  if (!availableMedia.length) {
    const alt = assets[0]?.alt ?? `Reserved image for ${title}.`;
    if (mode === 'project') {
      return (
        <div className={`project-preview project-preview-${variant}`} role="img" aria-label={alt}>
          <span>{label}</span>
          <strong>Project images coming soon</strong>
        </div>
      );
    }

    return (
      <div className="achievement-media achievement-media-empty" role="img" aria-label={alt}>
        <div className="achievement-media-placeholder">
          <span>{label}</span>
          <strong>Achievement image coming soon</strong>
        </div>
        <div className="achievement-media-footer achievement-media-footer-empty" aria-hidden="true" />
      </div>
    );
  }

  const moveImage = (direction: -1 | 1) => {
    setActiveImage((current) => (current + direction + availableMedia.length) % availableMedia.length);
  };

  const handleImageKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    event.stopPropagation();
    moveImage(event.key === 'ArrowLeft' ? -1 : 1);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    const distanceX = event.clientX - start.x;
    const distanceY = event.clientY - start.y;
    if (Math.abs(distanceX) < 36 || Math.abs(distanceX) <= Math.abs(distanceY)) return;
    moveImage(distanceX < 0 ? 1 : -1);
  };

  const activeAsset = availableMedia[activeImage] ?? availableMedia[0];
  const hasGallery = availableMedia.length > 1;
  const image = (
    <Image
      key={activeAsset.src}
      src={activeAsset.src}
      alt={activeAsset.alt}
      fill
      preload={preloadFirst && activeImage === 0}
      loading={preloadFirst && activeImage === 0 ? undefined : 'lazy'}
      draggable={false}
      sizes={sizes}
      style={{
        objectPosition: activeAsset.objectPosition,
        objectFit: activeAsset.objectFit,
      }}
    />
  );

  const controls = (className: string) => hasGallery ? (
    <div className={className} aria-label={`${title} image navigation`}>
      <button type="button" onClick={() => moveImage(-1)} aria-label={`Previous ${title} image`}>←</button>
      <span aria-live="polite">{String(activeImage + 1).padStart(2, '0')} / {String(availableMedia.length).padStart(2, '0')}</span>
      <button type="button" onClick={() => moveImage(1)} aria-label={`Next ${title} image`}>→</button>
    </div>
  ) : null;

  const interactionProps = {
    role: 'region',
    'aria-roledescription': 'carousel',
    'aria-label': `${title} image gallery`,
    tabIndex: 0,
    onKeyDown: handleImageKeyDown,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerCancel: () => { pointerStart.current = null; },
  } as const;

  if (mode === 'achievement') {
    return (
      <div className="achievement-media achievement-media-carousel" {...interactionProps}>
        <div className="achievement-media-stage" aria-live="polite">{image}</div>
        <div className="achievement-media-footer">
          <div className="achievement-media-copy">
            {activeAsset.caption ? <span>{activeAsset.caption}</span> : null}
            {activeAsset.credit ? (
              activeAsset.sourceHref ? (
                <a href={activeAsset.sourceHref} target="_blank" rel="noreferrer">{activeAsset.credit} ↗</a>
              ) : <small>{activeAsset.credit}</small>
            ) : null}
          </div>
          <div className="achievement-media-actions">
            <a href={activeAsset.src} target="_blank" rel="noreferrer" aria-label={`View full image for ${title}`}>View full image ↗</a>
            {controls('achievement-media-controls')}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview project-media-carousel" {...interactionProps}>
      <div className="project-media-slide" aria-live="polite">
        {image}
        {activeAsset.caption ? <p className="project-media-caption">{activeAsset.caption}</p> : null}
      </div>
      {controls('project-media-controls')}
    </div>
  );
}
