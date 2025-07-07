'use client';
 
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clipboard, Heart, Volume2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuoteCard({ quote }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(quote.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    const speakText = new SpeechSynthesisUtterance(quote.text);
    const voices = window.speechSynthesis.getVoices();

    const urduVoice = voices.find(
      (voice) =>
        voice.lang.toLowerCase().includes('ur') ||
        voice.name.toLowerCase().includes('urdu')
    );

    if (quote.language.toLowerCase() === 'urdu' && urduVoice) {
      speakText.voice = urduVoice;
      speakText.lang = urduVoice.lang;
    } else if (quote.language.toLowerCase() === 'urdu' && !urduVoice) {
      alert('⚠️ Sorry, your browser does not support Urdu speech.');
      return;
    } else {
      speakText.lang = 'en-US';
    }

    speechSynthesis.speak(speakText);
  };

  return (
    <motion.div
      className="bg-white border border-gray-300 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', type: 'spring' }}
    >
      <p className={`text-lg font-medium ${quote.language.toLowerCase() === 'urdu' ? 'text-right font-urdu' : ''}`}>
        “{quote.text}”
      </p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="badge badge-outline badge-neutral">{quote.category}</span>
          <span className="badge badge-ghost">{quote.language}</span>
        </div>

        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setLiked(!liked)}
            className={`hover:scale-110 transition ${liked ? 'text-red-500' : 'text-gray-400'}`}
            title="Like"
          >
            <Heart fill={liked ? 'currentColor' : 'none'} />
          </Button>

          <Button size="icon" variant="ghost" onClick={handleCopy} title="Copy">
            {copied ? <Check className="text-green-500" /> : <Clipboard />}
          </Button>

          <Button size="icon" variant="ghost" onClick={handleSpeak} title="Speak">
            <Volume2 />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
