import React from 'react';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';

const articles = [
  { webUrl: '/', webTitle: 'materia 1' },
  { webUrl: '/', webTitle: 'materia 2' },
  { webUrl: '/', webTitle: 'materia 3' },
  { webUrl: '/', webTitle: 'materia 4' },
  { webUrl: '/', webTitle: 'materia 5' },
]

const SearchContainer = () => {
  const handleSearch = ({ value }) => {
    console.log('value:', value)

  }

  return (
    <section>
      <SearchForm onSearch={handleSearch} />
      <SearchResults articles={articles} />
    </section>
  );
}

export default SearchContainer;