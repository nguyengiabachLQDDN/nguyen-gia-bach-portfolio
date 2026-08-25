import Image from 'next/image';
import type { MediaAsset, ProjectVariant } from '../content';

type MediaRatio = 'cover' | 'gallery' | 'compact';

export default function MediaFrame({
  asset,
  label,
  variant = 'achievement',
  ratio = 'cover',
  eager = false,
  showCaption = false,
}: {
  asset: MediaAsset;
  label: string;
  variant?: ProjectVariant | 'achievement';
  ratio?: MediaRatio;
  eager?: boolean;
  showCaption?: boolean;
}) {
  const dimensions = ratio === 'cover'
    ? { width: 1600, height: 1000 }
    : ratio === 'gallery'
      ? { width: 1200, height: 900 }
      : { width: 800, height: 600 };

  return (
    <figure className={`media-frame media-${ratio} media-${variant}`}>
      <div className="media-surface">
        {asset.src ? (
          <Image
            src={asset.src}
            alt={asset.alt}
            width={dimensions.width}
            height={dimensions.height}
            loading={eager ? 'eager' : 'lazy'}
            sizes={ratio === 'compact' ? '120px' : ratio === 'gallery' ? '(max-width: 760px) 100vw, 50vw' : '(max-width: 1023px) 100vw, 34vw'}
          />
        ) : (
          <div className="media-placeholder" role="img" aria-label={asset.alt}>
            <span className="media-code">{label}</span>
            <span className="media-status"><i /> Image coming soon</span>
          </div>
        )}
      </div>
      {showCaption && asset.caption ? (
        <figcaption>
          <span>{asset.caption}</span>
          {asset.credit ? <small>{asset.credit}</small> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
