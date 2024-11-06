import React from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard'; // Nuevo componente para el perfil
import BottomNav from '../components/BottomNav';

function Perfil() {
    const userInfo = {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        membership: 'Miembro desde 2021'
    };

    return (
        <div className="perfil-page">
            <Header />
            <section className="section profile-section">
                <h3>Perfil de Usuario</h3>
                <ProfileCard user={userInfo} />
            </section>
            <BottomNav />
        </div>
    );
}

export default Perfil;
