import type { ProjectVariant } from '../content';

export default function ProjectVisual({ variant, number, large = false }: { variant: ProjectVariant; number: string; large?: boolean }) {
  return (
    <div className={`project-visual visual-${variant}${large ? ' visual-large' : ''}`} aria-hidden="true">
      <span className="visual-coordinate">OBJ / {number}</span>
      <div className="visual-orbit orbit-a" />
      <div className="visual-orbit orbit-b" />
      <div className="visual-core"><span>{number}</span></div>
      {variant === 'jwst' && <div className="visual-tiles">{Array.from({ length: 12 }).map((_, index) => <i key={index} />)}</div>}
      {variant === 'astroverse' && <div className="visual-stars">{Array.from({ length: 9 }).map((_, index) => <i key={index} />)}</div>}
      {variant === 'robotics' && <div className="visual-nodes"><i /><i /><i /><i /></div>}
    </div>
  );
}
