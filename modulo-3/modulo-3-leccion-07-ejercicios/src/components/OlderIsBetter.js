import React, { useState } from "react";

const OlderIsBetter = () => {
  const [age, setAge] = useState(20);
  const [presents, setPresents] = useState(1);
  const handleClick = (ev) => {
    const buttonValue = ev.target.value;
    if (buttonValue === "age") {
      const acc = age + 1;
      setAge(acc);
    } else if (buttonValue === "presents") {
      const acc = presents + 1;
      setPresents(acc);
    }
  };

  return (
    <>
      <p>Hoy tengo {age} años de edad</p>
      <button value="age" onClick={handleClick}>
        Hazme más viejo
      </button>
      <p>Tengo {presents} regalos</p>
      <button value="presents" onClick={handleClick}>
        Dame regalos
      </button>
    </>
  );
};

export default OlderIsBetter;
