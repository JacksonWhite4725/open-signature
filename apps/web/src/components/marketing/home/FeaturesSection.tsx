import React from 'react';
import { 
  Code2, Shield, Rocket, 
  Users, Workflow, Store,
  Wand2, Database, GitBranch
} from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Developers, Designed for Everyone
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            OpenSign combines enterprise-grade features with the flexibility of open source.
            Deploy anywhere, customize everything, and join our thriving community.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={Code2}
            title="100% Open Source"
            description="GNU licensed and built with modern tech stack. NextJS, Node.js, and TypeScript. Fork, modify, and contribute back."
          />
          <Feature
            icon={Shield}
            title="Enterprise Security"
            description="Bank-grade encryption, audit logs, and compliance features. Self-host for complete data control."
          />
          <Feature
            icon={Database}
            title="Your Infrastructure"
            description="Deploy on your servers or use our hosted version. Docker containers make deployment a breeze."
          />
          <Feature
            icon={Workflow}
            title="Flexible Workflows"
            description="Custom signing flows, webhook integrations, and API access. Automate your entire document process."
          />
          <Feature
            icon={Users}
            title="Active Community"
            description="Join in building the future of document signing. Regular releases and quick issue resolution."
          />
          <Feature
            icon={Store}
            title="Fair Pricing"
            description="Self-host for free or use our cloud platform. Pay only 2.5% per transaction, with no hidden fees."
          />
          <Feature
            icon={Wand2}
            title="White Label Ready"
            description="Customize the interface, add your branding, and embed signing flows in your application."
          />
          <Feature
            icon={Rocket}
            title="Quick Integration"
            description="Comprehensive API documentation, SDK packages, and ready-to-use code examples."
          />
          <Feature
            icon={GitBranch}
            title="Version Control"
            description="Track changes, manage templates, and collaborate with team members using Git-like versioning."
          />
        </div>

        <div className="mt-20">
          <div className="rounded-2xl bg-violet-50 p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-violet-900">
                Join Our Open Source Community
              </h3>
              <p className="mt-4 text-lg text-violet-700">
                Contribute to OpenSign and help shape the future of document signing
              </p>
              <div className="mt-8 flex justify-center gap-x-6">
                <a 
                  href="https://github.com/JacksonWhite4725/open-signature" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  View on GitHub
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
                  target="_blank"
                  className="rounded-lg bg-violet-100 px-6 py-3 text-sm font-semibold text-violet-600 hover:bg-violet-200"
                >
                  Contribution Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-violet-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}