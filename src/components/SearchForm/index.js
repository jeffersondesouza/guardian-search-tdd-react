import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [state, setState] = useState({ value: '' });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (state.value) {
      onSearch(state)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure uma matéria"
          value={state.value}
          onChange={handleChange}
        />
      </form>
      <div className="SearchForm__value">
        Search: {state.value}
      </div>

    </div>
  );
}
export default SearchForm;