import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Modelx from './components/ModelX/Modelx';
import Footer from './components/Footer/Footer';
function App({id}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </Router>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
