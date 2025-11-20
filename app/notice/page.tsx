// pages/notice.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NoticePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-primary dark:text-white flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
          🔔 Important Notice
        </h1>

        <p className="mb-4 text-lg md:text-xl drop-shadow-sm">
          To ensure you have the smoothest and most accurate browsing experience
          on our platform, we kindly recommend following a simple step whenever
          you explore tools or categories on the website:
        </p>

        <div className="bg-white/20 p-4 md:p-6 rounded-lg mb-6 border-l-4 border-yellow-400">
          <p className="text-lg md:text-xl font-semibold">
            Select any category from the list, type anything in the search bar,
            and then clear it.
            <br />
            This will refresh the system and display all available items related
            to your chosen category.
          </p>
        </div>

        <p className="mb-4 text-lg md:text-xl drop-shadow-sm">
          This step helps the platform properly reload the content, especially
          if you’re switching between different categories or browsing multiple
          tools. By doing this, you ensure that the results you see are fully
          updated, complete, and aligned with your current selection.
        </p>

        <p className="text-lg md:text-xl drop-shadow-sm">
          We are continuously improving our website to make navigation faster
          and more enjoyable. Your experience matters to us, and this quick tip
          guarantees that you always get accurate results and easy access to
          everything you need without confusion or missing items.
        </p>

        <p className="mt-6 text-lg md:text-xl italic drop-shadow-sm">
          If you encounter any issues or have suggestions to improve the
          experience further, feel free to reach out—we’re always here to help.
        </p>

        {/* Button to go back to Tools */}
        <div className="mt-8 text-center">
          <Link href="/tools">
            <Button>Back to Tools</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
