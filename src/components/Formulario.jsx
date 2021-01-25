import React, { useState, Fragment } from "react";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, getError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (termino.trim() === "") {
      getError(true);
      return;
    }
    getError(false);
    setBusqueda(termino);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca una imagen, ejemplo: futbol o café"
              onChange={(e) => setTermino(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar"
            />
          </div>
        </div>

        {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
      </form>
    </Fragment>
  );
};

export default Formulario;
