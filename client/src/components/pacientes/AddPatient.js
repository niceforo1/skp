import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import PatientForm from './PatientForm';
import PatientFormReview from './PatientFormReview';
import Breadcrumb from '../shared/Breadcrumbs';

class AddPatient extends Component {
	state = {showPatientReview: false};

	renderContent() {
		if (this.state.showPatientReview) {
			return (
				<PatientFormReview
					onCancel={() => this.setState({showPatientReview: false})}
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

export default reduxForm({
	form: 'patientForm'
})(AddPatient);
