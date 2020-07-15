import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };
  }

  render() {
    return (
      <div className="row">
        <form className="col-12" onSubmit ={this.handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input type='text' className="form-control" value={this.state.value} onChange ={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Credit Card</label>
            <input type='text' className="form-control" value={this.state.value} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" value={this.state.value} onChange={this.handleChange}></textarea>
          </div>

        </form>

      </div>

    );

  }

}

export default CheckoutForm;