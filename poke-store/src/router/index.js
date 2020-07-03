import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '../pages/App';
import Catalogo from '../pages/catalogo/Catalogo';

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/catalogo" exact component={Catalogo} />
    </Router>
  )
}