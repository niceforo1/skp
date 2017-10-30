import validateEmails from '../../utils/validateEmail';

const required = value =>
  value ? undefined : `Requerido: Debe ingresar un valor`;
const validateEmails2 = value => validateEmails(value);

export default [
  {
    label: 'Documento',
    name: 'nroDocumento',
    validate: [required],
    type: 'text',
    id: 'nroDocumento'
  },
  {
    label: 'Nombre',
    name: 'nombre',
    id: 'nombre',
    validate: [required],
    type: 'text'
  },
  {
    label: 'Apellido',
    name: 'apellido',
    id: 'apellido',
    validate: [required],
    type: 'text'
  },
  {
    label: 'Fecha Nacimiento',
    name: 'fechaNacimiento',
    id: 'fechaNacimiento',
    validate: [required],
    type: 'text'
  },
  {
    label: 'Telefono',
    name: 'telefono',
    id: 'telefono',
    type: 'text'
  },
  {
    label: 'Celular',
    name: 'celular',
    id: 'celular',
    validate: [required],
    type: 'text'
  },
  {
    label: 'Email',
    name: 'mail',
    id: 'mail',
    validate: [required, validateEmails2],
    type: 'text'
  }
];
