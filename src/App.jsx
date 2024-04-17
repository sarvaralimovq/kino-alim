import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About/About';
import Header from './pages/Herader/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   
    </div>
  );
}

export default App;
