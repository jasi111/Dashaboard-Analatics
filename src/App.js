
import './App.css';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Footer from './components/Footer';
import Panel from './components/Panel/Panel';

function App() {
  
  return (
    <div>
   <Header/>
      <Panel/>
      <Footer/>
    </div>
  );
}

export default App;
