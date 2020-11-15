import React from "react";
import palettes from "../data/palettes.json";
import ExerciseTwo from "./ExerciseTwo";

class ExerciseTwoList extends React.Component {
  render() {
    return palettes.palettes.map((palette, i) => {
      return (
        <ExerciseTwo key={i} from={palette.from} name={palette.name} i={i} />
      );
    });
  }
}

export default ExerciseTwoList;
