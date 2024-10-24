import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nutricional from './pages/Nutricional';
import Productos from './pages/Productos';
import Reseñas from './pages/Reseñas';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nutricional" element={<Nutricional />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/resenas" element={<Reseñas />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
