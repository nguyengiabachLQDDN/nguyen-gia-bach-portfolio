import type { Achievement } from '../content';
import { homeCopy } from '../i18n';
import MediaCarousel from './MediaCarousel';

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  const evidenceLabel = achievement.evidenceLabel ?? homeCopy.evidence.replace(/\s*↗$/, '');

  return (
    <li className={`achievement-card achievement-${achievement.priority}`} data-reveal>
      <MediaCarousel
        assets={achievement.media}
        title={achievement.title}
        label={achievement.year}
        mode="achievement"
        sizes="(max-width: 899px) calc(100vw - 48px), 540px"
      />
      <div className="achievement-card-copy">
        <div className="achievement-meta"><span>{achievement.year}</span><span>{achievement.context}</span></div>
        <h3>{achievement.title}</h3>
        <p>{achievement.description}</p>
        {achievement.evidence ? (
          <a href={achievement.evidence} target="_blank" rel="noreferrer" aria-label={`${evidenceLabel}: ${achievement.title}`}>
            {evidenceLabel} ↗
          </a>
        ) : <span className="achievement-verified">{homeCopy.recordedAchievement}</span>}
      </div>
    </li>
  );
}
