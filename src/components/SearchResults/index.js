import React from 'react';
import Article from './Article';

const SearchResults = ({ articles = [] }) => (
  <ul>
    {articles.map(article => <Article key={article.id} {...article} />)}
  </ul>
);

export default SearchResults;