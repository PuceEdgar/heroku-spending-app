import React from "react";

class AddSamePlaceForm extends React.Component {
  initialState = {
    id: 0,
    type: this.props.item.type,
    place: this.props.item.place,
    amount: 0,
    date: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.props.setShow(false);
    this.setState(this.initialState);
  };
  render() {
    const { amount, date } = this.state;

    return (
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <label htmlFor="amount">Amount</label>
              <input
                className="form-control"
                type="text"
                name="amount"
                id="amount"
                value={amount}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-6">
              <label htmlFor="date">Date</label>
              <input
                className="form-control"
                type="text"
                name="date"
                id="date"
                value={date}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default AddSamePlaceForm;
