import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="detail-container">
        <h2>Sản phẩm không tồn tại!</h2>
        <p style={{ marginTop: '10px' }}>Không tìm thấy sản phẩm có ID #{id}.</p>
        <button onClick={() => navigate('/products')} className="back-btn" style={{ marginTop: '15px' }}>
          [ Quay lại danh sách ]
        </button>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button onClick={() => navigate('/products')} className="back-btn">
        [ Quay lại danh sách ]
      </button>

      <div className="detail-card">
        <div className="image-placeholder">[ Ảnh sản phẩm ]</div>
        <div className="info">
          <h3>{product.name}</h3>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Danh mục:</strong> {product.category}</p>
          <p><strong>Giá:</strong> {product.price.toLocaleString('vi-VN')}đ</p>
          <p><strong>Mô tả:</strong> {product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;