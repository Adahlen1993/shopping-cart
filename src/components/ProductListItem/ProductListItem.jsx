import React from 'react';
import { useDispatch } from 'react-redux';

// Displays a single Product with price on the DOM
function ProductListItem({ product}) {

  const dispatch = useDispatch();
  const addProductToCart = () => {
    console.log(product);
  
    // TODO: Dispatch here
    dispatch({type: 'ADD_TO_CART', payload: product})
  }

  return (
    <li>
      {product.name}: {product.price}{' '}
      <button onClick={addProductToCart}>Add to Cart</button>
    </li>
  );
}

export default ProductListItem;
