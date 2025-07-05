const quotes = [
  {
    "text": "The measure of intelligence is the ability to adapt.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "عقل کی پیمائش تبدیلی کی صلاحیت ہے۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Wise is the person who thinks of the outcome before acting.",
    "category": "wisdom",
    "language": "English"
  },
  {
    "text": "عقلمند وہ ہے جو عمل سے پہلے انجام سوچتا ہے۔",
    "category": "wisdom",
    "language": "Urdu"
  },
  {
    "text": "Work hard in silence; let your success make the noise.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "خاموشی سے محنت کرو، اور کامیابی اپنا شور مچا دے گی۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Adversity makes you wise, if not wealthy.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "مصیبت آپ کو امیر نہیں بناتی، مگر عقلمند ضرور۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Elevate yourself so high that destiny consults you.",
    "category": "confidence",
    "language": "English"
  },
  {
    "text": "خودی کو اتنا بلند کرو کہ تقدیر تم سے پوچھے۔",
    "category": "confidence",
    "language": "Urdu"
  },
  {
    "text": "Success usually comes to those who are too busy to be looking for it.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "کامیابی عموماً اُن لوگوں کے پاس آتی ہے جو اسے تلاش کرنے میں مصروف ہی نہیں۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Don’t watch the clock; do what it does. Keep going.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "گھڑی کی طرف مت دیکھو؛ جو وہ کرتی ہے، تم بھی کرو—رکتے ہی رہو۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Your limitation—it’s only your imagination.",
    "category": "confidence",
    "language": "English"
  },
  {
    "text": "تمہاری حد صرف تمہاری تخیل ہے۔",
    "category": "confidence",
    "language": "Urdu"
  },
  {
    "text": "Push yourself, because no one else is going to do it for you.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "اپنے آپ کو دھکیلاؤ، کیونکہ کوئی اور تمہارے لیے ایسا نہیں کرے گا۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Great things never come from comfort zones.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "عظیم چیزیں کبھی سکون کے دائرے سے نہیں نکلتی۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Dream it. Wish it. Do it.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "خواب دیکھو۔ خواہش کرو۔ عمل کرو۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Stay positive, work hard, make it happen.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "مثبت رہو، محنت کرو، اور کامیاب کرو۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Success doesn’t just find you; you have to go out and get it.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "کامیابی خود نہیں ملتی؛ تمہیں اسے حاصل کرنے کے لیے جانا پڑتا ہے۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "The harder you work for something, the greater you’ll feel when you achieve it.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "جو چیز کے لیے زیادہ محنت کرو گے، اسے حاصل کرنے پر تمہیں اس سے بھی زیادہ خوشی ملے گی۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Don’t stop when you’re tired. Stop when you’re done.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "تھکن پر رکنا نہیں—جب مکمل کر لو، تب رکنا۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Wake up with determination; go to bed with satisfaction.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "عزم کے ساتھ اٹھو؛ تسکین کے ساتھ سوؤ۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Don’t limit your challenges. Challenge your limits.",
    "category": "confidence",
    "language": "English"
  },
  {
    "text": "اپنی مشکلات کو محدود نہ کرو، اپنی حدود کو چیلنج کرو۔",
    "category": "confidence",
    "language": "Urdu"
  },
  {
    "text": "Doubt kills more dreams than failure ever will.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "شک وہ خواب بھی مار دیتا ہے جو ناکامی نہیں مار سکتی۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Discipline is the bridge between goals and accomplishment.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "ضبط نفس وہ پل ہے جو مقصد کو کامیابی سے جوڑتا ہے۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Everything you’ve ever wanted is on the other side of fear.",
    "category": "confidence",
    "language": "English"
  },
  {
    "text": "ہر وہ چیز جس کی تمہیں خواہش ہے، خوف کے اُس پار ہے۔",
    "category": "confidence",
    "language": "Urdu"
  },
  {
    "text": "Believe you can and you’re halfway there.",
    "category": "confidence",
    "language": "English"
  },
  {
    "text": "یقین کرو کہ تم کر سکتے ہو، تم آدھا راستہ طے کر چکے ہو۔",
    "category": "confidence",
    "language": "Urdu"
  },
  {
    "text": "If it doesn’t challenge you, it won’t change you.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "اگر یہ تمہیں چیلنج نہیں کرتا، تو یہ تمہیں بدل بھی نہیں سکتا۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "The only way to do great work is to love what you do.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "عظیم کام کرنے کا واحد طریقہ یہ ہے کہ تم اپنے کام سے محبت کرو۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Act as if what you do makes a difference. It does.",
    "category": "confidence",
    "language": "English"
  },
  {
    "text": "یوں عمل کرو جیسے تمہارا عمل فرق ڈالتا ہو—کیونکہ وہ واقعی ڈالتا ہے۔",
    "category": "confidence",
    "language": "Urdu"
  },
  {
    "text": "It always seems impossible until it’s done.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "یہ ہمیشہ ناممکن لگتا ہے جب تک کہ مکمل نہ ہو جائے۔",
    "category": "motivation",
    "language": "Urdu"
  },
  {
    "text": "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "category": "motivation",
    "language": "English"
  },
  {
    "text": "اپنا رخ ہمیشہ روشنی کی طرف رکھو، سائے تمہارے پیچھے رہیں گے۔",
    "category": "motivation",
    "language": "Urdu"
  }
];

export default quotes;
