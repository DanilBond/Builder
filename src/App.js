import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Builder from './components/Builder/Builder';
import Layout from './components/Layout/Layout';
import Checkout from './components/Checkout/Checkout';
import Auth from './components/Auth/Auth';



function App({store}) {

  
  return (
    <div className="App">
    
  {/* <Layout mouseData={mouseData}/> */}
  <Switch>
        <Route path="/" exact component={() => <Layout store={store}/>} />
        <Route path="/checkout"  component={() => <Checkout store={store} />} />
        <Route path="/auth"  component={() => <Auth/>} />
        
        <Redirect to="/" />
      </Switch>
      
    </div>
  );
}

export default App;
