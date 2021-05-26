import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Builder from './components/Builder/Builder';
import Layout from './components/Layout/Layout';
import Checkout from './components/Checkout/Checkout';



function App() {
  
  return (
    <div className="App">
    
  {/* <Layout mouseData={mouseData}/> */}
  <Switch>
        <Route path="/" exact component={() => <Layout/>} />
        <Route path="/modal"  component={() => <Checkout />} />
        
        <Redirect to="/" />
      </Switch>
      
    </div>
  );
}

export default App;
