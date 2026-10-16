// Brand assets, generated from the English Jamanvar logo by
// scripts/prepare-logo.mjs. Re-run that script if the source logo changes.

const DIR = "/images/jamanvar/brand";

export const LOGO = {
  alt: "Jamanvar by Kelviontech",
  /** Header and footer size. */
  small: { src: `${DIR}/logo-en-480.webp`, width: 480, height: 245 },
  /** Large placements such as the About page. */
  large: { src: `${DIR}/logo-en-1200.webp`, width: 1200, height: 611 },
  /** The steaming-cloche mark on its own, for avatars and small badges. */
  mark: { src: `${DIR}/mark.png`, width: 256, height: 256 },
  /** Full-resolution transparent PNG, used in structured data. */
  master: `${DIR}/logo-en.png`,
} as const;

/** Default social share image (1200×630), used by every page. */
export const OG_IMAGE = {
  url: `${DIR}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Jamanvar by Kelviontech",
};
