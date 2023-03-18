import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
      >
      {props.children}
    </div>
  )

  //Otra Forma para darle color diferente a los numeros y operadores

  /* if (esOperador(props.children)) {
    <div 
      className='boton-contenedor operador'
      onClick={() => props.manejarClic(props.children)}
      >
      {props.children}
    </div>
  } else {
    <div 
      className='boton-contenedor'
      onClick={() => props.manejarClic(props.children)}
      >
      {props.children}
    </div>  
  } */
}

export default Boton;