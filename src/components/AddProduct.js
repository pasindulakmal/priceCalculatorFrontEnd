import React from 'react';
import react from 'react';

class AddProduct extends React.Component {
  state = {
    name: '',
    cartonPrice: '',
    discount: '',
    units: '',
    unitsPerCarton: '',
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === '' ||
      this.state.units === '' ||
      this.state.cartonPrice === '' ||
      this.state.discount === '' ||
      this.unitsPerCarton === ''
    ) {
      alert('All the feilds are mandatory');
      return;
    }

    this.props.addProductHandler(this.state);

    console.log(this.state);
    this.setState({
      name: '',
      units: '',
      cartonPrice: '',
      discount: '',
      unitsPerCarton: '',
    });
  };

  render() {
    return (
      <div className='ui main'>
        <h2>Add Product</h2>
        <form className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Carton Price</label>
            <input
              type='text'
              name='cartonPrice'
              placeholder='cartonPrice'
              value={this.state.cartonPrice}
              onChange={(e) => this.setState({ cartonPrice: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Discount</label>
            <input
              type='text'
              name='discount'
              placeholder='discount'
              value={this.state.discount}
              onChange={(e) => this.setState({ discount: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Units</label>
            <input
              type='text'
              name='units'
              placeholder='units'
              value={this.state.units}
              onChange={(e) => this.setState({ units: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Units Per Carton</label>
            <input
              type='text'
              name='unitsPerCarton'
              placeholder='unitsPerCarton'
              value={this.state.unitsPerCarton}
              onChange={(e) =>
                this.setState({ unitsPerCarton: e.target.value })
              }
            />
          </div>

          <button className='ui button blue'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
