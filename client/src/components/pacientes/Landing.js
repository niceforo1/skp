import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Breadcrumb from '../shared/Breadcrumbs';
import GridPacientes from './GridPacientes';
import {fetchPacientes} from '../../actions';
import Loading from '../shared/Loading';

class Landing extends Component {
	state = {loading: true};
	componentDidMount() {
		this.props.fetchPacientes();
		setTimeout(
			function() {
				this.setState({loading: false});
			}.bind(this),
			3000
		);
	}
	renderGrid() {
		return this.props.pacientes.map(paciente => {
			return <GridPacientes paciente={paciente} key={paciente._id} />;
		});
	}
	render() {
		if (this.state.loading) {
			return <Loading />;
		}
		return (
			<div>
				<Breadcrumb items={['Pacientes', 'Lista Pacientes']} />
				<div style={{textAlign: 'center'}}>
					<h5>Lista Pacientes</h5>
					{this.renderGrid()}
				</div>
				<div className="fixed-action-btn">
					<Link to="/pacientes/agregar" className="btn-floating btn-large blue">
						<i className="large material-icons">add</i>
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({pacientes}) => {
	return {pacientes};
};

export default connect(mapStateToProps, {fetchPacientes})(Landing);
