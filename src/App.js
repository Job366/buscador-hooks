import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import Buscador from './Components/Buscador'
import Galeria from './Components/Galeria';


const App = () => {

  const [busqueda, guardarBusqueda] = useState("")
  const [imagenes, guardarImagenes] = useState([])
  const [paginaActual, guardarPaginaActual] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 20;
      const key = "14853861-0a61123e71dd7cf9015463285";

      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado.hits)
      guardarImagenes(resultado.hits);

    };
    consultarApi();
  },[busqueda])

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Buscador
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <Galeria imagenes={imagenes}/>
      </div>
    </div>
  );
}

export default App;