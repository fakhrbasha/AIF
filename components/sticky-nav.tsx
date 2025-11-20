import { StickyBanner } from '@/components/ui/sticky-banner';
import Link from 'next/link';

export function StickyBannerDemo() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-primary">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Select any category, then type anything in the search bar and clear it
          to show all results.{' '}
          <Link
            href="/notice"
            className="transition duration-200 hover:underline"
          >
            Learn more
          </Link>
        </p>
      </StickyBanner>
    </div>
  );
}
