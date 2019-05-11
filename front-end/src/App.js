import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Formulario from './components/Formulario';
import TequilaItem from './components/TequilaItem';
import FabricanteItem from './components/FabricanteItem';
import UsuarioItem from './components/UsuarioItem';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" render={(props) => <Formulario {...props}/>}/>
      <Route exact path="/form" render={(props) => <Formulario {...props}/>}/>
      <Route path="/tequila/:id" component={TequilaItem} />
      <Route path="/fabricante/:marca" component={FabricanteItem} />
      <Route path="/usuario/:nombre" component={UsuarioItem} />
      <Footer />
    </div>
  </Router>
);

export default App;
