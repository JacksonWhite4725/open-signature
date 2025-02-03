import { MarketingHeader } from '@/components/marketing/Header';
import { MarketingFooter } from '@/components/marketing/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />
      <main className="flex-grow">
        {children}
      </main>
      <MarketingFooter />
    </div>
  );
}