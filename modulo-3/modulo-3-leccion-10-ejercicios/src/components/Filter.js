import React from "react";
import "../stylesheets/App.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.checked = [];
  }

  handleChange(ev) {
    const statusCheckbox = ev.target.checked;
    const checkedValue = ev.target.value;
    if (statusCheckbox === true) {
      this.checked.push(checkedValue);
    } else {
      const index = this.checked.indexOf(checkedValue);
      this.checked.splice(index, 1);
    }
    this.props.handleFilterChange(this.checked);
  }
  render() {
    return (
      <form className="form">
        <h1>Location</h1>
        <label htmlFor="finland">Finland</label>
        <input
          onChange={this.handleChange}
          type="checkbox"
          name="location"
          id="finland"
          value="Finland"
        />
        <label htmlFor="france">France</label>
        <input
          onChange={this.handleChange}
          type="checkbox"
          name="location"
          id="france"
          value="France"
        />
        <label htmlFor="brazil">Brazil</label>
        <input
          onChange={this.handleChange}
          type="checkbox"
          name="location"
          id="brazil"
          value="Brazil"
        />
        <label htmlFor="turkey">Turkey</label>
        <input
          onChange={this.handleChange}
          type="checkbox"
          name="location"
          id="turkey"
          value="Turkey"
        />
      </form>
    );
  }
}

export default Filter;
