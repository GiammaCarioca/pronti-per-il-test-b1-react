import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "./Components/Input";

import "./App.css";

function App() {
  const [form, setFormValue] = useState({ name: "", weight: "" });

  // console.log(Object.keys(form));

  const arrForm = Object.keys(form).map((key) => [key, form[key]]);

  // console.log(arrForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      {/* <p>Name: {form.name}</p>
      <p>Weight: {form.weight}</p> */}

      {arrForm.map((item) => (
        <p key={uuidv4()}>
          {item[0]}: {item[1]}
        </p>
      ))}

      <Input label="Name: " id="name" handleChange={handleChange}></Input>
      <Input label="Weight: " id="weight" handleChange={handleChange}></Input>
    </>
  );
}

export default App;
