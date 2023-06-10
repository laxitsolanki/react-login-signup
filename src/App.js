// import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup'
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div> 
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

  </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
