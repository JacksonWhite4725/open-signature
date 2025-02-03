"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

export function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                OpenSign
              </span>
            </Link>
            
            <div className="hidden ml-10 lg:flex lg:items-center lg:space-x-8">
              <NavLink href="/docs">Documentation</NavLink>
              <NavLink href="/community">Community</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="/login">
              <Button variant="ghost" size="lg" className="text-gray-700 hover:text-gray-900">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
                Start Free
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 top-20 bg-white z-50 px-6 py-8 space-y-6">
              <MobileNavLink href="/docs">Documentation</MobileNavLink>
              <MobileNavLink href="/community">Community</MobileNavLink>
              <MobileNavLink href="/pricing">Pricing</MobileNavLink>
              
              <div className="pt-6 space-y-4">
                <Link href="/login" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" className="block">
                  <Button size="lg" className="w-full bg-violet-600 hover:bg-violet-700">
                    Start Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children, external }: { 
  href: string; 
  children: React.ReactNode;
  external?: boolean;
}) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-x-1"
      {...linkProps}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, external }: { 
  href: string; 
  children: React.ReactNode;
  external?: boolean;
}) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <Link
      href={href}
      className="block text-lg font-medium text-gray-900 hover:text-violet-600 transition-colors"
      {...linkProps}
    >
      {children}
    </Link>
  );
}