import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Breadcrumb from '../shared/Breadcrumbs';
import GridPacientes from './GridPacientes';
import { fetchPacientes } from '../../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchPacientes();
  }
  renderGrid() {
    return this.props.pacientes.map(paciente => {
      return <GridPacientes paciente={paciente} key={paciente.nroDocumento} />;
    });
  }
  render() {
    return (
      <div>
        <Breadcrumb item1="pacientes" item2="listado" />
        <div style={{ textAlign: 'center' }}>
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

const mapStateToProps = ({ pacientes }) => {
  return { pacientes };
};

export default connect(mapStateToProps, { fetchPacientes })(Landing);
