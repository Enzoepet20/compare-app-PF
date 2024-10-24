import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function Productos() {
    const products = [
        { name: 'Frutas Frescas', image: 'https://via.placeholder.com/150', trend: 'Novedad' },
        { name: 'Verduras Orgánicas', image: 'https://via.placeholder.com/150', trend: 'Popular' },
        { name: 'Cereales Naturales', image: 'https://via.placeholder.com/150', trend: 'Novedad' }
    ];

    return (
        <div className="productos-page">
            <Header />
            <section className="section products-section">
                <h3>Catálogo de Productos</h3>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <ProductCard key={index} name={product.name} image={product.image} trend={product.trend} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Productos;
