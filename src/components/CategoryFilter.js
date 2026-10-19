import React from 'react';

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <label htmlFor="category-select">Danh mục: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="All">Tất cả danh mục</option>
        <option value="Điện thoại">Điện thoại</option>
        <option value="Laptop">Laptop</option>
        <option value="Máy tính bảng">Máy tính bảng</option>
      </select>
    </div>
  );
};

export default CategoryFilter;