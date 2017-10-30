import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import FormField from '../shared/FormField';
import patientFormFields from './patientFormFields';
import $ from 'jquery';
class PatientForm extends Component {
	componentDidMount() {
		$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 15, // Creates a dropdown of 15 years to control year,
			closeOnSelect: false, // Close upon selecting a date,
			labelMonthNext: 'Mes próximo',
			labelMonthPrev: 'Mes anterior',
			labelMonthSelect: 'Seleccione un mes',
			labelYearSelect: 'Seleccione un año',

			monthsFull: [
				'Enero',
				'Febrero',
				'Marzo',
				'Abril',
				'Mayo',
				'Junio',
				'Julio',
				'Agosto',
				'Septiembre',
				'Octubre',
				'Noviembre',
				'Diciembre'
			],
			monthsShort: [
				'Ene',
				'Feb',
				'Mar',
				'Abr',
				'May',
				'Jun',
				'Jul',
				'Ago',
				'Sep',
				'Oct',
				'Nov',
				'Dic'
			],
			weekdaysFull: [
				'Domingo',
				'Lunes',
				'Martes',
				'Miércoles',
				'Jueves',
				'Viernes',
				'Sabado'
			],
			weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],

			// Materialize modified
			weekdaysLetter: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],

			// Today and clear
			today: 'Hoy',
			clear: 'Limpiar',
			close: 'Ok',
			format: 'dd/mm/yyyy'
		});
	}
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
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
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
