import React from "react";
const fr = new FileReader();
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    // this.fakeClick = this.fakeClick.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      file: "",
      fileUrl: "",
    };
  }

  // fakeClick() {
  //   console.log("Yay");
  //   this.fileInput.current.click();
  // }
  writeImage() {
    const url = fr.result; // como esta función se lanza una vez está cargado el archivo, ya podemos almacenar el resultado del filereader (declarado en la línea 2 para que fuera constante global y poderla utilizar en ambas funciones). Como en la función handleFileChange le hemos indicado que lo lea como URL, el resultado será la URL de la imagen y la guardamos en el estado.
    this.setState({
      fileUrl: url,
    });
    this.props.handleFileChange(this.state.file, this.state.fileUrl); // después podemos pasar como parámetros los dos estados almacenados, que la función handleFileChange de App.js guardará en el estado de App.js para así pasarlo por props a Preview.js y que se pinte.
  }
  handleFileChange(ev) {
    const myPic = ev.currentTarget.files[0]; // Necesario para indicaciones de línea 32
    const picName = myPic.name; // Necesario sólo si queremos el nombre del archivo.
    fr.onload = this.writeImage; // aquí indicamos que lance la función únicamente cuando el archivo seleccionado ESTÉ CARGADO. Maneja asincronía.
    fr.readAsDataURL(myPic); // Indicamos cómo queremos leer el archivo seleccionado, en este caso lo leemos como una url para dárselo luego como src a la imagen en el componente Preview.js
    this.setState({
      // Como el nombre lo tenemos desde un primer momento lo guardamos en el estado (la única forma que se me ha ocurrido de conservar esos datos fuera y dentro de la función ha sido guardarlos en el estado.)
      file: picName,
    });
  }

  handleFormChange(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    this.props.handleChange(name, value);
    console.log(name);
  }
  render() {
    return (
      <form className="form">
        <input
          onChange={this.handleFormChange}
          type="text"
          className="form__input"
          name="name"
        />
        <textarea
          onChange={this.handleFormChange}
          className="form__textarea"
          name="description"
        />
        <select
          onChange={this.handleFormChange}
          name="language"
          className="form__select"
        >
          <option className="form__select-lang" name="language" value="Español">
            Español
          </option>
          <option className="form__select-lang" name="language" value="Inglés">
            Inglés
          </option>
          <option
            className="form__select-lang"
            name="language"
            value="Portugués"
          >
            Portugués
          </option>
        </select>
        <label htmlFor="all">Todas las edades</label>
        <input
          onChange={this.handleFormChange}
          id="all"
          type="radio"
          value="all"
          name="age"
        />
        <label htmlFor="7">7</label>
        <input
          onChange={this.handleFormChange}
          id="7"
          type="radio"
          value="7"
          name="age"
        />
        <label htmlFor="12">12</label>
        <input
          onChange={this.handleFormChange}
          id="12"
          type="radio"
          value="12"
          name="age"
        />
        <label htmlFor="16">16</label>
        <input
          onChange={this.handleFormChange}
          id="16"
          type="radio"
          value="16"
          name="age"
        />
        <label htmlFor="18">18</label>
        <input
          onChange={this.handleFormChange}
          id="18"
          type="radio"
          value="18"
          name="age"
        />

        <label htmlFor="Comedia">Comedia</label>
        <input
          onChange={this.handleFormChange}
          id="Comedia"
          type="checkbox"
          value="Comedia"
          name="genre"
        />
        <label htmlFor="Drama">Drama</label>
        <input
          onChange={this.handleFormChange}
          id="Drama"
          type="checkbox"
          value="Drama"
          name="genre"
        />
        <label htmlFor="Fantasía">Fantasía</label>
        <input
          onChange={this.handleFormChange}
          id="Fantasía"
          type="checkbox"
          value="Fantasía"
          name="genre"
        />
        <label htmlFor="Acción">Acción</label>
        <input
          onChange={this.handleFormChange}
          id="Acción"
          type="checkbox"
          value="Acción"
          name="genre"
        />
        <label htmlFor="Familia">Familia</label>
        <input
          onChange={this.handleFormChange}
          id="Familia"
          type="checkbox"
          value="Familia"
          name="genre"
        />
        <input
          ref={this.fileInput}
          // onClick={this.fakeClick}
          onChange={this.handleFileChange}
          type="file"
          className="form__file"
          name="file"
        />
      </form>
    );
  }
}

export default Form;
