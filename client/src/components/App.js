// Componente principal de la aplicación
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './shared/Header';
import Landing from './Landing';
import LandingPacientes from './pacientes/Landing';
import AddPatient from './pacientes/AddPatient';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/pacientes" component={LandingPacientes} />
            <Route exact path="/pacientes/agregar" component={AddPatient} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
