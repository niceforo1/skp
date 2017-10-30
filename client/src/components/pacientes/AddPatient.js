import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import PatientForm from './PatientForm';
import PatientFormReview from './PatientFormReview';
import Breadcrumb from '../shared/Breadcrumbs';
import {savePacientes} from '../../actions';

class AddPatient extends Component {
	state = {showPatientReview: false};

	renderContent() {
		if (this.state.showPatientReview) {
			return (
				<PatientFormReview
					onCancel={() => this.setState({showPatientReview: false})}
					onSubmit={paciente => {
						this.props.savePacientes(paciente);
					}}
				/>
			);
		}
		return (
			<div>
				<Breadcrumb items={['Pacientes', 'Agregar Paciente']} />
				<PatientForm
					onPatientSubmit={() => this.setState({showPatientReview: true})}
				/>
			</div>
		);
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}
AddPatient = connect(null, {savePacientes})(AddPatient);

export default reduxForm({
	form: 'patientForm'
})(AddPatient);
