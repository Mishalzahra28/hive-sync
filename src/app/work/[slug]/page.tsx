import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CaseStudyDetailClient from '@/components/sections/CaseStudyDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

const caseStudiesData = {
  'mcdonalds': {
    client: "McDonald's",
    title: "Global Compliance & Data Management System",
    description: "Developing a robust, real-time compliance tracking system for 38,000+ global locations, ensuring data integrity and regulatory adherence across multiple jurisdictions.",
  },
  'subway': {
    client: "Subway",
    title: "Next-Gen CRM & Franchise Management Portal",
    description: "Reimagining the franchise experience with a data-driven CRM that streamlines operations, boosts loyalty, and provides deep insights into store performance.",
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData[slug as keyof typeof caseStudiesData];

  if (!study) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${study.client} Case Study | ${study.title}`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (!caseStudiesData[slug as keyof typeof caseStudiesData]) {
    notFound();
  }

  return <CaseStudyDetailClient slug={slug} />;
}
