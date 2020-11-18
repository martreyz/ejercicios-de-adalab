import React, { useState, useEffect } from "react";

const LocalStorageFunc = () => {
  const [text, setText] = useState(
    localStorage.getItem("Text") || "Todavía no se ha introducido ningún texto"
  );

  const handleChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    setText(inputValue);
  };

  useEffect(() => localStorage.setItem("Text", text));

  return (
    <>
      <input
        placeholder="Introduce un texto"
        onChange={handleChange}
        type="text"
        name="userinput"
      />
      <p>{text}</p>
    </>
  );
};

export default LocalStorageFunc;
