import type { RecognitionItem } from '../content';
import SectionHeader from './SectionHeader';

function RecognitionRow({ item }: { item: RecognitionItem }) {
  return (
    <li>
      <div className="recognition-meta">
        <span className="recognition-year">{item.year}</span>
        <span className="recognition-level-badge">{item.badge}</span>
      </div>
      <div className="recognition-award">
        <h3>{item.title}</h3>
        {item.context ? <p>{item.context}</p> : null}
        {item.scope ? <small className="recognition-scope">{item.scope}</small> : null}
      </div>
      <div className="recognition-result">
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
    <section className="section recognition-section" id="honors" aria-labelledby="honors-title" data-reveal>
      <SectionHeader
        index="01"
        label="Academic honors & awards"
        title="Distinctions, competitions, and verified honors."
        description="A concise record of top competition finishes and academic honors, grouped by level: Competition — Level — Distinction — Period."
      />
      <h3 className="sr-only" id="honors-title">Academic honors and awards</h3>
      <ol className="recognition-list">
        {items.map((item) => (
          <RecognitionRow item={item} key={`${item.year}-${item.title}`} />
        ))}
      </ol>
      {additionalItems.length ? (
        <details className="additional-recognition">
          <summary>Additional academic distinctions <span>+</span></summary>
          <ol>
            {additionalItems.map((item) => (
              <RecognitionRow item={item} key={`${item.year}-${item.title}`} />
            ))}
          </ol>
        </details>
      ) : null}
    </section>
  );
}
