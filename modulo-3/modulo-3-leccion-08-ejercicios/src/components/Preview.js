import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
        <p className="preview__name">{this.props.name}</p>
        <p className="preview__description">{this.props.description}</p>
        <p className="preview__language">{this.props.language}</p>
        <p className="preview__language">{this.props.age}</p>
        <p className="preview__language">{this.props.genre}</p>
        <img alt="Imagen que toca" src={this.props.file} />
      </div>
    );
  }
}

export default Preview;
