import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About/About';
import Header from './pages/Herader/Header';
import Home from './pages/Home/Home';
import Watching from './pages/Watching/Watching';

function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/watching' element={<Watching/>}/>
   </Routes>
   
    </div>
  );
}

export default App;
