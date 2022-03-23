import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  //
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <div className="ui category search">
        <i className="big youtube icon"></i>
        <form onSubmit={onSubmit} className="ui icon input">
          <input
            className="prompt"
            type="text"
            value={term}
            onChange={onInputChange}
          />
          <i className="search icon"></i>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
