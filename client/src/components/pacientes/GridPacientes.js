import React from 'react';
export default ({ paciente }) => {
  return (
    <div className="row">
      <div className="col s12 m6 l5">
        <p>
          {paciente.nombre} {paciente.apellido}
        </p>
      </div>
      <div className="col s12 m6 l2">
        <p>{paciente.fechaNacimiento}</p>
      </div>
      <div className="col s12 m6 l3">
        <p>{paciente.nroDocumento}</p>
      </div>
      <div className="col s12 m6 l2">
        <p>
          {paciente.telefono} / {paciente.celular}
        </p>
      </div>
    </div>
  );
};
