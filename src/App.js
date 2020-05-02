import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Main2 from './components/Main2';
import Footer from './components/Footer';
import CoupeButtons from './components/CoupleButtons';
import Timer from './components/Timer';
import LifeCicle from './components/LifeCicle';

function App() {
  return (
    <div>
      <Header name="Sveta"/>
      {/* <Main arr={[1,5,6,7,4]}/> */}
      <Main2/>
      <Footer/>
      
      {/* <CoupeButtons/>
      <Timer/>
      <LifeCicle /> */}
     
    </div>
  );
}

export default App;
