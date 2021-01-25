import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";
import ListadoImages from "./components/ListadoImages";
function App() {
  const [busqueda, setBusqueda] = useState("");
  const [images, setImages] = useState([]);
  const [paginaactual, setPaginaactual] = useState(1);
  const [totalpagina, setTotalpagina] = useState(5);

  useEffect(() => {
    const consultaApi = async () => {
      if (busqueda === "") return;
      //const resultado = await axios.get(``);
      const imagenesPorPagina = 30;

      const key = "1732750-d45b5378879d1e877cd1d35a6";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setImages(resultado.hits);

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      
      setTotalpagina(calcularTotalPaginas);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultaApi();
  }, [busqueda, paginaactual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    
    if (nuevaPaginaActual === 0) return;

    setPaginaactual(nuevaPaginaActual);
  };
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    
    if (nuevaPaginaActual > totalpagina) return;
    setPaginaactual(nuevaPaginaActual);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>

          <Formulario setBusqueda={setBusqueda} />
        </div>
      </div>

      <div className="row justify-content-center">
        <ListadoImages images={images} />

        {paginaactual === 1 ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior{" "}
          </button>
        )}

        {paginaactual === totalpagina ? null : (
          <button
            type="button"
            className="bbtn btn-info"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default App;
