import React from "react";

class EditForm extends React.Component {
  state = this.props.item;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  editItem = () => {
    this.props.setShow(false);
    this.props.editItem(this.state);
  };
  render() {
    const { type, place, amount, date } = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="type">Select Type: </label>
          <select
            className="form-control"
            id="type"
            name="type"
            value={type}
            onChange={this.handleChange}
          >
            <option>Select option...</option>
            <option value="Groceries">Groceries</option>
            <option value="Car">Car</option>
            <option value="House">House</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="place">Place</label>
          <input
            className="form-control"
            type="text"
            name="place"
            id="place"
            value={place}
            onChange={this.handleChange}
          />
        </div>
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
        <input type="button" value="Submit" onClick={this.editItem} />
      </form>
    );
  }
}

export default EditForm;
