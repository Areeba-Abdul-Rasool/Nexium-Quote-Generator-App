'use client';

import { useState} from 'react';
import { motion} from 'framer-motion';
import { Input} from '@/components/ui/input';
import { Button} from '@/components/ui/button';
import { Label} from '@/components/ui/label';

export default function QuoteForm({ onSubmit }) {
  const [category,setCategory] = useState('');
  const [language,setLanguage] = useState('English');
  const [error,setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.trim()) {
      setError('Please enter a category before continuing.');
      return;
    }
    setError('');
    onSubmit(category, language);
  };

  return (
    <motion.div
        //animated div & fades in when the form load 
      className="w-full max-w-xl mx-auto p-6 rounded-2xl shadow-xl bg-white border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-3xl font-bold text-center text-neutral-700 heading-font"> Find Your Quote</h2>

        <div className="space-y-2">
          <Label htmlFor="category" className="!text-lg font-semibold">Category</Label>
          <Input
            id="category"
            placeholder="e.g., motivation, confidence , love..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input input-bordered w-full"
          />
          {error && (
            <p className="text-sm text-red-500 mt-1">{error}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="language" className="!text-lg font-semibold">Language</Label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="select select-bordered w-full"
          >
            <option>English</option>
            <option>Urdu</option>
          </select>
        </div>

        <div className="text-center pt-2">
          <Button
            type="submit"
            className="btn bg-indigo-600 text-white w-full text-lg hover:bg-indigo-700"
          >
            Show Quotes
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
