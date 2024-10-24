import React from 'react';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import AlertList from '../components/AlertList';

function Nutricional() {
    const categories = [
        { name: 'Alimentos Balanceados', icon: 'pi pi-apple', updated: 'Nuevo' },
        { name: 'Ricos en Proteínas', icon: 'pi pi-bolt', updated: 'Actualizado' }
    ];

    const alerts = [
        'Nuevos alimentos ricos en proteínas disponibles',
        'Alerta de productos balanceados a menor precio'
    ];

    return (
        <div className="nutricional-page">
            <Header />
            <section className="section categories-section">
                <div className="section-header">
                    <h3>Categorías Nutricionales</h3>
                </div>
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} name={category.name} icon={category.icon} updated={category.updated} />
                    ))}
                </div>
            </section>

            <section className="section alerts-section">
                <h3>Alertas Nutricionales</h3>
                <AlertList alerts={alerts} />
            </section>
        </div>
    );
}

export default Nutricional;
