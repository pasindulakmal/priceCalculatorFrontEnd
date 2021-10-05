import React, { useEffect } from 'react';
import { useState } from 'react';

const ProductCard = (props) => {
  const { id, name, cartonPrice, discount, units, unitsPerCarton } =
    props.product;

  const [cartons, setCartons] = useState();
  const [addUnits, setAddUnits] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const add = (e) => {
    e.preventDefault();
    if (cartons === '' || addUnits === '') {
      alert('All the feilds are mandatory');
      return;
    }
    const product = {
      id: id,
      cartons: cartons,
      units: addUnits,
    };

     props.addPriceHandler(product).then(data => {
        if(data){
            setTotalPrice(data.price);
        }
     });
  };

  return (
    <div className='item'>
      <img
        className='ui avatar image'
        src='https://ae01.alicdn.com/kf/H3166edf304b5454396baf235e7bed124d/DOUBCHOW-Ear-Moving-Plush-Black-Penguin-Animal-Hat-with-Paws-for-Adults-Teenagers-Kids-Boys-Girls.jpg_Q90.jpg_.webp'
        alt='user'
      />
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{cartonPrice}</div>
        <div>{discount}</div>
        <div>{units}</div>
        <div>{unitsPerCarton}</div>
      </div>
      <form
        className='ui form'
        onSubmit={(e) => {
          add(e);
        }}
      >
        <div className='field'>
          <label>Units</label>
          <input
            type='text'
            name='unit'
            placeholder='units'
            value={addUnits}
            onChange={(e) => setAddUnits(e.target.value)}
          />
        </div>
        <div className='field'>
          <label>Carton</label>
          <input
            type='text'
            name='carton'
            placeholder='carton'
            value={cartons}
            onChange={(e) => setCartons(e.target.value)}
          />
        </div>
        <button className='ui button green'>Calculate Price</button>
        <lael>Total Price = {totalPrice}</lael>
      </form>
    </div>
  );
};
export default ProductCard;
