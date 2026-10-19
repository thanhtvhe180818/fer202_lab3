import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 3;

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || 'All';
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesKeyword = item.name
        .toLowerCase()
        .includes(keyword.toLowerCase().trim());

      const matchesCategory =
        category === 'All' || item.category.toLowerCase() === category.toLowerCase();

      return matchesKeyword && matchesCategory;
    });
  }, [keyword, category]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  const validPage = Math.min(currentPage, totalPages);

  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSearch = (newKeyword) => {
    const params = new URLSearchParams(searchParams);
    if (newKeyword) {
      params.set('keyword', newKeyword);
    } else {
      params.delete('keyword');
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  const handleCategoryChange = (newCategory) => {
    const params = new URLSearchParams(searchParams);
    if (newCategory && newCategory !== 'All') {
      params.set('category', newCategory);
    } else {
      params.delete('category');
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
  };

  return (
    <div className="product-list-page">
      <div className="filter-controls">
        <SearchBar initialKeyword={keyword} onSearch={handleSearch} />
        <CategoryFilter
          selectedCategory={category}
          onSelectCategory={handleCategoryChange}
        />
      </div>

      <div className="summary-info">
        <strong>Tổng: {totalItems}</strong> | Trang: {validPage}/{totalPages}
      </div>

      <Pagination
        currentPage={validPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {currentProducts.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((prod) => (
              <ProductItem key={prod.id} product={prod} />
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ marginTop: '15px' }}>Không tìm thấy sản phẩm phù hợp.</p>
      )}
    </div>
  );
};

export default ProductList;