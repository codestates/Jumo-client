import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Detail from './pages/Detail';
// import BestMakgeollis from './pages/BestMakgeollis';
import Header from './pages/header';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <SignIn />
      <Detail />
    </Router>
  );
};

export default App;
