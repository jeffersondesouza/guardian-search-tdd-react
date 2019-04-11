import React, { useState } from 'react';

import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';

import fetchArticles from './../../api';

const articles = [
  { webUrl: '/', webTitle: 'materia 1' },
  { webUrl: '/', webTitle: 'materia 2' },
  { webUrl: '/', webTitle: 'materia 3' },
  { webUrl: '/', webTitle: 'materia 4' },
  { webUrl: '/', webTitle: 'materia 5' },
]

const SearchContainer = () => {

  const [state, setState] = useState({ articles: [] })

  const handleSearch = ({ value }) => {

    fetchArticles(value)
      .then(data => data.response.results)
      .then(articles => {
        console.log('articles:', articles)
        setState({
          ...state,
          articles
        });
      })

  }

  return (
    <section>
      <SearchForm onSearch={handleSearch} />
      <SearchResults articles={state.articles} />
    </section>
  );
}

export default SearchContainer;