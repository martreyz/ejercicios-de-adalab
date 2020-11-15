import React from "react";

class HeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
  }

  handleKeyUp(ev) {
    ev.preventDefault();
    this.props.handleKeyUpProp({ filteredText: ev.target.value });
  }

  render() {
    return (
      <form className="text-align-right">
        <button onClick={this.handleClick} className="form__btn">
          <span className="fas fa-inbox"></span>
          Recibidos
        </button>
        <button onClick={this.handleClick} className="form__btn">
          <span className="fas fa-trash"></span>
          Papelera
        </button>
        <input
          onKeyUp={this.handleKeyUp}
          className="form__input-text"
          type="text"
          placeholder="Buscar un correo"
        />
      </form>
    );
  }
}

export default HeaderForm;
