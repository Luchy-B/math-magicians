/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = 'Ra2ZLzomKGTafmaUR6yxaQ==zQIqyYLTuHxSvQJJ';

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=love', {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setQuote(`${json[0].quote} by ${json[0].author}`);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) {
    return (
      <div className="wrap">
        <p className="error">Something went wrong!</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="wrap">
        <div className="spinner">Please wait ...</div>
      </div>
    );
  }

  return (
    <>
      <center>
        <div className="myQuote">
          <p className="my-quote">{quote}</p>
          {/* <p className="my-author">{myAuthor}</p> */}
          {hasError && <p className="my-error">{hasError}</p>}
        </div>
      </center>
    </>
  );
}

export default Quote;
