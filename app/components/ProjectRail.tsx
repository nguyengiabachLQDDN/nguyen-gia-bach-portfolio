'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { MediaAsset, Project } from '../content';

function ProjectMediaPreview({ project }: { project: Project }) {
  const availableMedia = [project.cover, ...project.gallery].filter(
    (asset): asset is MediaAsset & { src: string } => Boolean(asset.src),
  );
  const [activeImage, setActiveImage] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  if (!availableMedia.length) {
    return (
      <div className={`project-preview project-preview-${project.variant}`} role="img" aria-label={project.cover.alt}>
        <span>Project / {project.number}</span>
        <strong>Project images coming soon</strong>
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

  return (
    <div
      className="project-preview project-media-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${project.title} image gallery`}
      tabIndex={0}
      onKeyDown={handleImageKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStart.current = null; }}
    >
      <div className="project-media-slide" aria-live="polite">
        <Image
          key={activeAsset.src}
          src={activeAsset.src}
          alt={activeAsset.alt}
          fill
          preload={activeImage === 0 && project.slug === 'astroverse'}
          loading={activeImage === 0 && project.slug === 'astroverse' ? undefined : 'lazy'}
          draggable={false}
          sizes="(max-width: 760px) calc(100vw - 64px), 560px"
          style={activeAsset.objectPosition ? { objectPosition: activeAsset.objectPosition } : undefined}
        />
        {activeAsset.caption ? <p className="project-media-caption">{activeAsset.caption}</p> : null}
      </div>
      {hasGallery ? (
        <div className="project-media-controls" aria-label="Image navigation">
          <button type="button" onClick={() => moveImage(-1)} aria-label={`Previous ${project.title} image`}>←</button>
          <span aria-live="polite">{String(activeImage + 1).padStart(2, '0')} / {String(availableMedia.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => moveImage(1)} aria-label={`Next ${project.title} image`}>→</button>
        </div>
      ) : null}
    </div>
  );
}

export default function ProjectRail({ projects }: { projects: Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(projects.length > 1);

  const syncPosition = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const cards = Array.from(rail.querySelectorAll<HTMLElement>('[data-project-card]'));
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const atEnd = maxScroll > 2 && maxScroll - rail.scrollLeft <= 2;
    const firstCardOffset = cards[0]?.offsetLeft ?? 0;
    const closestIndex = atEnd
      ? cards.length - 1
      : cards.reduce((closest, card, index) => (
          Math.abs(card.offsetLeft - firstCardOffset - rail.scrollLeft)
            < Math.abs(cards[closest].offsetLeft - firstCardOffset - rail.scrollLeft)
            ? index
            : closest
        ), 0);

    setActiveIndex(closestIndex);
    setCanPrevious(rail.scrollLeft > 2);
    setCanNext(maxScroll - rail.scrollLeft > 2);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    syncPosition();
    const resizeObserver = new ResizeObserver(syncPosition);
    resizeObserver.observe(rail);
    return () => resizeObserver.disconnect();
  }, [syncPosition]);

  const moveTo = (index: number) => {
    const rail = railRef.current;
    const cards = rail ? Array.from(rail.querySelectorAll<HTMLElement>('[data-project-card]')) : [];
    const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
    if (!rail || !target) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const firstCardOffset = cards[0]?.offsetLeft ?? 0;
    rail.scrollTo({ left: target.offsetLeft - firstCardOffset, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const handleRailKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveTo(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveTo(activeIndex + 1);
    }
  };

  return (
    <div className="project-rail-shell">
      <div className="project-rail-controls" aria-label="Project navigation">
        <span aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        <button type="button" onClick={() => moveTo(activeIndex - 1)} disabled={!canPrevious} aria-label="Previous project">←</button>
        <button type="button" onClick={() => moveTo(activeIndex + 1)} disabled={!canNext} aria-label="Next project">→</button>
      </div>

      <div
        className="project-rail"
        ref={railRef}
        role="region"
        aria-label="Selected projects"
        tabIndex={0}
        onKeyDown={handleRailKeyDown}
        onScroll={syncPosition}
      >
        {projects.map((project) => {
          const primaryLink = project.links[0];
          return (
            <article className={`project-card project-${project.variant}`} key={project.slug} data-project-card>
              <ProjectMediaPreview project={project} />
              <div className="project-card-body">
                <div className="project-card-topline">
                  <span className="project-status">{project.status}</span>
                  <span>{project.role}</span>
                </div>
                <p className="kicker">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-card-details">
                  <div>
                    <h4>Highlights</h4>
                    <ul className="project-highlights">
                      {project.featuredHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Built with</h4>
                    <ul className="mini-stack" aria-label={`${project.title} technologies`}>
                      {project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
                {primaryLink ? (
                  <a
                    className="project-external-link"
                    href={primaryLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${primaryLink.label}: ${project.title}`}
                  >
                    <span>{project.slug === 'esight-or-robotics' ? 'Visit eSight on Facebook' : 'Visit AstroVerse'}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
