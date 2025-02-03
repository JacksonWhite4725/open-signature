import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTASection() {
    return (
        <section className="py-20 bg-blue-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to streamline your document workflows?
                    </h2>
                    <div className="mt-10">
                        <Link href="/register">
                            <Button size="lg" variant="secondary">
                                Start Your Free Trial
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}