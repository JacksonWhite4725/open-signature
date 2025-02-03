import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function MarketingHeader() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">E-Signature</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}