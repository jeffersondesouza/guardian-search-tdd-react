import React, { useState } from "react";

import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

import fetchArticles from "./../../api";

class SearchContainer extends React.Component {
  state = { articles: [] };

  handleSearch = ({ value }) =>
    fetchArticles(value).then(articles => {
      this.setState({
        ...this.state,
        articles
      });
    });

  render() {
    return (
      <section>
        <SearchForm onSearch={this.handleSearch} />
        <SearchResults articles={this.state.articles} />
      </section>
    );
  }
}

export default SearchContainer;
