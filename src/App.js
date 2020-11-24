import { useState } from "react";
import TextField from "./components/TextField";

function App() {
  const [formData, setFormData] = useState({
    answer01: "",
    answer02: "",
    answer03: "",
    answer04: "",
    answer05: "",
    answer06: "",
    answer07: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="container wrapper lg:w-2/3 md:p-20">
      <header className="my-6">
        <h1 className="hidden">Prova 1: Ecologia e ambiente</h1>
        <p className="hidden" role="doc-subtitle">
          Grammatica
        </p>
        <p
          role="doc-subtitle"
          aria-roledescription="consegna dell'esercizio"
          className="instructions md:text-2xl"
        >
          3. Inserisci i verbi tra parentesi all'imperfetto o al passato
          prossimo.
        </p>
      </header>
      <form action="" id="es03" autoComplete="off">
        <div className="space-y-4">
          <section>
            <p className="py-1 leading-relaxed">
              <span className="font-bold text-blue-600">A.</span> Quando{" "}
              <TextField
                label="(io - essere)"
                id="answer01"
                value={formData.name}
                handleChange={handleChange}
              ></TextField>{" "}
              piccolo,{" "}
              <TextField
                label="(andare)"
                id="answer02"
                value={formData.weight}
                handleChange={handleChange}
              ></TextField>{" "}
              sempre in vacanza al mare: solo un anno io e la mia famiglia{" "}
              <TextField
                label="(andare)"
                id="answer03"
                value={formData.weight}
                handleChange={handleChange}
              ></TextField>{" "}
              in montagna.
            </p>
          </section>

          <section>
            <p className="py-1 leading-relaxed">
              <span className="font-bold text-blue-600">B.</span> Mio padre{" "}
              <TextField
                label="(essere)"
                id="answer04"
                value={formData.name}
                handleChange={handleChange}
              ></TextField>{" "}
              alto, magro e{" "}
              <TextField
                label="(avere)"
                id="answer05"
                value={formData.weight}
                handleChange={handleChange}
              ></TextField>{" "}
              dei bellissimi baffi.{" "}
              <TextField
                label="(avere)"
                id="answer06"
                value={formData.weight}
                handleChange={handleChange}
              ></TextField>{" "}
              un bel carattere, solo una volta{" "}
              <TextField
                label="(arrabbiarsi)"
                id="answer07"
                value={formData.name}
                handleChange={handleChange}
              ></TextField>{" "}
              molto!
            </p>
          </section>
        </div>

        <div className="flex justify-center">
          <button className="btn" type="submit">
            Controlla la tua risposta
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
