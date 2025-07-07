'use client';

import { useState } from 'react';
import quotes from '@/data/quotes.js';
import { filterQuotes, getRandomQuotes } from '@/lib/utils';
import QuoteForm from '@/components/quoteForm';

import QuoteCard from '@/components/quoteCard';

export default function HomePage() {
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  const handleFilter = (category, language) => {
    const matches = filterQuotes(quotes, category, language);
    const random = getRandomQuotes(matches, 3);
    setFilteredQuotes(random);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-base-200">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
         Quote Generator
      </h1>

      <QuoteForm onSubmit={handleFilter} />

      {filteredQuotes.length > 0 && (
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {filteredQuotes.map((quote, index) => (
          <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      )}
    </div>
  );
}
