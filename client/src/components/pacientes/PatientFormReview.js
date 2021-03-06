import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import patientFormFields from './patientFormFields';
import * as actions from '../../actions';

const PatientFormReview = ({onCancel, formValues, savePacientes, history}) => {
	const reviewFields = _.map(patientFormFields, ({name, label}) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div>
			<h5>Verifique los datos ingresados</h5>
			{reviewFields}
			<button
				className="yellow darken-3 btn-flat waves-effect waves-light"
				onClick={onCancel}
			>
				Volver
			</button>
			<button
				className="green white-text btn-flat waves-effect waves-light right"
				onClick={() => savePacientes(formValues, history)}
			>
				Finalizar
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};
function mapStateToProps(state) {
	return {formValues: state.form.patientForm.values};
}
export default connect(mapStateToProps, actions)(withRouter(PatientFormReview));
