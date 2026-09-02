import type { ReactNode } from 'react';
import type { SkillGroup, SkillIconKey } from '../content';

function ToolkitGlyph({ icon }: { icon: SkillIconKey }) {
  let glyph: ReactNode;

  switch (icon) {
    case 'python':
      glyph = <><path d="M7 4.5c0-1.4 1.1-2.5 2.5-2.5h4C15 2 16 3 16 4.5V9H8.5A3.5 3.5 0 0 0 5 12.5V14H3.5A2.5 2.5 0 0 1 1 11.5v-4A2.5 2.5 0 0 1 3.5 5H7Z"/><circle cx="10" cy="4.8" r=".8" fill="#061116"/><path d="M17 19.5c0 1.4-1.1 2.5-2.5 2.5h-4A2.5 2.5 0 0 1 8 19.5V15h7.5a3.5 3.5 0 0 0 3.5-3.5V10h1.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H17Z"/><circle cx="14" cy="19.2" r=".8" fill="#061116"/></>;
      break;
    case 'javascript':
      glyph = <><rect x="2" y="2" width="20" height="20" rx="3"/><text x="12" y="14.8">JS</text></>;
      break;
    case 'typescript':
      glyph = <><rect x="2" y="2" width="20" height="20" rx="3"/><text x="12" y="14.8">TS</text></>;
      break;
    case 'html':
      glyph = <><path d="M4 2h16l-1.5 18L12 22l-6.5-2Z"/><text x="12" y="15">5</text></>;
      break;
    case 'css':
      glyph = <><path d="M4 2h16l-1.5 18L12 22l-6.5-2Z"/><text x="12" y="15">3</text></>;
      break;
    case 'react':
      glyph = <><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/></>;
      break;
    case 'nextjs':
      glyph = <><circle cx="12" cy="12" r="10"/><path d="M8 17V7l9 10V7"/></>;
      break;
    case 'vite':
      glyph = <path d="m3 4 9 18L21 4l-7 2-2-4-2 4Z"/>;
      break;
    case 'tailwind':
      glyph = <path d="M2 10c3-5 6-5 9-2 2 2 3 2 5 1 2-1 4-1 6 1-3 5-6 5-9 2-2-2-3-2-5-1-2 1-4 1-6-1Zm0 6c3-5 6-5 9-2 2 2 3 2 5 1 2-1 4-1 6 1-3 5-6 5-9 2-2-2-3-2-5-1-2 1-4 1-6-1Z"/>;
      break;
    case 'astropy':
      glyph = <><ellipse cx="12" cy="12" rx="10" ry="5"/><path d="m12 3 1.7 5.1H19l-4.3 3.1 1.7 5.1-4.4-3.1-4.4 3.1 1.7-5.1L5 8.1h5.3Z"/></>;
      break;
    case 'nasa':
      glyph = <><circle cx="12" cy="12" r="9.5"/><path d="M4.5 16c4-5 9-7 15-8M7 5l10 14"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>;
      break;
    case 'arduino':
      glyph = <><path d="M9.5 8C6 4.5 1.5 7 1.5 12s4.5 7.5 8 4l5-5c3.5-3.5 8-1 8 3s-4.5 6.5-8 3l-5-5Z"/><path d="M5 12h4m-2-2v4m9-2h4"/></>;
      break;
    case 'vision':
      glyph = <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3.2"/></>;
      break;
    case 'embedded':
      glyph = <><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M8 2v3m4-3v3m4-3v3M8 19v3m4-3v3m4-3v3M2 8h3m-3 4h3m-3 4h3m14-8h3m-3 4h3m-3 4h3"/></>;
      break;
    case 'git':
      glyph = <><path d="m12 2 10 10-10 10L2 12Z"/><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="16" r="1.5"/><circle cx="8" cy="16" r="1.5"/><path d="M8 9.5v5m1.5-6H12a4 4 0 0 1 4 4v2"/></>;
      break;
    case 'github':
      glyph = <><path d="M8 21c-4 1.2-4-2-5-2.5m10 3.5v-3.5c0-1 .1-1.5-.5-2 3.5-.4 7-1.7 7-7.5 0-1.7-.6-3-1.6-4.1.2-.5.7-2.2-.2-4.1 0 0-1.3-.4-4.3 1.6a15 15 0 0 0-7.8 0C2.6.4 1.3.8 1.3.8.4 2.7.9 4.4 1.1 4.9A5.8 5.8 0 0 0-.5 9c0 5.8 3.5 7.1 7 7.5-.5.4-.6 1-.6 2V22" transform="translate(2 0) scale(.9)"/></>;
      break;
    case 'vercel':
      glyph = <path d="M12 3 23 21H1Z"/>;
      break;
    case 'sandbox':
      glyph = <><path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="m3 7 9 5 9-5M12 12v10"/></>;
      break;
    case 'openseadragon':
      glyph = <><rect x="3" y="3" width="7" height="7"/><rect x="12" y="3" width="5" height="5"/><rect x="3" y="12" width="5" height="5"/><circle cx="15" cy="15" r="4"/><path d="m18 18 4 4"/></>;
      break;
  }

  const filled = ['python', 'javascript', 'typescript', 'html', 'css', 'vite', 'tailwind', 'vercel'].includes(icon);

  return (
    <svg
      aria-hidden="true"
      className="toolkit-icon"
      data-icon={icon}
      fill={filled ? 'currentColor' : 'none'}
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={filled ? 0 : 1.55}
      viewBox="0 0 24 24"
    >
      {glyph}
    </svg>
  );
}

export default function Toolkit({
  groups,
  learning,
  learningLabel,
}: {
  groups: SkillGroup[];
  learning: string[];
  learningLabel: string;
}) {
  return (
    <div className="toolkit-panel">
      {groups.map((group) => {
        const headingId = `toolkit-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
        return (
          <section className="toolkit-row" key={group.title} aria-labelledby={headingId}>
            <h3 id={headingId}>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li className="toolkit-chip" key={item.name}>
                  <ToolkitGlyph icon={item.icon} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <div className="toolkit-learning">
        <strong>{learningLabel}</strong>
        <ul>{learning.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>
  );
}
