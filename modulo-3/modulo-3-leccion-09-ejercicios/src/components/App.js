import React from "react";
// import ExerciseOne from "./ExerciseOne";
// import ExerciseOneInput from "./ExerciseOneInput";
// import { useState } from "react";
// import ExerciseTwoList from "./ExerciseTwoList";
// import ExerciseFour from "./ExerciseFour";
// import ExerciseFive from "./ExerciseFive";
import ExerciseSixForm from "./ExerciseSixForm";
import ExerciseSixPreview from "./ExerciseSixPreview";

//Ejercicio 1:
// function App() {
//   const [number, setNumber] = useState(0);
//   const [even, setEven] = useState(1);
//   const handleInputChange = (a) => {
//     setNumber(a);
//   };
//   const handleCheckboxChange = (a) => {
//     setEven(a);
//   };
//   return (
//     <div>
//       <ExerciseOneInput
//         handleCheckboxChange={handleCheckboxChange}
//         handleInputChange={handleInputChange}
//       />
//       <ExerciseOne even={even} number={number} />
//     </div>
//   );
// }

//Exercise 2/3
// function App() {
//   return (
//     <div>
//       <ExerciseTwoList />
//     </div>
//   );
// }

//Exercise 4
// function App() {
//   return (
//     <div>
//       <ExerciseFour />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ExerciseFive />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      age: "",
      genre: "",
      file: "",
      fileName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(name, value) {
    this.setState({
      file: value,
      fileName: name,
    });
  }
  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, description, language, age, genre, file } = this.state;
    return (
      <div className="App">
        <ExerciseSixForm
          handleChange={this.handleChange}
          handleFileChange={this.handleFileChange}
        />
        <ExerciseSixPreview
          name={name}
          description={description}
          language={language}
          age={age}
          genre={genre}
          file={file}
        />
      </div>
    );
  }
}
export default App;
