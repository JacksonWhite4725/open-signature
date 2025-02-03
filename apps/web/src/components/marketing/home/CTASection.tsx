import React from 'react';
import { Github, Star, GitFork, Users } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Community Stats */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              We Hope to Build a Community
            </h2>
            
            <div className="mt-8 grid grid-cols-2 gap-8">
              <GithubStat icon={Star} label="GitHub Stars" value="1" />
              <GithubStat icon={GitFork} label="Forks" value="1" />
              <GithubStat icon={Users} label="Contributors" value="1" />
              <GithubStat icon={Github} label="Commits" value="7ish" />
            </div>
          </div>

          {/* Get Started */}
          <div className="lg:pl-8">
            <div className="rounded-2xl bg-gray-900 p-8 md:p-12">
              <h3 className="text-xl font-semibold text-white">
                Get Started in Minutes
              </h3>
              
              <div className="mt-4 font-mono text-sm">
                <div className="rounded-lg bg-gray-800 p-4">
                  <p className="text-gray-300">
                    <span className="text-green-400">$</span> git clone https://github.com/opensignorg/opensign
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">$</span> cd opensign
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">$</span> pnpm install
                  </p>
                  <p className="text-violet-400">
                    ✨ Installing dependencies...
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <a 
                    href="/docs/quickstart" 
                    className="block rounded-lg bg-violet-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-violet-700"
                  >
                    Read the Quickstart Guide
                  </a>
                  <a 
                    href="https://github.com/opensignorg/opensign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GithubStat({ icon: Icon, label, value }: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-x-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-600/10">
        <Icon className="h-6 w-6 text-violet-600" />
      </div>
      <div>
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}