import Link from 'next/link';

export function MarketingFooter() {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Product</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Add more footer sections as needed */}
                </div>
                <div className="mt-8 border-t pt-8">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} E-Signature Platform. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}