'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SubCategoryPage({ params }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate loading delay to test progress bar
    const timer = setTimeout(() => {
      setData({
        title: `Category: ${params.slug}`,
        games: [
          { id: 1, title: 'Game 1', description: 'First game in this category' },
          { id: 2, title: 'Game 2', description: 'Second game in this category' },
          { id: 3, title: 'Game 3', description: 'Third game in this category' },
          { id: 4, title: 'Game 4', description: 'Fourth game in this category' },
          { id: 5, title: 'Game 5', description: 'Fifth game in this category' },
        ]
      });
      setIsLoading(false);
    }, 5000); // 2 second delay to test progress bar

    return () => clearTimeout(timer);
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--brand-active)] mx-auto mb-4"></div>
          <h2 className="text-white text-xl">Loading {params.slug} games...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href={`/${params.locale}`} className="text-[var(--brand-active)] hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mt-4">{data.title}</h1>
          <p className="text-gray-400 mt-2">Discover amazing games in this category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.games.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-white text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-400">{game.description}</p>
              <button className="mt-4 bg-[var(--brand-active)] text-white px-4 py-2 rounded hover:bg-[#5a6bb8] transition-colors">
                Play Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 