import { LockIcon, ActivityIcon, ShieldCheckIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: React.ComponentType<{ className: string }>;
}

const features: Feature[] = [
    {
        title: 'Secure Signing',
        description: 'Enterprise-grade security with advanced encryption and authentication.',
        icon: LockIcon
    },
    {
        title: 'Real-time Tracking',
        description: 'Monitor document status and receive instant notifications.',
        icon: ActivityIcon
    },
    {
        title: 'Compliance Ready',
        description: 'Meet legal requirements with audit trails and compliance features.',
        icon: ShieldCheckIcon
    }
];

export function FeaturesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="relative">
                            <dt>
                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <p className="ml-16 text-lg font-semibold leading-8 text-gray-900">
                                    {feature.title}
                                </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-600">
                                {feature.description}
                            </dd>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}