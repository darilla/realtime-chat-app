import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'sanitize.css';

import Joint from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/" exact component={Joint} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
