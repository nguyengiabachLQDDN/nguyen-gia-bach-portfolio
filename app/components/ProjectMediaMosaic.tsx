import Image from 'next/image';
import type { MediaAsset } from '../content';

function ProjectImage({ asset, sizes, priority = false }: { asset: MediaAsset & { src: string }; sizes: string; priority?: boolean }) {
  return (
    <figure>
      <div className="project-mosaic-image">
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          preload={priority}
          loading={priority ? undefined : 'lazy'}
          sizes={sizes}
          style={{ objectFit: asset.objectFit ?? 'cover', objectPosition: asset.objectPosition ?? 'center' }}
        />
      </div>
      {asset.caption ? <figcaption>{asset.caption}</figcaption> : null}
    </figure>
  );
}

export default function ProjectMediaMosaic({
  cover,
  gallery,
}: {
  cover: MediaAsset;
  gallery: MediaAsset[];
}) {
  const availableGallery = gallery.filter((asset): asset is MediaAsset & { src: string } => Boolean(asset.src));
  const primary = availableGallery[0] ?? (cover.src ? (cover as MediaAsset & { src: string }) : undefined);
  const supporting = availableGallery.slice(1, 3);

  if (!primary) return null;

  return (
    <div className="project-mosaic" aria-label="eSight project evidence">
      <div className="project-mosaic-primary">
        <ProjectImage asset={primary} sizes="(max-width: 820px) 100vw, 42vw" priority />
      </div>
      {supporting.length ? (
        <div className="project-mosaic-supporting">
          {supporting.map((asset) => (
            <ProjectImage key={asset.src} asset={asset} sizes="(max-width: 700px) 50vw, 21vw" />
          ))}
        </div>
      ) : null}
    </div>
  );
}
