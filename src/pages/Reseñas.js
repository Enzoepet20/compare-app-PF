import React from 'react';
import Header from '../components/Header';

function Reseñas() {
    const reviews = [
        { user: 'Juan', review: 'Excelente calidad en los productos' },
        { user: 'Maria', review: 'Buena atención y rápido servicio' }
    ];

    return (
        <div className="reseñas-page">
            <Header />
            <section className="section reviews-section">
                <h3>Reseñas de Clientes</h3>
                <ul className="review-list">
                    {reviews.map((review, index) => (
                        <li key={index} className="review-item">
                            <p><strong>{review.user}:</strong> {review.review}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Reseñas;
