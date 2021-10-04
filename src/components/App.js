import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import api from '../api/products';

function App() {
  const [products, setProducts] = useState([]);

  //retreive products
  const retreiveProducts = async () => {
    const response = await api.get('/products');
    return response.data;
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProduct = await retreiveProducts();
      if (allProduct) {
        setProducts(allProduct);
      }
    };
    getAllProducts();
  }, []);

  //addProduct
  const addProductHandler = async (product) => {
    const request = {
      ...product,
    };
    const response = await api.post('/products', request);
    setProducts(...products, response.data);
  };

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/add' component={()=><AddProduct addProductHandler={addProductHandler}/>} />
          <Route path='/' exact component={()=><ProductList products={products}/>} />
          {/* <ProductList products={products}/>  */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
