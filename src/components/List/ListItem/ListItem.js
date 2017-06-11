import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({title, id, params}) => (
    <Link to={`/item/${id}`}>
        <h3>{title}</h3>
        {params.forEach(param => 
            <span>{param[1]}</span>
        )}
    </Link>
);

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    params: PropTypes.array
}

export default ListItem;
