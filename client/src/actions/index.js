// acciones para integrar a la aplicación
import axios from 'axios';
import {FETCH_PACIENTE} from './types';

export const fetchPacientes = () => async dispatch => {
	const res = await axios.get('/api/pacientes');
	dispatch({type: FETCH_PACIENTE, payload: res.data});
};

export const deletePacientes = id => async dispatch => {
	const res = await axios.delete(`/api/pacientes/${id}`);
	dispatch({type: FETCH_PACIENTE, payload: res.data});
};

export const savePacientes = (paciente, history) => async dispatch => {
	const res = await axios.post(`/api/pacientes`, paciente);
	history.push('/pacientes');
	console.log(res);
	dispatch({type: FETCH_PACIENTE, payload: res.data});
};
