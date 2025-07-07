'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function QuoteForm({ onSubmit }) {
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('English');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.trim()) return;
    onSubmit(category, language);
  };

  return (
    <motion.div  
    //animated div & fades in when the form load 
      className="w-full max-w-xl mx-auto p-6 rounded-2xl shadow-xl bg-base-100 border border-base-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-2xl font-bold text-center text-primary"> Find Your Quote </h2>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-base">Category</Label>
          <Input
            id="category"
            placeholder="e.g., motivation, wisdom, love..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="language" className="text-base">Language</Label>
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
            className="btn btn-primary w-full font-semibold text-lg"
          >
            Show Quotes 
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
