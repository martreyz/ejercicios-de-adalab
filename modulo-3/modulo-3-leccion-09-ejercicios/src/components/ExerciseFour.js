import React from "react";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

class ExerciseFour extends React.Component {
  render() {
    const [a, b, c] = users;
    return (
      <>
        <li key={a.time}>
          {a.name}, {a.time}
        </li>
        <li key={b.time}>
          {b.name}, {b.time}
        </li>
        <li key={c.time}>
          {c.name}, {c.time}
        </li>
      </>
    );
  }
}

export default ExerciseFour;
