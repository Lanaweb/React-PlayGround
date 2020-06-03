import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Main2 from './components/Main2';
import Footer from './components/Footer';
import CoupeButtons from './components/CoupleButtons';
import Timer from './components/Timer';
import LifeCicle from './components/LifeCicle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header name="Sveta" />
        {/* <Main arr={[1,5,6,7,4]}/> */}
        <Main2 />
        <Footer />

        {/* <CoupeButtons/>
          <Timer/>
          <LifeCicle /> */}
      </div>
    </Router>
  );
}

export default App;
