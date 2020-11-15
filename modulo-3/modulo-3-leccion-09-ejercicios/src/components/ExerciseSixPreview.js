import React from "react";

class ExerciseSixPreview extends React.Component {
  render() {
    const { name, description, language, age, genre, file } = this.props;
    return (
      <div className="preview">
        <p className="preview__name">{name}</p>
        <p className="preview__description">{description}</p>
        <p className="preview__language">{language}</p>
        <p className="preview__language">{age}</p>
        <p className="preview__language">{genre}</p>
        <img alt="Imagen que toca" src={file} />
      </div>
    );
  }
}

export default ExerciseSixPreview;
