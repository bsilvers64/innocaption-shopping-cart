import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductDetail from '../features/Products/productDetails';


function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail/>
      </Navbar>
    </div>
  );
}

export default ProductDetailPage