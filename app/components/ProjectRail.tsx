'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Project } from '../content';
import MediaCarousel from './MediaCarousel';

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
          const primaryLink = project.links.find((link) => link.cardRole === 'primary');
          const secondaryLinks = project.links.filter((link) => link.cardRole === 'secondary').slice(0, 2);
          return (
            <article className={`project-card project-${project.variant}`} key={project.slug} data-project-card>
              <MediaCarousel
                assets={[project.cover, ...project.gallery]}
                title={project.title}
                label={`Project / ${project.number}`}
                mode="project"
                variant={project.variant}
                sizes="(max-width: 760px) calc(100vw - 40px), 448px"
                preloadFirst={project.slug === 'jwst-deep-space-explorer'}
              />
              <div className="project-card-body">
                <div className="project-card-topline">
                  <span className="project-status">{project.status}</span>
                  <span>{project.role}</span>
                </div>
                <p className="kicker">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-card-tools">
                  <h4>Built with</h4>
                  <ul className="mini-stack" aria-label={`${project.title} technologies`}>
                    {project.stack.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                {primaryLink ? (
                  <div className="project-card-links">
                    <a
                      className="project-external-link"
                      href={primaryLink.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${primaryLink.label}: ${project.title}`}
                    >
                      <span>{primaryLink.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    {secondaryLinks.length ? (
                      <div className="project-secondary-links" aria-label={`${project.title} resources`}>
                        {secondaryLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${link.label}: ${project.title}`}
                          >
                            {link.label}<span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
