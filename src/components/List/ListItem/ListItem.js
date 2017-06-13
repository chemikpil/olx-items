import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ListItem.css';
import placeholder from './img/placeholder.png';

const ListItem = ({ title, id, data, location }) => (
    <article className="List__item">
        <Link to={`/list/${id}`}>
            <header>
                <h3 className="Item__list__title">{title}</h3>
                <p className="Item__list__meta"><time>{data}</time> | {location}</p>
            </header>
            <figure className="List__item__figure">
                <img src={placeholder} alt=""/>
            </figure>
        </Link>
    </article>
);

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default ListItem;
