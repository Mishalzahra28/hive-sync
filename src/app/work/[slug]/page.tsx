import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CaseStudyDetailClient from '@/components/sections/CaseStudyDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

const caseStudiesData = {
  'taskhorse': {
    client: "TaskHorse",
    title: "On-Demand Service Marketplace Platform",
    description: "Building a scalable, real-time service marketplace connecting customers with verified service professionals across multiple categories through seamless booking, payments, and live tracking.",
  },
  'hungerrush': {
    client: "HungerRush",
    title: "POS & Restaurant Management Ecosystem",
    description: "An all-in-one restaurant commerce and operations platform. We engineered the operational engine 'Full Rails' and the automated marketing suite 'HungerRush 360'.",
  },
  'flowpilot': {
    client: "FlowPilot AI",
    title: "SaaS Platform for Workflow Automation",
    description: "A modern SaaS platform focused on workflow automation, subscription management, analytics, and seamless collaboration for growing businesses.",
  }
}

import getMetadata from '@/config/app';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData[slug as keyof typeof caseStudiesData];

  if (!study) {
    return getMetadata({
      title: 'Project Not Found',
    }, `/work/${slug}`);
  }

  return getMetadata({
    title: `${study.client} | ${study.title}`,
    description: study.description,
    openGraph: {
      images: [`/case-${slug}.png`], // Assuming images follow this pattern
    },
  }, `/work/${slug}`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (!caseStudiesData[slug as keyof typeof caseStudiesData]) {
    notFound();
  }

  return <CaseStudyDetailClient slug={slug} />;
}
