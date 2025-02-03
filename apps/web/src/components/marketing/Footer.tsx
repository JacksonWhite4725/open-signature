import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Heart } from 'lucide-react';

export function MarketingFooter() {
  const navigation = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Security', href: '/security' },
      { name: 'Enterprise', href: '/enterprise' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Changelog', href: '/changelog' },
    ],
    developers: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/docs/api' },
      { name: 'SDK & Tools', href: '/docs/sdk' },
      { name: 'Examples', href: '/docs/examples' },
      { name: 'Self Hosting', href: '/docs/self-hosting' },
    ],
    community: [
      { name: 'GitHub', href: 'https://github.com/opensignorg/opensign' },
      { name: 'Twitter', href: 'https://twitter.com/opensignorg' },
      { name: 'Contributing', href: '/docs/contributing' },
      { name: 'Code of Conduct', href: '/community/code-of-conduct' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'License', href: 'https://github.com/opensignorg/opensign/blob/main/LICENSE' },
      { name: 'Security', href: '/security' },
      { name: 'Status', href: '/status' },
    ],
  };

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  OpenSign
                </span>
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <span>by the community</span>
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Open source document signing platform. Free for everyone, forever.
                MIT Licensed.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-6">
              <a href="https://github.com/opensignorg/opensign" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/opensignorg" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Developers</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.developers.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Community</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.community.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-sm leading-6 text-gray-600">
              © {new Date().getFullYear()} OpenSign. Open source, forever free.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}