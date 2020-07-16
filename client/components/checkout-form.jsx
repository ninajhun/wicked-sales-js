import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {

    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('/api/orders', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));

  }

  render() {
    return (
      <div className="row">

        <form className="col-12" encType="multipart/form-data" onSubmit ={this.handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input type='text' name="name" className="form-control" value={this.state.name} onChange ={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Credit Card</label>
            <input type='text' name="creditCard" className="form-control" value={this.state.creditCard} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea name="shippingAddress" className="form-control" value={this.state.shippingAddress} onChange={this.handleChange}></textarea>
          </div>

          <div>
            <button type="submit" className='btn btn-light'>Purchase</button>
          </div>

        </form>

      </div>

    );

  }

}

export default CheckoutForm;
