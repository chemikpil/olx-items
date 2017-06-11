import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Pagination from '../Pagination';

class List extends Component {
    getItems(items) {
        const list = [];

        items.forEach(item => {
            list.push(
                <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    params={item.params}
                /> 
            )
        });

        return list;
    }

    render() {
        const { items } = this.props;

        return (
            <div>
                {items.size ? this.getItems(items) : <span>No items</span>}
            </div>
        )
    }
};

List.propTypes = {
    currentPage: PropTypes.number.isRequired,
    items: PropTypes.object
}

export default List;
