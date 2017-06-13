import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './img/placeholder.png';
import './Item.css';

const Item = ({ item }) => (
    <div className="Item">
        <article className="Item__article">
            <header className="Item__header">
                <h1 className="Item__title">{item.title}</h1>
                <p className="Item__meta">
                    <time>{item.created}</time> | <span>{item.city_label}</span>
                </p>
            </header>
            <figure className="Item__picture">
                <img src={placeholder} alt={item.title} />
            </figure>
            <div className="Item__body">
                <p>
                    <pre>{item.description}</pre>
                </p>
            </div>
            <footer className="Item__footer">
                <ul className="Item__params">
                    {item.params && item.params.map((param, index) => 
                        <li key={index} className="Item__param">{param[0]}: {param[1]}</li>
                    )}
                </ul>
                <button className="Item__back" onClick={() => {window.history.back()}}>&larr; Back</button>
            </footer>
        </article>
        <aside className="Item__sidebar">
            <section className="Section">
                <h3 className="Section__title">Jakieś reklamy</h3>
                <div className="Section__content">
                    Kupię krowę
                </div>
            </section>
        </aside>
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default Item;
