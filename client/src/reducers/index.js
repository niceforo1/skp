// lugar para exportar los reducers
import { combineReducers } from 'redux';
//import { reducer as reduxForm } from 'redux-form';
import pacientesReducer from './pacientesReducer';

export default combineReducers({
  pacientes: pacientesReducer
});
