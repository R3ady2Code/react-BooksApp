import React from 'react';

const SearchContainer = ({ setSearchInput, setCategory, setSortBy, searchForBooks }) => {
  const sorts = ['Relevance', 'Newest'];
  const categories = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry'];

  return (
    <div className="searchBlock">
      <div className="container container__search">
        <div className="container__searchInput">
          <input
            type="text"
            placeholder="Search for books..."
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                searchForBooks();
              }
            }}
          />
          <button className="btn" onClick={searchForBooks}>
            Search
          </button>
        </div>
        <div className="container__searchParams">
          <div id="categories">
            <label>Category: </label>
            <select onChange={(e) => setCategory(e.target.value)}>
              {categories.map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div id="sortBy">
            <label>Sort by: </label>
            <select onChange={(e) => setSortBy(e.target.value)}>
              {sorts.map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
