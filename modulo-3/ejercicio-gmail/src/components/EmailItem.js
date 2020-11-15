import React from "react";

class EmailItem extends React.Component {
  render() {
    let deletedClass = "";
    let readClass = "";

    if (this.props.deteled === false) {
      deletedClass = "text--decoration--through";
    }

    if (this.props.read === false) {
      readClass = "text--bold";
    }

    return (
      <tr className={`cursor-pointer ${deletedClass} ${readClass}`}>
        <td>
          <a href="/" className="text--decoration--none">
            {this.props.from}
          </a>
        </td>
        <td>
          <a href="/" className="text--decoration--none">
            {this.props.subject}
          </a>
        </td>
        <td>
          <a href="/" className="text--decoration--none">
            {this.props.time}
          </a>
        </td>
        <td className="text-align-right">
          <button className="form__btn fas fa-trash"></button>
        </td>
      </tr>
    );
  }
}

export default EmailItem;
