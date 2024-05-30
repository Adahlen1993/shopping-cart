import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { useSelector } from 'react-redux';

function ProductList({setTotalCost, totalCost}) {
  const products = useSelector(store => store.products)
  return (
    <div>
      <ul>
        {products.map((product, i) => {
          return <ProductListItem totalCost={totalCost} setTotalCost={setTotalCost} key={i} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ProductList;
