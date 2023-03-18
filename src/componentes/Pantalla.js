import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

// Definir componente como función flecha. Se usa cuando el componente es muy sencillo.

const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;