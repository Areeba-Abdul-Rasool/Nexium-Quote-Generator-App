import quotes from '@/data/quotes';
import {filterQuotes ,getRandomQuotes  } from '@/lib/utils';

export default function HomePage() {

  const category = 'motivation';
  const language = 'English';

  const filtered = filterQuotes(quotes, category, language);
  const randomQuotes = getRandomQuotes(filtered, 3);

  console.log('Filtered & Random Quotes:', randomQuotes);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Quote Generator</h1>
      <p className="mt-4">Open the browser console to see filtered + random quotes.</p>
    </main>
  );
}
