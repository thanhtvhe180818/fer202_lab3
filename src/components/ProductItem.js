import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString('vi-VN')}đ</td>
      <td>
        <Link to={`/products/${product.id}`} className="view-link">
          [ Chi tiết ]
        </Link>
      </td>
    </tr>
  );
};

export default ProductItem;