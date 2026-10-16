import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { BrandPanel } from "@/components/site/BrandPanel";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";
import { KioskMockup } from "@/components/site/KioskMockup";
import { PRODUCT_SCREEN } from "@/content/screens";
import type { Product } from "@/content/products";

// Wide screens read best full-width under the text; monitors and laptops sit
// beside it; phones and handhelds sit on a warm panel.
const STACKED = new Set(["kds", "tables", "inventory"]);
const PORTRAIT = new Set(["captain", "qr-ordering", "kiosk"]);
/** Products shown with a coded illustration rather than a screen capture. */
const ILLUSTRATED = new Set(["kiosk"]);

function HeroVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "tables":
      return (
        <div className="relative pb-[10%] pr-[12%]">
          <DeviceFrame screen="tables" />
          <div className="absolute bottom-0 right-0 w-[19%] min-w-[6rem]">
            <DeviceFrame screen="table-detail" className="max-w-none" />
          </div>
        </div>
      );
    case "analytics":
      return (
        <div className="relative pb-[6%] pr-[18%]">
          <DeviceFrame screen="reports" />
          <div className="absolute bottom-0 right-0 w-[25%] min-w-[6rem]">
            <DeviceFrame screen="owner" className="max-w-none" />
          </div>
        </div>
      );
    case "captain":
      return (
        <div className="grid grid-cols-2 items-end gap-4 sm:gap-8">
          <DeviceFrame screen="captain" />
          <DeviceFrame screen="captain-notes" className="mb-8" />
        </div>
      );
    case "kiosk":
      return <KioskMockup />;
    default:
      return <DeviceFrame screen={PRODUCT_SCREEN[slug] ?? "pos"} />;
  }
}

export function ProductHero({ product }: { product: Product }) {
  // Some hero descriptions open with the same sentence used as the headline.
  const lead = product.heroDescription.startsWith(product.shortDescription)
    ? product.heroDescription.slice(product.shortDescription.length).trim()
    : product.heroDescription;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Products", href: "/features" }, { label: product.name }];
  const actions = (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link href="/book-a-demo" className="btn btn-primary">
        Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      <a href="#capabilities" className="btn btn-secondary">
        What it does
      </a>
    </div>
  );
  const caption = (
    <ScreenCaption className="mt-6">
      {ILLUSTRATED.has(product.slug)
        ? `Illustration of the ${product.name.toLowerCase()} screen, with a sample menu.`
        : `${product.name}, shown with sample restaurant data.`}
    </ScreenCaption>
  );

  if (STACKED.has(product.slug)) {
    return (
      <section className="overflow-hidden border-b border-line bg-ivory">
        <div className="shell pb-16 pt-10 sm:pt-14">
          <Breadcrumbs items={crumbs} className="mb-8" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow">{product.name}</p>
              <h1 className="display-xl mt-4">{product.shortDescription}</h1>
            </div>
            <div>
              <p className="lead">{lead}</p>
              {actions}
            </div>
          </div>
          <figure className="mx-auto mt-10 max-w-5xl">
            <HeroVisual slug={product.slug} />
            {caption}
          </figure>
        </div>
      </section>
    );
  }

  const portrait = PORTRAIT.has(product.slug);
  return (
    <section className="overflow-hidden border-b border-line bg-ivory">
      <div className="shell pb-16 pt-10 sm:pt-14 lg:pb-20">
        <Breadcrumbs items={crumbs} className="mb-8" />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">{product.name}</p>
            <h1 className="display-xl mt-4 lg:text-[3.3rem] xl:text-[4.15rem]">{product.shortDescription}</h1>
            <p className="lead mt-6">{lead}</p>
            {actions}
          </div>
          <figure>
            {portrait ? (
              <BrandPanel>
                <HeroVisual slug={product.slug} />
              </BrandPanel>
            ) : (
              <HeroVisual slug={product.slug} />
            )}
            {caption}
          </figure>
        </div>
      </div>
    </section>
  );
}
