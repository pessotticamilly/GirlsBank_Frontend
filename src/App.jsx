import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro/Cadastro';
import Inicio from './pages/Inicio/Inicio';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro' element={<Cadastro />} />
       <Route path='/inicio' element={<Inicio />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
