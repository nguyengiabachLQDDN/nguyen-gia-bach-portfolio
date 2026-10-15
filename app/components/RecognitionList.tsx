import type { RecognitionItem } from '../content';
import SectionHeader from './SectionHeader';

function RecognitionRow({ item }: { item: RecognitionItem }) {
  return (
    <li className="honors-row">
      <div className="honors-meta">
        <span className="honors-year">{item.year}</span>
        <span className="recognition-level-badge">{item.badge}</span>
      </div>
      <div className="honors-award">
        <h4>{item.title}</h4>
        {item.context ? <p>{item.context}</p> : null}
        {item.scope ? <small className="honors-scope">{item.scope}</small> : null}
      </div>
      <div className="honors-result">
        <strong>{item.result}</strong>
        {item.evidenceHref ? (
          <a href={item.evidenceHref} target="_blank" rel="noreferrer">
            {item.evidenceLabel ?? 'View certificate'} <span>↗</span>
          </a>
        ) : null}
      </div>
    </li>
  );
}

export default function RecognitionList({
  items,
  additionalItems,
}: {
  items: RecognitionItem[];
  additionalItems: RecognitionItem[];
}) {
  return (
    <section className="section honors-section" id="honors" aria-labelledby="honors-title" data-reveal>
      <SectionHeader
        index="01"
        label="Academic honors & awards"
        title="Distinctions, competitions, and verified honors."
        description="A concise record of top competition finishes and academic honors, grouped by level: Competition — Level — Distinction — Period."
      />
      <h3 className="sr-only" id="honors-title">Academic honors and awards</h3>

      <div className="honors-compact-card">
        <ol className="honors-compact-list">
          {items.map((item) => (
            <RecognitionRow item={item} key={`${item.year}-${item.title}`} />
          ))}
        </ol>

        {additionalItems.length ? (
          <details className="honors-additional-details">
            <summary>
              <span>Additional academic distinctions (+{additionalItems.length})</span>
              <span className="toggle-symbol">+</span>
            </summary>
            <ol className="honors-compact-list">
              {additionalItems.map((item) => (
                <RecognitionRow item={item} key={`${item.year}-${item.title}`} />
              ))}
            </ol>
          </details>
        ) : null}
      </div>
    </section>
  );
}
