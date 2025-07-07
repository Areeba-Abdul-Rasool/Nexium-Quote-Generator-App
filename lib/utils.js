//classname combiner for ShadCN UI
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}


export function filterQuotes(quotes, category, language){
    const Category = category.trim().toLowerCase();
    const Language = language.trim().toLowerCase();

    // console.log("QUOTES TYPE:", typeof quotes);
    // console.log("IS ARRAY:", Array.isArray(quotes));


    return quotes.filter( (quote) => {
        const quoteCategory = quote.category.toLowerCase();
        const quoteLanguage = quote.language.toLowerCase();

        return (
            quoteLanguage === Language && quoteCategory.includes(Category)
        )
    }

    )
}

export function getRandomQuotes (quotes, count=3){
    const shuffledArray = [...quotes];  //shallow copy of orignal array

    for (let i = shuffledArray.length-1 ; i >0 ; i--){
        const j = Math.floor(Math.random() * (i+1));  // random j between 0 and i
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

      return shuffledArray.slice(0, count);
}