import React, { useState } from "react";
import Error from "./Error";


const Buscador = ({guardarBusqueda}) => {
  
  const [terminoBusqueda, guardarTerminoBusqueda] = useState('');
  const [error, guardarError] = useState(false);

  const buscarImagen = (evento) => {
    evento.preventDefault();

    //validar

    if (terminoBusqueda === "") {
      guardarError(true);
      return;
    }

    //Enviar el termino hacia el componente principal
    guardarError(false);
    guardarBusqueda(terminoBusqueda);
  }

 

  return (
    <form onSubmit={buscarImagen}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca la imagen. Ejemplo: Futbol"
            onChange={(evento) => {
              guardarTerminoBusqueda(evento.target.value);
            }}
            />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn block"
            value="Buscar..."
          />
        </div>
      </div>
      {error? <Error mensaje = "Agregar un termino de Busqueda"/>: null}
    </form>
  );
};


export default Buscador;