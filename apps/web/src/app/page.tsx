import { Metadata } from 'next';
import { HeroSection } from '@/components/marketing/home/HeroSection';
import { FeaturesSection } from '@/components/marketing/home/FeaturesSection';
import { CTASection } from '@/components/marketing/home/CTASection';

export const metadata: Metadata = {
  title: 'Secure Digital Document Signing Platform',
  description: 'Sign documents securely online with our enterprise-grade e-signature platform. Streamline your document workflows with secure, legally-binding electronic signatures.',
  openGraph: {
    title: 'Secure Digital Document Signing Platform',
    description: 'Sign documents securely online with our enterprise-grade e-signature platform.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'E-Signature Platform',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}