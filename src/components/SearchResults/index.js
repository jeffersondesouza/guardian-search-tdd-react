import React from 'react';

const SearchResults = ({ articles = [] }) => (
  <ul>
    {
      articles.map((article, i) => <li>
        <a href={article.webUrl} className="App-link">{article.webTitle}</a>
      </li>
      )
    }
  </ul>
);

export default SearchResults;