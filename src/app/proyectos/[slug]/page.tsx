import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectGallerySection from "@/components/project/ProjectGallerySection";
import PriceSection from "@/components/project/PriceSection";
import AmenitiesServices from "@/components/project/AmenitiesServices";
import LocationBlock from "@/components/project/LocationBlock";
import ProjectFaqCta from "@/components/project/ProjectFaqCta";
import ViewTracker from "@/components/shared/ViewTracker";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.name} | ${project.locationLabel}`;
  const description = project.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: project.heroImage, width: 1600, height: 900 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <ViewTracker event="project_view" payload={{ project: project.slug }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: project.name,
            description: project.shortDescription,
            image: project.gallery.map(
              (g) => `https://buenaventurapatulul.com${g}`
            ),
            offers: project.priceIsFrom
              ? {
                  "@type": "Offer",
                  priceCurrency: "GTQ",
                  price: project.priceFromDisplay.replace(/[^0-9]/g, ""),
                  availability: "https://schema.org/InStock",
                }
              : undefined,
          }),
        }}
      />
      <ProjectHero project={project} />
      <ProjectGallerySection project={project} />
      <PriceSection project={project} />
      <AmenitiesServices project={project} />
      <LocationBlock project={project} />
      <ProjectFaqCta project={project} />
    </>
  );
}
