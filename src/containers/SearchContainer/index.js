import React, { useState } from "react";

import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

import fetchArticles from "./../../api";

const SearchContainer = () => {
  const [state, setState] = useState({ articles: [] });

  const handleSearch = ({ value }) =>
    fetchArticles(value).then(articles => {
      setState({
        ...state,
        articles
      });
    });

  return (
    <section>
      <SearchForm onSearch={handleSearch} />
      <SearchResults articles={state.articles} />
    </section>
  );
};

export default SearchContainer;
