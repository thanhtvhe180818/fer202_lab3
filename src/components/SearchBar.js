import React, { useState, useEffect } from 'react';

const SearchBar = ({ initialKeyword, onSearch }) => {
  const [keyword, setKeyword] = useState(initialKeyword || '');

  useEffect(() => {
    setKeyword(initialKeyword || '');
  }, [initialKeyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Tìm tên sản phẩm..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">Tìm kiếm</button>
    </form>
  );
};

export default SearchBar;