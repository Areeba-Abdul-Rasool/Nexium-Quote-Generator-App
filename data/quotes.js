const quotes = [
  {
    id: 1,
    text: "The measure of intelligence is the ability to adapt.",
    category: "motivation",
    language: "English"
  },
  {
    id: 2,
    text: "عقل کی پیمائش تبدیلی کی صلاحیت ہے۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 3,
    text: "Wise is the person who thinks of the outcome before acting.",
    category: "wisdom",
    language: "English"
  },
  {
    id: 4,
    text: "عقلمند وہ ہے جو عمل سے پہلے انجام سوچتا ہے۔",
    category: "wisdom",
    language: "Urdu"
  },
  {
    id: 5,
    text: "Work hard in silence; let your success make the noise.",
    category: "motivation",
    language: "English"
  },
  {
    id: 6,
    text: "خاموشی سے محنت کرو، اور کامیابی اپنا شور مچا دے گی۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 7,
    text: "Adversity makes you wise, if not wealthy.",
    category: "motivation",
    language: "English"
  },
  {
    id: 8,
    text: "مصیبت آپ کو امیر نہیں بناتی، مگر عقلمند ضرور۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 9,
    text: "Elevate yourself so high that destiny consults you.",
    category: "confidence",
    language: "English"
  },
  {
    id: 10,
    text: "خودی کو اتنا بلند کرو کہ تقدیر تم سے پوچھے۔",
    category: "confidence",
    language: "Urdu"
  },
  {
    id: 11,
    text: "Success usually comes to those who are too busy to be looking for it.",
    category: "motivation",
    language: "English"
  },
  {
    id: 12,
    text: "کامیابی عموماً اُن لوگوں کے پاس آتی ہے جو اسے تلاش کرنے میں مصروف ہی نہیں۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 13,
    text: "Don’t watch the clock; do what it does. Keep going.",
    category: "motivation",
    language: "English"
  },
  {
    id: 14,
    text: "گھڑی کی طرف مت دیکھو؛ جو وہ کرتی ہے، تم بھی کرو—رکتے ہی رہو۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 15,
    text: "Your limitation—it’s only your imagination.",
    category: "confidence",
    language: "English"
  },
  {
    id: 16,
    text: "تمہاری حد صرف تمہاری تخیل ہے۔",
    category: "confidence",
    language: "Urdu"
  },
  {
    id: 17,
    text: "Push yourself, because no one else is going to do it for you.",
    category: "motivation",
    language: "English"
  },
  {
    id: 18,
    text: "اپنے آپ کو دھکیلاؤ، کیونکہ کوئی اور تمہارے لیے ایسا نہیں کرے گا۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 19,
    text: "Great things never come from comfort zones.",
    category: "motivation",
    language: "English"
  },
  {
    id: 20,
    text: "عظیم چیزیں کبھی سکون کے دائرے سے نہیں نکلتی۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 21,
    text: "Dream it. Wish it. Do it.",
    category: "motivation",
    language: "English"
  },
  {
    id: 22,
    text: "خواب دیکھو۔ خواہش کرو۔ عمل کرو۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 23,
    text: "Stay positive, work hard, make it happen.",
    category: "motivation",
    language: "English"
  },
  {
    id: 24,
    text: "مثبت رہو، محنت کرو، اور کامیاب کرو۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 25,
    text: "Success doesn’t just find you; you have to go out and get it.",
    category: "motivation",
    language: "English"
  },
  {
    id: 26,
    text: "کامیابی خود نہیں ملتی؛ تمہیں اسے حاصل کرنے کے لیے جانا پڑتا ہے۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 27,
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    category: "motivation",
    language: "English"
  },
  {
    id: 28,
    text: "جو چیز کے لیے زیادہ محنت کرو گے، اسے حاصل کرنے پر تمہیں اس سے بھی زیادہ خوشی ملے گی۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 29,
    text: "Don’t stop when you’re tired. Stop when you’re done.",
    category: "motivation",
    language: "English"
  },
  {
    id: 30,
    text: "تھکن پر رکنا نہیں—جب مکمل کر لو، تب رکنا۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 31,
    text: "Wake up with determination; go to bed with satisfaction.",
    category: "motivation",
    language: "English"
  },
  {
    id: 32,
    text: "عزم کے ساتھ اٹھو؛ تسکین کے ساتھ سوؤ۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 33,
    text: "Don’t limit your challenges. Challenge your limits.",
    category: "confidence",
    language: "English"
  },
  {
    id: 34,
    text: "اپنی مشکلات کو محدود نہ کرو، اپنی حدود کو چیلنج کرو۔",
    category: "confidence",
    language: "Urdu"
  },
  {
    id: 35,
    text: "Doubt kills more dreams than failure ever will.",
    category: "motivation",
    language: "English"
  },
  {
    id: 36,
    text: "شک وہ خواب بھی مار دیتا ہے جو ناکامی نہیں مار سکتی۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 37,
    text: "Discipline is the bridge between goals and accomplishment.",
    category: "motivation",
    language: "English"
  },
  {
    id: 38,
    text: "ضبط نفس وہ پل ہے جو مقصد کو کامیابی سے جوڑتا ہے۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 39,
    text: "Everything you’ve ever wanted is on the other side of fear.",
    category: "confidence",
    language: "English"
  },
  {
    id: 40,
    text: "ہر وہ چیز جس کی تمہیں خواہش ہے، خوف کے اُس پار ہے۔",
    category: "confidence",
    language: "Urdu"
  },
  {
    id: 41,
    text: "Believe you can and you’re halfway there.",
    category: "confidence",
    language: "English"
  },
  {
    id: 42,
    text: "یقین کرو کہ تم کر سکتے ہو، تم آدھا راستہ طے کر چکے ہو۔",
    category: "confidence",
    language: "Urdu"
  },
  {
    id: 43,
    text: "If it doesn’t challenge you, it won’t change you.",
    category: "motivation",
    language: "English"
  },
  {
    id: 44,
    text: "اگر یہ تمہیں چیلنج نہیں کرتا، تو یہ تمہیں بدل بھی نہیں سکتا۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 45,
    text: "The only way to do great work is to love what you do.",
    category: "motivation",
    language: "English"
  },
  {
    id: 46,
    text: "عظیم کام کرنے کا واحد طریقہ یہ ہے کہ تم اپنے کام سے محبت کرو۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 47,
    text: "Act as if what you do makes a difference. It does.",
    category: "confidence",
    language: "English"
  },
  {
    id: 48,
    text: "یوں عمل کرو جیسے تمہارا عمل فرق ڈالتا ہو—کیونکہ وہ واقعی ڈالتا ہے۔",
    category: "confidence",
    language: "Urdu"
  },
  {
    id: 49,
    text: "It always seems impossible until it’s done.",
    category: "motivation",
    language: "English"
  },
  {
    id: 50,
    text: "یہ ہمیشہ ناممکن لگتا ہے جب تک کہ مکمل نہ ہو جائے۔",
    category: "motivation",
    language: "Urdu"
  },
  {
    id: 51,
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    category: "motivation",
    language: "English"
  },
  {
    id: 52,
    text: "اپنا رخ ہمیشہ روشنی کی طرف رکھو، سائے تمہارے پیچھے رہیں گے۔",
    category: "motivation",
    language: "Urdu"
  }
];

export default quotes;
