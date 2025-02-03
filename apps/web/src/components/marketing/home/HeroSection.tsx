import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Github, GitFork, Heart, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
            Open Source Contracts{' '}
            <br></br>
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              For Everyone
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
          OpenSign is the future of E-Signatures. Free, Open-Source, and Built for Everyone. Sign documents effortlessly, contribute to a thriving community, or let us handle the heavy lifting for just 2.5% per transaction.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Link href="/register">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white w-full sm:w-auto px-8 py-6 text-lg">
                Start Signing Free
              </Button>
            </Link>
            <Link 
              href="https://github.com/JacksonWhite4725/open-signature" 
              target="_blank"
              className="inline-flex items-center gap-x-2 text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              <span>Star on GitHub</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <MetricCard 
              icon={Heart}
              metric="100% Free"
              description="Self-host or use our cloud with 2.5% per transaction"
            />
            <MetricCard 
              icon={Zap}
              metric="GNU General Public License"
              description="Free to use, modify, and distribute"
            />
            <MetricCard 
              icon={Github}
              metric="Community Driven"
              description="Join the effort to make this better"
            />
          </div>
        </div>

        {/* Code Preview */}
        <div className="mt-16 relative mx-auto">
          <div className="rounded-xl bg-gray-900 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="text-sm text-gray-400">terminal</div>
            </div>
            <div className="p-4 text-sm font-mono text-gray-300">
              <span className="text-gray-500"># Clone the repository</span><br />
              <span className="text-green-400">$</span> git clone https://github.com/opensignorg/opensign<br />
              <span className="text-gray-500"># Install dependencies</span><br />
              <span className="text-green-400">$</span> pnpm install<br />
              <span className="text-gray-500"># Start development server</span><br />
              <span className="text-green-400">$</span> pnpm dev<br />
              <span className="text-purple-400">✨ OpenSign is running at http://localhost:3000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon: Icon, metric, description }: { 
  icon: any; 
  metric: string; 
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-center">
        <Icon className="h-6 w-6 text-violet-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{metric}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}