import React from 'react';

const Article = ({ id, webUrl, webTitle }) => (
  <li key={id}>
    <a href={webUrl} className="App-link" target="blank">{webTitle}</a>
  </li>
);

export default Article;