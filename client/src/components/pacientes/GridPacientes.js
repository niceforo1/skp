import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePacientes} from '../../actions';

class GridPacientes extends Component {
	onClick(id) {
		this.props.deletePacientes(id);
	}

	render() {
		const {
			nombre,
			apellido,
			fechaNacimiento,
			nroDocumento,
			telefono,
			celular,
			_id
		} = this.props.paciente;
		return (
			<div className="row">
				<div className="col s12 m6 l5">
					<p>
						{nombre} {apellido}
					</p>
				</div>
				<div className="col s12 m6 l2">
					<p>{fechaNacimiento}</p>
				</div>
				<div className="col s12 m6 l2">
					<p>{nroDocumento}</p>
				</div>
				<div className="col s12 m6 l2">
					<p>
						{telefono} / {celular}
					</p>
				</div>
				<div className="col s12 m6 l1" onClick={() => this.onClick(_id)}>
					<p>
						<i className="material-icons">delete</i>
					</p>
				</div>
			</div>
		);
	}
}

export default connect(null, {deletePacientes})(GridPacientes);
