import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  console.log(props);

  //addProduct
  const addPriceHandler = async (price) => {
       console.log('+++++++++++++++')
       console.log(price);
    // const request = {
    //   ...product,
    // };
    // const response = await api.post('/products', request);
    // setProducts(...products, response.data);
  };

  const renderProductList = props.products.map((product) => {
    return <ProductCard product={product} addPriceHandler={addPriceHandler}/>;
  });

  return (
    <div class='main'>
      <h2>Product List</h2>
      <Link to='/add'>
        <button className='ui button blue right'>Add Products </button>
      </Link>
      <div className='ui celled list'>{renderProductList}</div>
    </div>
  );
};

export default ProductList;
