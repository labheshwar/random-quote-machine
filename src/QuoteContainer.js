import React from 'react';

const QuoteContainer = ({ quote, addNewQuote, color }) => {
    const quoteForTwitter =
      'https://twitter.com/intent/tweet?text=' +
      quote.text.split(' ').join('%20') +
      '%20-' +
      quote.author.split(' ').join('%20');
  return (
    <div id='quote-box'>
      <p id='text' style={{ color: `${color}` }}>
        <i className='fa-solid fa-quote-left'></i>
        {quote.text}
      </p>
      <h2 id='author' style={{ color: `${color}` }}>
        - {quote.author}
      </h2>
      <div className='actions'>
        <a
          href={quoteForTwitter}
          id='tweet-quote'
          target='_top'
          style={{ backgroundColor: `${color}` }}
        >
          <i className='fa-brands fa-twitter'></i>{' '}
        </a>
        <button
          style={{ backgroundColor: `${color}` }}
          id='new-quote'
          className='button'
          onClick={addNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteContainer;
