 import Navbar from './navbar';
 import Body from './body';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />  
      
      <Routes>
      <Route path='/' element={<Body/>}  />   
      <Route path='/dashboard' element={<Homepage/>} exact/>
      </Routes>  
      </BrowserRouter>

      </div>
  );
}

export default App;
