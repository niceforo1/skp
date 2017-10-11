// acciones para integrar a la aplicación
import axios from 'axios';
import { FETCH_PACIENTE } from './types';

export const fetchPacientes = () => async dispatch => {
  const res = await axios.get('/api/pacientes');
  dispatch({ type: FETCH_PACIENTE, payload: res.data });
};
