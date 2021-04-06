import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';



function App() {
  let [mouseData, setMouseData] = useState({})
  return (
    <div className="App" onMouseMove={(arg)=>{
      setMouseData(arg)
  }}>
            <Layout mouseData={mouseData}/>
    </div>
  );
}

export default App;
