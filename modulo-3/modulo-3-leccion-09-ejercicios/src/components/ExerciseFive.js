import React from "react";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

class ExerciseFive extends React.Component {
  render() {
    const [
      { name: a1, time: a2 },
      { name: b1, time: b2 },
      { name: c1, time: c2 },
    ] = users;
    console.log(a1);
    return (
      <>
        <li key={a2}>
          {a1}, {a2}
        </li>
        <li key={b2}>
          {b1}, {b2}
        </li>
        <li key={c2}>
          {c1}, {c2}
        </li>
      </>
    );
  }
}

export default ExerciseFive;
