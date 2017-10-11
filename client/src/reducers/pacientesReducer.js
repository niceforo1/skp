import { FETCH_PACIENTE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PACIENTE:
      return action.payload;
    default:
      return state;
  }
}
