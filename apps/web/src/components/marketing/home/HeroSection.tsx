import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Secure Document Signing Made Simple
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sign documents securely, track their status in real-time, and manage your entire document workflow in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}