import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
    <div>
        <h1>{item.title}</h1>
        <div>
            <span>{item.created}</span> | <span>{item.city_label}</span>
        </div>
        <p>{item.description}</p>
        <ul>
            {item.params && item.params.map((param, index) => 
                <li key={index}>{param[0]}: {param[1]}</li>
            )}
        </ul>
        <Link to="/">Back</Link>
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default Item;
