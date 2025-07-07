'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clipboard, Heart, Volume2 , Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuoteCard({ quote }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    navigator.clipboard.writeText(quote.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  const handleSpeak = () => {
    const speakText = new SpeechSynthesisUtterance(quote.text);
    speakText.lang = quote.language.toLowerCase() === 'urdu' ? 'ur-PK' : 'en-US';
    speechSynthesis.speak(speakText);
  };

  return (
    <motion.div
      className="bg-base-100 border border-base-300 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", type: "spring" }}
    >
      <p
        className={`text-lg font-medium ${
          quote.language.toLowerCase() === 'urdu' ? 'text-right font-urdu' : '' }`} >
        {quote.text}
      </p>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground space-x-2">
          <span className="badge badge-outline">Category :</span>
              <span>{quote.category}</span>
        </div>

        <div className="flex space-x-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setLiked(!liked)}
            className={liked ? 'text-red-500' : 'text-muted-foreground'}
            title="Like"
          >
            <Heart fill={liked ? 'currentColor' : 'none'} />
          </Button>

          <Button size="icon" variant="ghost" onClick={handleCopy} title="Copy">
            {copied ? (
                 <Check className="text-green-500" />
                 ) : ( <Clipboard /> )}
            </Button>

          <Button size="icon" variant="ghost" onClick={handleSpeak} title="Speak">
            <Volume2 />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
