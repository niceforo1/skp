import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import FormField from '../shared/FormField';
import patientFormFields from './patientFormFields';

class PatientForm extends Component {
	renderFields() {
		return _.map(patientFormFields, ({label, name, validate, type}) => {
			return (
				<Field
					component={FormField}
					type={type}
					label={label}
					name={name}
					key={name}
					validate={validate}
				/>
			);
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onPatientSubmit)}>
					{this.renderFields()}
					<div style={{marginBottom: '20px'}}>
						<Field
							name="sexo"
							component="input"
							type="radio"
							value="Masculino"
							className="with-gap"
							id="sexMale"
						/>
						<label htmlFor="sexMale">Masculino</label>
						<Field
							name="sexo"
							component="input"
							type="radio"
							value="Femenino"
							className="with-gap"
							id="sexFemale"
						/>
						<label htmlFor="sexFemale">Femenino</label>
					</div>
					<Link to="/pacientes" className="red btn-flat white-text">
						Cancelar
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Siguiente
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'patientForm',
	destroyOnUnmount: false
})(PatientForm);
